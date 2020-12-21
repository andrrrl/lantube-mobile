import { ConfigService } from './../../services/config.services';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { merge, Observable, throwError } from 'rxjs';
import { catchError, debounceTime, tap } from 'rxjs/operators';
import { PlayerService } from 'src/app/services/player.service';
import { IPlayerStats } from '../../interfaces/IPlayerStats';
import { IVolume } from 'src/app/interfaces/IVolume.interface';
import { AddComponent } from '../../search/add/add.component';

@Component({
    selector: 'app-player',
    templateUrl: './player.page.html',
    styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
    serverStats$: Observable<IPlayerStats>;
    stats$: Observable<IPlayerStats>;
    connected: boolean;
    serverStats: any;
    loader: HTMLIonLoadingElement;

    constructor(
        private playerService: PlayerService,
        private configService: ConfigService,
        public loadingController: LoadingController,
        public modalController: ModalController,
        public toastController: ToastController
    ) { }

    async ngOnInit() {

        console.log('init');




    }

    async ionViewDidEnter() {

        this.loader = await this.loadingController.create({
            message: 'Conectando API Lantube...',
        });
        await this.loader.present();

        // Trae los server stats
        this.serverStats$ = merge(this.playerService.getStats(), this.playerService.onNewMessage()).pipe(
            catchError(async (err) => {
                console.log('Error HttpClient...', err);
                await this.loader.dismiss();
                return throwError(err);
            }),
            tap(async () => {
                this.connected = true;
                await this.loader.dismiss();
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
