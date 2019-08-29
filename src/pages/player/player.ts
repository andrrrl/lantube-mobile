import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, Modal, AlertController, ModalController, FabContainer } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';
import { SearchPage } from '../search/search';
import { ListPage } from '../list/list';
import { IVolume } from '../../app/interfaces/IVolume.interface';
import { ConfigPage } from '../config/config';
import { ConfigService } from '../../app/services/config.services';
import { SensorService } from '../../app/services/sensor.service';

@Component({
    selector: 'player',
    templateUrl: 'player.html',
    styles: [
        './player.scss'
    ]
})
export class PlayerPage {

    @ViewChild('fab') fab: FabContainer;

    @Input() playerStats: any;
    connected = false;
    sensorOK = false;
    sensorStats: any;
    coreTemp: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public loadingCtrl: LoadingController,
        public configService: ConfigService,
        public videosService: VideosService,
        public serverService: ServerService,
        public playerService: PlayerService,
        public sensorService: SensorService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController) {
    }

    currentVolume: any;
    addModal: Modal;
    loader: any;

    // List of all videos from the API
    public videos = [];

    ionViewDidLoad() {
        // this.fab.toggleList();
    }

    ionViewWillEnter() {

        if (typeof this.playerStats === 'undefined') {
            this.getPlayerStats();
        }
        if (!this.sensorOK) {
            debugger;
            this.getSensorStats();
        }
    }

    async ionViewDidEnter() {

        setTimeout(() => {
            this.configService.autoConnect();
        }, 500);

        if (this.navCtrl.canGoBack()) { //Can we go back?
            // this.navCtrl.popTo(this.navCtrl.getActive().component);
            // this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }
        this.playerService.onNewMessage().subscribe(stats => {
            this.playerStats = JSON.parse(JSON.stringify(stats));
            this.connected = true;
        });
        // this.playerService.onEvent(SocketEvent.DISCONNECT).subscribe(() => {
        //     this.connected = false;
        // });
        // this.playerService.onEvent(SocketEvent.CONNECT).subscribe(() => {
        //     this.connected = true;
        // });
        // this.playerService.onEvent(SocketEvent.RECONNECT).subscribe(() => {
        //     this.connected = true;
        // });

        this.sensorService.onNewMessage().subscribe(stats => {
            console.log({ stats });
            if (stats.humedad) {
                this.sensorStats = JSON.parse(JSON.stringify(stats));
            }
            if (stats.sensor === 'core') {
                this.coreTemp = JSON.parse(JSON.stringify(stats));
            }
            this.sensorOK = true;

        });
        // this.sensorService.onEvent(SocketEvent.DISCONNECT).subscribe(() => {
        //     this.sensorOK = false;
        // });
        // this.sensorService.onEvent(SocketEvent.CONNECT).subscribe(() => {
        //     this.sensorOK = true;
        // });
        // this.sensorService.onEvent(SocketEvent.RECONNECT).subscribe(() => {
        //     this.sensorOK = true;
        // });
    }


    // Toggle continuous mode
    playList() {
        this.playerService.playList().subscribe(playlistStats => {
            this.playerStats = playlistStats;
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
    presentAddModal() {
        this.navCtrl.push(SearchPage);
    }
    presentConfigModal() {
        this.navCtrl.push(ConfigPage);
    }

    /**
     * Get player stats (current volume, last video, etc)
     */
    getPlayerStats() {
        this.serverService.get().subscribe(stats => {
            this.playerStats = stats;
        });
    }

    getSensorStats() {
        // this.sensorService.get('dht').subscribe(stats => {
        //     this.sensorOK = true;
        // });
        if (!this.sensorOK) {
            this.sensorService.get('coreTemp').subscribe(stats => {
                this.sensorOK = true;
            });
        }
    }

    coreTempStatus() {
        return this.coreTemp.value > this.coreTemp.dangerTempLimit ? 'danger' : 'cool';
    }

    playPrev() {
        this.playerService.playPrev().subscribe();
    }

    playNext() {
        this.playerService.playNext().subscribe();
    }

    /**
     * Plays all videos (from current) in ascending order
     */
    playAll() {
        this.playerService.playAll().subscribe();
    }

    playPause() {
        this.playerService.pause().subscribe();
    }

    /**
     * Stops all playback
     */
    stopAll() {
        this.playerService.stopAll().subscribe();
    }

    /**
     * Pauses playback
     */
    pause() {
        this.playerService.pause().subscribe();
    }

    /**
     * Changes volume
     */
    volume(change: IVolume) {
        this.playerService.setVolume(change).debounceTime(200).subscribe(playback => {
            this.currentVolume = change;
        });
    }

}