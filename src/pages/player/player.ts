import { environment } from '../../environments/environment';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { VideosService } from './../../app/services/videos.service';
import { IVolume } from '../../app/interfaces/IVolume.interface';
// import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'player',
    templateUrl: 'player.html',
    styles: [
        './player.css'
    ]
})
export class PlayerPage {

    @Input() playerStats: any;

    @Output() stopAllPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playAllPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playPrevPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() playNextPlayer: EventEmitter<any> = new EventEmitter<any>();
    @Output() volumePlayer: EventEmitter<IVolume> = new EventEmitter<IVolume>();

    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public videosService: VideosService,
        public viewCtrl: ViewController) {
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
}