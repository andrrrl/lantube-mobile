import { ConfigService } from './../../services/config.services';
import { Component } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { merge, Observable } from 'rxjs';
import { catchError, debounceTime, tap } from 'rxjs/operators';
import { PlayerService } from '../..//services/player.service';
import { IPlayerStats } from '../../interfaces/IPlayerStats';
import { IVolume } from '../../interfaces/IVolume.interface';
import { AddComponent } from '../search/add/add.component';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-player',
    templateUrl: './player.page.html',
    styleUrls: ['./player.page.scss'],
})
export class PlayerPage {
    serverStats$: Observable<IPlayerStats>;
    stats$: Observable<IPlayerStats>;
    connected = false;
    serverStats: any;
    loading: HTMLIonLoadingElement;

    constructor(
        private playerService: PlayerService,
        private configService: ConfigService,
        public loadingController: LoadingController,
        public modalController: ModalController,
        // private activatedRoute: ActivatedRoute,
        public toastController: ToastController,
        public router: Router
    ) { }



    async ionViewWillEnter() {
        if (!this.connected) {
            this.loading = await this.loadingController.create({
                message: 'Conectando API Lantube...',
                duration: 10000
            });
            await this.loading.present();
        }
        // Init!
        this.init();
    }

    async init() {

        this.playerService.restart().subscribe(() => {

            // Trae los server stats
            this.serverStats$ = merge(...[this.playerService.getStats(), this.playerService.onNewMessage()]).pipe(
                catchError(async (err) => {
                    console.error('API down?', err);
                    await this.loading.dismiss();
                    this.router.navigate(['config']);
                }),
                tap(async () => {
                    if (!this.connected) {
                        await this.loading.dismiss();
                    }
                    this.connected = true;
                })
            );

        });

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

    volume(change: IVolume) {
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
