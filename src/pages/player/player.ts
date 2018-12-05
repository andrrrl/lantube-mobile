import { environment } from '../../environments/environment';
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
    videosTmp: any[];
    loader: any;
    // Player configurations from the API
    videoModes: any[] = [
        'windowed',
        'fullscreen',
        'chromecast',
        'audio only'
    ];

    // Server stats
    public serverStats: any = {};
    // Server stats
    // public playerStats: any = {
    //     videoId: '',
    //     status: 'idle'
    // };

    // Player settings
    public player = {};

    // List of all videos from the API
    public videos = [];

    // Current selected video
    public currentVideo: any = {};

    // New video to be added thru <input>
    public videoURL: any;

    // private EVENT_URL = environment.API + '/api/stats?type=player';
    // private serverMessage: any = {};
    // private eventSource: any;

    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;

    public volumeRange: any = { upper: 100 };



    ionViewDidLoad() {
        // this.getPlayerStats();
    }

    async ionViewDidEnter() {

        this.getPlayerStats();
        // this.showLoader('Cargando lista de videos...');
        // await this.loader.present();

        this.playerService.onNewMessage().subscribe(stats => {
            this.playerStats = JSON.parse(JSON.stringify(stats));
            console.log({ stats });
        });

    }



    playPause() {
        this.showLoader('Reproduciendo...');
        this.playerService.playPause().subscribe(playback => {
            this.currentVideo = playback;
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
       * Get server
       */
    // getServerStats() {
    //     this.serverService.get({ type: 'server' }).subscribe(stats => {
    //         this.serverStats = stats;
    //     });
    // }

    /**
     * Get player stats (current volume, last video, etc)
     */
    getPlayerStats() {
        this.serverService.get().subscribe(stats => {
            this.playerStats = stats;
        });

    }

    /**
     * Get player configs and stats
     */
    getPlayer() {
        this.playerService.get(environment.PLAYER).subscribe(player => {
            this.player = player;
        });
    }

    playPrev() {
        this.showLoader('Reproduciendo...');
        this.playerService.playPrev().subscribe(playback => {
            this.currentVideo = playback;
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
            this.currentVideo = playback;
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
            this.playerStats.status = 'idle';
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
        });
    }

    // /**
    //  * Add video to the list of videos
    //  * @param youtubeURL Youtube URI or ID
    //  */
    // addVideo() {
    //     const params = {
    //         video: this.videoURL
    //     };

    //     this.videosService.save(params).subscribe(video => {
    //         this.videos = [...this.videos, video];
    //         this.videoURL = '';
    //         this.getServerStats();
    //     });
    // }





    isPlaying(id) {
        return false;
    }

    setVolume(type) {
        return type;
    }


    getItems(ev) {
        // Reset items back to all of the items
        this.videos = this.videosTmp;

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.videos = this.videos.filter((video) => {
                return (video.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }


    /**
     * Tools
     */

    // Initialize player settings
    updatePlayer() {
        const params = {
            player: 'mpv',
            player_mode: 'windowed',
            player_volume: 50,
            player_volume_step: 5,
            player_is_muted: false,
            player_playlist: '--playlist'
        };

        this.playerService.update(params).subscribe(player => {
            this.player = player;
        });

    }

    // Initializa server stats
    updateServerStats() {
        const params = {
            player: 'mpv',
            status: 'stopped',
            videoId: 'video1',
            last_updated: new Date()
        };

        this.serverService.update(params).subscribe(stats => {
            this.serverStats = stats;
        });
    }

    presentAddModal() {
        this.navCtrl.push(SearchPage);
    }
}