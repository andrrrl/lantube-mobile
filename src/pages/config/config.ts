import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { ConfigService } from './../../app/services/config.services';
import { PlayerService } from '../../app/services/player.service';

@Component({
    selector: 'page-config',
    templateUrl: 'config.html'
})

export class ConfigPage {

    APIEndpoint: string;
    APIPort: number;
    audioOnly = false;

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public playerService: PlayerService,
        public configService: ConfigService,
        public viewCtrl: ViewController) {
    }

    ionViewWillEnter() {
        if (!this.configService.getAPIEndpoint()) {
            this.APIEndpoint = window.location.hostname;
            this.configService.setAPIEndpoint(this.APIEndpoint, this.APIPort);
        } else {
            this.APIEndpoint = this.configService.getAPIEndpoint();
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
        this.configService.setAPIEndpoint(this.APIEndpoint, this.APIPort);
    }

    toggleAudioOnly() {
        this.audioOnly = !this.audioOnly;
    }

}