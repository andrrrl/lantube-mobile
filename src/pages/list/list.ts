import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { PlayerService } from '../../app/services/player.service';
import { SearchPage } from '../search/search';
import { ImageModalPage } from '../modal/imageModal';
import { IVolume } from '../../app/interfaces/IVolume.interface';
import { ServerService } from '../../app/services/server.service';
@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    videos: any[] = [];
    playerStats: any;
    videosAux: any[] = [];

    constructor(public navCtrl: NavController,
        public videosService: VideosService,
        public alertCtrl: AlertController,
        public serverService: ServerService,
        public playerService: PlayerService) {

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

        this.getAllVideos();

        this.videosService.onNewMessage().subscribe(videosMessage => {
            if (videosMessage.message === 'getAll' || videosMessage.message === 'added' || videosMessage.message === 'deleted') {
                this.getAllVideos();
            }
        });
    }

    /**
     * Get player stats (current volume, last video, etc)
     */
    getPlayerStats() {
        this.serverService.get().subscribe(stats => {
            this.playerStats = stats;
        });

    }

    stopAll() {
        this.playerService.stopAll().subscribe();
    }

    playPause() {
        this.playerService.pause().subscribe();
    }

    playPrev() {
        this.playerService.playPrev().subscribe();
    }

    playNext() {
        this.playerService.playNext().subscribe();
    }

    volume(change: IVolume) {
        this.playerService.setVolume(change).debounceTime(200).subscribe();
    }

    /**
     * Get full list of videos
     */
    getAllVideos() {
        this.videosService.get({}).subscribe(videos => {
            videos = JSON.parse(JSON.stringify((videos)));
            this.videos = videos.sort((a, b) => parseInt(b.videoId.replace(/video/, '')) - parseInt(a.videoId.replace(/video/, '')));
            this.videosAux = this.videos;
        });
    }

    /**
     * Play selected video by ID
     * @param id Redis or MongoDB video ID
     */
    async play(id) {
        this.playerService.play(id).subscribe();
        // this.navCtrl.pop();
    }

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

    showImageModal(img) {
        this.navCtrl.push(ImageModalPage, { img: img });
    }

    presentAddModal() {
        this.navCtrl.push(SearchPage);
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.videos = this.videosAux;

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.videos = this.videos.filter((video) => {
                return (video.videoInfo.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

}
