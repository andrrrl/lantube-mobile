import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, FabContainer, Content } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { PlayerService } from '../../app/services/player.service';
import { SearchPage } from '../search/search';
import { ImageModalPage } from '../modal/imageModal';
import { IVolume } from '../../app/interfaces/IVolume.interface';
import { ServerService } from '../../app/services/server.service';
import { IPlayerStats } from '../../app/interfaces/IPlayerStats';
@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    @ViewChild('fab') fab: FabContainer;
    @ViewChild('content') content: Content;

    videos: any[] = [];
    playerStats: IPlayerStats;
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

        this.fab.toggleList();
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

    swapToTop(id) {

        let newTop = this.videos.find(x => x.videoId === id);
        let newTopIndex = this.videos.indexOf(newTop);

        let currentTop = this.videos[0];
        currentTop.videoId = newTop.videoId;
        currentTop.order = newTop.order;
        currentTop.videoInfo.videoId = newTop.videoId;
        this.videos[newTopIndex] = currentTop;

        newTop.videoId = `video${this.videos.length}`;
        newTop.order = this.videos.length;
        newTop.videoInfo.videoId = `video${this.videos.length}`;
        this.videos[0] = newTop;

        if (this.playerStats) {
            if (this.playerStats.status === 'playing' && this.playerStats.videoId === id) {
                this.playerStats.videoId = `video${this.videos.length}`;
                this.playerStats.videoInfo = newTop.videoInfo;
            } else if (this.playerStats.status === 'playing' && this.playerStats.videoId === `video${this.videos.length}`) {
                this.playerStats.videoId = currentTop.videoId;
                this.playerStats.videoInfo = currentTop.videoInfo;
            }

            this.playerService.update(this.playerStats, newTop.videoId).subscribe(stats => {
                this.playerStats = stats;
            });
        }
    }

    moveToTop(id) {
        let newTop = this.videos.find(x => x.videoId === id);
        let newTopIndex = this.videos.indexOf(newTop);
        let currentTop = this.videos[0];

        this.videos.splice(newTopIndex, 1);
        this.videos = [newTop, ...this.videos];


        this.reorderList();

        // Update Player Stats
        if (this.playerStats) {
            if (this.playerStats.status === 'playing' && this.playerStats.videoId === id) {
                this.playerStats.videoId = `video${this.videos.length}`;
                this.playerStats.videoInfo = newTop.videoInfo;
            } else if (this.playerStats.status === 'playing' && this.playerStats.videoId === `video${this.videos.length}`) {
                this.playerStats.videoId = currentTop.videoId;
                this.playerStats.videoInfo = currentTop.videoInfo;
            }

            this.playerService.update(this.playerStats, id).subscribe(stats => {
                // this.playerStats = stats;
            });
        }
    }

    reorderList() {
        let i = this.videos.length;
        for (let video of this.videos) {
            video.videoId = video.videoInfo.videoId = 'video' + i;
            video.order = i;
            i--;
        }
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

    // scrollToTop() {
    //     this.content.scrollToTop();
    // }

    // scrollToBottom() {
    //     this.content.scrollToBottom();
    // }

}
