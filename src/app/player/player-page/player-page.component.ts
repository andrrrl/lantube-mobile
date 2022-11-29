import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { forkJoin, merge, Observable, throwError } from 'rxjs';
import { catchError, debounceTime, tap } from 'rxjs/operators';
import { PlayerService } from '../..//services/player.service';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { PlayerStats } from 'src/app/interfaces/player-stats.interface';
import { AddComponent } from 'src/app/search/add/add.component';
import { Volume } from 'src/app/interfaces/volume.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
})
export class PlayerPageComponent implements OnInit {
  serverStats$!: Observable<any>;
  stats$!: Observable<PlayerStats>;
  connected = false;
  serverStats: any;
  loading!: HTMLIonLoadingElement;

  constructor(
    private playerService: PlayerService,
    private configService: ConfigService,
    public loadingController: LoadingController,
    public modalController: ModalController,
    // private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    public router: Router
  ) { }



  async ngOnInit() {
    if (!this.connected) {
      this.loading = await this.loadingController.create({
        message: 'Conectando API Lantube...',
        duration: 10000
      });
      await this.loading.present();
    }
    this.init();
  }

  async init() {
    // Trae los server stats
    this.playerService.onNewMessage();
    this.serverStats$ = this.playerService.getStats().pipe(
      tap(async () => {
        if (!this.connected) {
          await this.loading.dismiss();
        }
        this.connected = true;
      })
    );
  }

  togglePlayList() {
    this.playerService.playList().subscribe();
  }

  playPause() {
    this.playerService.pause().subscribe();
  }

  playPrev() {
    this.playerService.playPrev().subscribe();
  }

  playNext() {
    this.playerService.playNext().subscribe();
  }

  stopAll() {
    this.playerService.stopAll().subscribe();
  }

  volume(change: Volume) {
    this.playerService.setVolume(change).pipe(
      debounceTime(200)
    ).subscribe();
  }

  async showLoader(text: string) {
    const loading = await this.loadingController.create({
      message: text,
    });
    const { role, data } = await loading.onDidDismiss();
  }

  async presentAddModal() {
    const modal = await this.modalController.create({
      component: AddComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });

    return await modal.present();
  }

  async showServerStats() {
    const message = `${!this.connected ? 'No conectado a:' : 'Conectado a:'} ${this.configService.getAPIEndpoint()}`;
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }

}
