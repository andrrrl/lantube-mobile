import { Observable } from 'rxjs';
import { AfterViewInit, Component, } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { PlayerService } from '../../services/player.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-config',
    templateUrl: './config-page.component.html',
    styleUrls: ['./config-page.component.scss'],
})
export class ConfigPageComponent implements AfterViewInit {

    audioOnly = false;
    audioOnly$!: Observable<any>;

    constructor(
        public loadingCtrl: LoadingController,
        public playerService: PlayerService,
        public toastController: ToastController,
        public router: Router
    ) {
    }

    ngAfterViewInit(): void {
        this.audioOnly$ = this.playerService.get('player').pipe(
            tap(player => this.audioOnly = player.playList)
        );
    }

    toggleAudioOnly() {
        this.playerService.playList().subscribe();
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}
