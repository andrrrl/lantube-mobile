import { environment } from '../../environments/environment';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
// import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'page-add',
    templateUrl: 'add.html'
})
export class AddPage {
    youtubeVideo: any;
    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public videosService: VideosService,
        public viewCtrl: ViewController) {
    }

    goBack() {
        this.navCtrl.pop();
        // this.viewCtrl.dismiss();
    }

    addVideo() {
        this.videosService.add(this.extractVideoId()).subscribe(video => {
            // this.goBack();
            // this.viewCtrl.dismiss(video);
            this.navCtrl.pop();
        });
    }

    extractVideoId() {
        return this.youtubeVideo.trim().replace(/http(s?):\/\/(w{3}?)(\.?)youtube\.com\/watch\?v=/, '');
    }
}