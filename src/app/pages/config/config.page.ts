import { Observable } from 'rxjs';
import { AfterViewInit, Component, } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ConfigService } from '../../services/config.services';
import { PlayerService } from '../../services/player.service';
import { Location } from '@angular/common';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-config',
    templateUrl: './config.page.html',
    styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements AfterViewInit {

    APIUrl: string;
    APIPort = 3000;
    audioOnly = false;
    audioOnly$: Observable<any>;

    constructor(
        private location: Location,
        public loadingCtrl: LoadingController,
        public playerService: PlayerService,
        public configService: ConfigService,
        public toastController: ToastController) {
    }

    ngAfterViewInit(): void {

        if (!this.configService.getAPIUrl()) {
            this.APIUrl = `http://${window.location.hostname}`;
        } else {
            this.APIUrl = this.configService.getAPIUrl();
        }
        if (this.APIUrl.indexOf('http') > -1) {
            this.configService.setAPIEndpoint(this.APIUrl, this.APIPort);
        }

        this.audioOnly$ = this.playerService.get('player').pipe(
            tap(player => this.audioOnly = player.playList)
        );
    }

    goBack() {
        this.location.back();
    }

    setAPIEndpoint() {
        this.configService.setAPIEndpoint(this.APIUrl, this.APIPort);
        if (this.configService.getAPIEndpoint()) {
            this.presentToast('Configuración guardada.');
        } else {
            this.presentToast('No se pudo guardar la configuración.');
        }
    }

    toggleAudioOnly() {
        this.playerService.playList();
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}
