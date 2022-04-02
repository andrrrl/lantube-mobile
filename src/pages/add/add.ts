import { Component, Input, OnDestroy } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { VideosService } from './../../app/services/videos.service';

@Component({
  selector: 'app-page-add',
  templateUrl: 'add.html',
})
export class AddPage implements OnDestroy {
  @Input() youtubeVideo: any;
  private addSub: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public videosService: VideosService
  ) {}

  addVideo() {
    this.addSub = this.videosService.add(this.extractVideoId()).subscribe();
  }

  extractVideoId() {
    return this.youtubeVideo
      .trim()
      .replace(/http(s?):\/\/(w{3}?)(\.?)youtube\.com\/watch\?v=/, '');
  }

  ngOnDestroy() {
    this.addSub.unsubscribe();
  }
}
