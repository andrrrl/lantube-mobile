import { environment } from '../../environments/environment';
import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
// import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'player',
    templateUrl: 'player.html',
    styles: [
        './player.css'
    ]
})
export class PlayerPage {

    @Output() stopAllPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playPausePlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playPrevPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playNextPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() volumePlayer: EventEmitter<any> = new EventEmitter<any>();

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public videosService: VideosService,
        public viewCtrl: ViewController) {
    }

    stopAllEmit() {
        this.stopAllPlayer.emit(true);
    }
    playPauseEmit() {
        this.playPausePlayer.emit(true);
    }
    playPrevEmit() {
        this.playPrevPlayer.emit(true);
    }
    playNextEmit() {
        this.playNextPlayer.emit(true);
    }
    volumeEmit(upOrDown: 'up' | 'down') {
        this.volumePlayer.emit(upOrDown);
    }
}