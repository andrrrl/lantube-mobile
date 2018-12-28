import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { VideosService } from '../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';
import { IPlayerStats } from '../../app/interfaces/IPlayerStats';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    // Current vol
    currentVolume: any;

    // Spinner
    loader: any;

    // Server stats
    public playerStats: IPlayerStats;

    // List of all videos from the API
    public videos = [];

    constructor(
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public videosService: VideosService,
        public serverService: ServerService,
        public playerService: PlayerService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        if (typeof this.playerStats === 'undefined') {
            this.getPlayerStats();
        }

        this.playerService.onNewMessage().subscribe(stats => {
            this.playerStats = stats;
        });
    }

    async ionViewDidEnter() {

        this.showLoader('Cargando lista de videos...');
        await this.loader.present();

        this.videosService.onNewMessage().subscribe(videosMessage => {
            if (videosMessage.message === 'getAll' || videosMessage.message === 'added' || videosMessage.message === 'deleted') {
                this.getAllVideos();
            }
        });
    }
    /**
       * Get full list of videos
       */
    getAllVideos() {
        this.videosService.get({}).subscribe(videos => {
            this.videos = videos.sort((a, b) => parseInt(b.videoId.replace(/video/, '')) - parseInt(a.videoId.replace(/video/, '')));
            this.loader.dismiss();
        });
    }

    playPause() {
        // if(this.playerStats.status === 'playing') {

        //     this.playerService.pause().subscribe();
        // } else {
        //     this.playerService.play().subscribe();
        // }

    }

    async showLoader(text: string) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
    }

    async hideLoader() {
        await this.loader.dismiss();
    }

    /**
     * Get player stats (current volume, last video, etc)
     */
    getPlayerStats() {
        this.serverService.get().subscribe(stats => {
            if (typeof stats !== 'undefined') {
                this.playerStats = stats;
            } else {
                this.playerStats = {
                    status: 'stopped',
                    playlist: false
                }
            }
        });

    }

    playPrev() {
        this.playerService.playPrev().subscribe();

    }

    playNext() {
        this.playerService.playNext().subscribe();

    }

    playCurrent() {
        this.playerService.play(`video${this.videos.length - 1}`).subscribe();
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

}
