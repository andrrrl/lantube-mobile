import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ToastController } from 'ionic-angular';
import { ConfigService } from './../../app/services/config.services';
import { PlayerService } from '../../app/services/player.service';

@Component({
    selector: 'page-config',
    templateUrl: 'config.html'
})

export class ConfigPage {

    APIUrl: string;
    APIPort = 3000;
    audioOnly = false;

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public playerService: PlayerService,
        public configService: ConfigService,
        public viewCtrl: ViewController,
        public toastController: ToastController) {
    }

    ionViewWillEnter() {
        if (!this.configService.getAPIUrl()) {
            this.APIUrl = `http://${window.location.hostname}`;
        } else {
            console.log(this.configService.getAPIUrl());
            this.APIUrl = this.configService.getAPIUrl();
        }
        if (this.APIUrl.indexOf('http') > -1) {
            this.configService.setAPIEndpoint(this.APIUrl, this.APIPort);
        }
    }

    goBack() {
        if (this.navCtrl.canGoBack()) { //Can we go back?
            this.navCtrl.pop();
        }
    }

    saveAndGoBack() {
        this.playerService.playList().subscribe(playlistStats => {
            playlistStats;
        });
        if (this.navCtrl.canGoBack()) { //Can we go back?
            this.navCtrl.pop();
        }
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
        this.audioOnly = !this.audioOnly;
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}