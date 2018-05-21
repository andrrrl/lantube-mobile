import { environment } from '../../environments/environment';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ModalController, ViewController, Modal } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';

import { AddPage } from '../add/add';
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
        // public navParams: NavParams,
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

        // this.getPlayer();
        this.getAllVideos();
        this.getPlayerStats();
        // this.getServerStats();
    }

    // itemTapped(event, item) {
    //     // That's right, we're pushing to ourselves!
    //     this.navCtrl.push(AddPage, {
    //         item: item
    //     });
    // }

    // goToAddPage() {
    //     //push another page onto the history stack
    //     //causing the nav controller to animate the new page in
    //     this.navCtrl.push(AddPage);
    // }

    showLoader(text: string) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    }

    hideLoader() {
        this.loader.dismiss();
    }

    presentAddModal() {
        // this.addModal = this.modalCtrl.create(AddPage);
        // this.addModal.onDidDismiss(data => {
        //     if (data) {
        //         this.getAllVideos();
        //     }
        // });
        // this.addModal.present();
        this.navCtrl.push(AddPage);
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
        this.serverService.get({ type: 'player' }).subscribe(stats => {
            this.playerStats = stats;
            this.volumeRange = this.currentVolume = this.playerStats.volume;
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
     * Get full list of videos
     */
    getAllVideos() {
        this.showLoader('Cargando lista de videos...');
        this.videosService.get({}).subscribe(videos => {
            this.videos = videos;
            this.videosTmp = this.videos;
            this.hideLoader();
        });
    }

    /**
     * Play selected video by ID
     * @param id Redis or MongoDB video ID
     */
    play(id) {
        this.showLoader('Reproduciendo...');
        this.videosService.play(id).subscribe(playback => {
            this.currentVideo = playback;
            this.hideLoader();
        });
    }

    playPause() {
        this.showLoader('Reproduciendo...');
        this.videosService.playPause().subscribe(playback => {
            this.currentVideo = playback;
            this.hideLoader();
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
            this.hideLoader();
        });
    }

    /**
     * Pauses playback
     */
    pause() {
        this.videosService.pause().subscribe(playback => {
            this.currentVideo = playback;
        });
    }

    /**
     * Changes volume
     */
    volume(change) {
        this.playerService.setVolume((change > this.currentVolume ? 'up' : 'down')).debounceTime(200).subscribe(playback => {
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
