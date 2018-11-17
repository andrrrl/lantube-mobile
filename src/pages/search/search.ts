import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { YoutubeService } from '../../app/services/youtube.service';
import { VideosService } from '../../app/services/videos.service';
import { ImageModalPage } from '../modal/imageModal';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    public youtubeVideo: any;
    public term = '';
    public videoList: any[] = [];

    loader: any;

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public youtubeService: YoutubeService,
        public videosService: VideosService) {

    }

    search() {
        if (typeof this.term === 'string' && this.term.length) {
            this.showLoader('Buscando videos...');
            this.videoList = [];
            this.youtubeService.search(this.term).subscribe(result => {
                this.videoList = result;
                this.hideLoader();
            });
        }
    }

    showImageModal(img) {
        // const modal = this.modalCtrl.create(ImageModalPage, { img: img });
        // modal.present();
        this.navCtrl.push(ImageModalPage, { img: img });
    }

    showLoader(text: string) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    }

    hideLoader() {
        this.loader.dismiss();
    }

    showConfirmAdd(index) {
        let confirm = this.alertCtrl.create({
            title: '¿Agregar video?',
            message: 'El video se va a agregar a la lista',
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
                        this.addVideo(index);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    goBack() {
        this.navCtrl.pop();
        // this.viewCtrl.dismiss();
    }

    addVideo(index: number) {
        this.youtubeVideo = this.selectVideo(index);
        this.videosService.add(this.extractVideoId()).subscribe(video => {
            this.navCtrl.pop();
        });
    }

    selectVideo(index: number) {
        return this.videoList[index];
    }

    extractVideoId() {
        return this.youtubeVideo.url.trim().replace(/\/watch\?v=/, '');
    }

}
