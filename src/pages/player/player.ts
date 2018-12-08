import { Component, Input } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, Modal, AlertController, ModalController } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';
import { SearchPage } from '../search/search';
import { ListPage } from '../list/list';


@Component({
    selector: 'player',
    templateUrl: 'player.html',
    styles: [
        './player.scss'
    ]
})
export class PlayerPage {

    @Input() playerStats: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public loadingCtrl: LoadingController,
        public videosService: VideosService,
        public serverService: ServerService,
        public playerService: PlayerService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController) {
    }

    currentVolume: any;
    addModal: Modal;
    loader: any;

    // List of all videos from the API
    public videos = [];

    ionViewDidLoad() {
        if (typeof this.playerStats === 'undefined') {
            this.getPlayerStats();
        }
    }

    async ionViewDidEnter() {
        this.playerService.onNewMessage().subscribe(stats => {
            this.playerStats = JSON.parse(JSON.stringify(stats));
        });
    }

    playPause() {
        this.showLoader('Reproduciendo...');
        this.playerService.playPause().subscribe(playback => {
            this.playerService.onNewMessage().subscribe(stats => {
                this.playerStats = stats;
                this.hideLoader();
            });
        });
    }

    async showLoader(text: string) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
    }

    async hideLoader() {
        await this.loader.dismiss();
    }

    presentListModal() {
        this.navCtrl.push(ListPage);
    }


    /**
     * Get player stats (current volume, last video, etc)
     */
    getPlayerStats() {
        this.serverService.get().subscribe(stats => {
            this.playerStats = stats;
        });

    }

    playPrev() {
        this.showLoader('Reproduciendo...');
        this.playerService.playPrev().subscribe(playback => {
            this.playerService.onNewMessage().subscribe(stats => {
                this.playerStats = stats;
                this.hideLoader();
            });
            this.hideLoader();
        });

    }

    playNext() {
        this.showLoader('Reproduciendo...');
        this.playerService.playNext().subscribe(playback => {
            this.playerService.onNewMessage().subscribe(stats => {
                this.playerStats = stats;
                this.hideLoader();
            });
            this.hideLoader();
        });

    }

    /**
     * Plays PLS file generated "on the fly"
     */
    playAll() {
        this.playerService.playAll().subscribe(playback => {
        });
    }

    /**
     * Stops all playback
     */
    stopAll() {
        this.showLoader('Deteniendo reproducción...');
        this.playerService.stopAll().subscribe(playback => {
            this.hideLoader();
        });
    }

    /**
     * Pauses playback
     */
    pause() {
        this.playerService.pause().subscribe(playback => {
            this.playerStats.status = 'paused';
        });
    }

    /**
     * Changes volume
     */
    volume(change) {
        this.playerService.setVolume(change).debounceTime(200).subscribe(playback => {
            this.currentVolume = change;
        });
    }

    presentAddModal() {
        this.navCtrl.push(SearchPage);
    }
}