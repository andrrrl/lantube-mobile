import { ConfigService } from './../../services/config.services';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
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
    connected: boolean;
    serverStats: any;

    constructor(
        private playerService: PlayerService,
        private configService: ConfigService,
        public loadingController: LoadingController,
        public modalController: ModalController,
        public toastController: ToastController
    ) { }

    ngOnInit() {

        // Trae los server stats
        this.serverStats$ = this.playerService.getStats().pipe(
            tap(() => {
                this.serverStats$ = this.playerService.onNewMessage().pipe(
                    // debounceTime(1000),
                    tap((stats) => {
                        console.log('Server & Player stats updated');
                        this.connected = true;
                    })
                );
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
