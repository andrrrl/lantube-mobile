import { environment } from '../../environments/environment';
import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, Modal } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';

// import { AddPage } from '../add/add';
import { SearchPage } from '../search/search';
import { ImageModalPage } from '../modal/imageModal';
import { IVolume } from '../../app/interfaces/IVolume.interface';
@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    @Output() stopAllPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playAllPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playPrevPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playNextPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() volumePlayer: EventEmitter<IVolume> = new EventEmitter<IVolume>();

    videos: any[] = [];
    playerStats: any;
    currentVideo: any[];

    constructor(public navCtrl: NavController,
        public videosService: VideosService,
        public alertCtrl: AlertController,
        public playerService: PlayerService) {

    }

    ionViewDidLoad() {
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


    stopAllEmit() {
        this.stopAllPlayer.emit(true);
    }
    playAllEmit() {
        this.playAllPlayer.emit(true);
    }
    playPrevEmit() {
        this.playPrevPlayer.emit(true);
    }
    playNextEmit() {
        this.playNextPlayer.emit(true);
    }
    volumeEmit(upOrDown: IVolume) {
        this.volumePlayer.emit(upOrDown);
    }

    /**
     * Get full list of videos
     */
    getAllVideos() {
        this.videosService.get({}).subscribe(videos => {
            this.videos = videos.sort((a, b) => parseInt(b.videoId.replace(/video/, '')) - parseInt(a.videoId.replace(/video/, '')));
            // this.loader.dismiss();
        });
    }

    /**
     * Play selected video by ID
     * @param id Redis or MongoDB video ID
     */
    async play(id) {
        // this.showLoader('Reproduciendo...');
        // await this.loader.present();
        this.playerService.play(id).subscribe(async playback => {
            this.currentVideo = playback;
            // this.getPlayerStats();
            // await this.loader.dismiss();
        });
        this.navCtrl.pop();

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

}
