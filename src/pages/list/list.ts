import { environment } from '../../environments/environment';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, Modal } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';

// import { AddPage } from '../add/add';
import { SearchPage } from '../search/search';
import { ImageModalPage } from '../modal/imageModal';
@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

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
    public playerStats: any = {};

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

    constructor(
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public videosService: VideosService,
        public serverService: ServerService,
        public playerService: PlayerService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController) {

        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        // console.log(this.selectedItem);
    }

    ionViewDidLoad() {
        // this.getAllVideos();
        this.getPlayerStats();
    }

    ionViewDidEnter() {
        // this.videosService.sendMessage('xD');
        this.getAllVideos();

    }

    /**
     * Get full list of videos
     */
    getAllVideos() {
        this.showLoader('Cargando lista de videos...');
        this.loader.present().then(() => {
            this.videosService.get({}).subscribe(videos => {
                this.videos = videos.sort((a, b) => parseInt(b._id.replace(/video/, '')) - parseInt(a._id.replace(/video/, '')));
                this.videosTmp = this.videos;
                this.hideLoader();
                // this.getPlayerStats();

            });
        })
    }

    showLoader(text: string) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
    }

    hideLoader() {
        this.loader.dismiss();
    }

    presentAddModal() {
        this.navCtrl.push(SearchPage);
    }

    showImageModal(img) {
        // const modal = this.modalCtrl.create(ImageModalPage, { img: img });
        // modal.present();
        this.navCtrl.push(ImageModalPage, { img: img });
    }

    /**
       * Get server
       */
    getServerStats() {
        this.serverService.get({ type: 'server' }).subscribe(stats => {
            this.serverStats = stats;
        });
    }

    /**
     * Get player stats (current volume, last video, etc)
     */
    getPlayerStats() {
        // this.serverService.get({ type: 'player' }).subscribe(stats => {
        //     this.playerStats = stats;
        //     this.currentVideo._id = this.playerStats.videoId;

        // });
        this.videosService.onNewMessage().subscribe(stats => {
            if (typeof stats === 'string') {
                this.playerStats = JSON.parse(stats);
            } else {
                this.playerStats = stats;
            }
            console.log('playerStats', this.playerStats);
        });
    }

    /**
     * Get player configs and stats
     */
    getPlayer() {
        this.playerService.get(environment.PLAYER).subscribe(player => {
            this.player = player;
            this.getPlayerStats();
        });
    }

    /**
     * Play selected video by ID
     * @param id Redis or MongoDB video ID
     */
    play(id) {

        this.showLoader('Reproduciendo...');
        this.loader.present().then(() => {
            this.videosService.play(id).subscribe(playback => {
                this.hideLoader();
                // this.loader.dismiss();
                this.currentVideo = playback;
                this.getPlayerStats();
            });
        });

    }

    playPause() {
        this.showLoader('Reproduciendo...');
        this.videosService.playPause().subscribe(playback => {
            this.currentVideo = playback;
            // this.playerStats.status = this.playerStats.status === 'playing' ? 'paused' : 'playing';
            this.videosService.onNewMessage().subscribe(stats => {
                this.playerStats = stats;
                this.hideLoader();
            });
        });

    }

    playNext() {
        this.showLoader('Reproduciendo...');
        this.videosService.playNext().subscribe(playback => {
            this.currentVideo = playback;
            this.hideLoader();
        });

    }


    /**
     * Plays PLS file generated "on the fly"
     */
    playAll() {
        this.videosService.playAll().subscribe(playback => {
            this.currentVideo = playback;
        });
    }

    /**
     * Stops all playback
     */
    stopAll() {
        this.showLoader('Deteniendo reproducción...');
        this.videosService.stopAll().subscribe(playback => {
            this.currentVideo = playback;
            this.playerStats.status = 'idle';
            this.hideLoader();
        });
    }

    /**
     * Pauses playback
     */
    pause() {
        this.videosService.pause().subscribe(playback => {
            this.currentVideo = playback;
            this.playerStats.status = 'paused';
        });
    }

    /**
     * Changes volume
     */
    volume(change) {
        this.playerService.setVolume(change).debounceTime(200).subscribe(playback => {
            this.currentVideo = playback;
            this.currentVolume = change;
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

    /**
     * Remove video from the list of videos
     * @param id Video ID
     */
    removeVideo(id) {
        this.videosService.delete(id).subscribe(removed => {
            this.getAllVideos();
        });
    }

    showConfirmDelete(id) {
        let confirm = this.alertCtrl.create({
            title: '¿Eliminar video?',
            message: 'El video se va a quitar de la lista',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: () => {
                        this.removeVideo(id);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

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
            video_id: 'video2',
            last_updated: new Date()
        };

        this.serverService.update(params).subscribe(stats => {
            this.serverStats = stats;
        });
    }

}
