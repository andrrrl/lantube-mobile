import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { ConfigService } from './../../app/services/config.services';

@Component({
    selector: 'page-config',
    templateUrl: 'config.html'
})

export class ConfigPage {

    APIEndpoint = this.configService.getAPIEndpoint();

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public configService: ConfigService,
        public viewCtrl: ViewController) {
    }

    goBack() {
        if (this.navCtrl.canGoBack()) { //Can we go back?
            this.navCtrl.pop();
        }
    }

    setAPIEndpoint() {
        this.configService.setAPIEndpoint(this.APIEndpoint);
        this.navCtrl.pop();
    }
}