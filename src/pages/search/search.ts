import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { YoutubeService } from '../../app/services/youtube.service';
import { VideosService } from '../../app/services/videos.service';

@Component({
  selector: 'app-page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements AfterViewInit {
  @ViewChild('input') searchInput;

  public youtubeVideo: any;
  public term = '';
  public videoList: any[] = [];

  loader: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public youtubeService: YoutubeService,
    public videosService: VideosService,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    // we need to delay our call in order to work with ionic ...
    setTimeout(() => {
      this.elementRef.nativeElement.querySelector('input');
      // this.renderer.focus(element, 'focus', []);
    }, 1000);
  }
  search() {
    if (typeof this.term === 'string' && this.term.length) {
      this.showLoader('Buscando videos...');
      this.videoList = [];
      this.youtubeService.search(this.term).subscribe((result) => {
        this.videoList = result;
        this.hideLoader();
      });
    }
  }

  showImageModal(img) {
    // const modal = this.modalCtrl.create(ImageModalPage, { img: img });
    // modal.present();
    // this.navCtrl.push(ImageModalPage, { img: img });
  }

  showLoader(text: string) {
    this.loader = this.loadingCtrl.create({
      message: text,
      duration: 20000,
      backdropDismiss: true,
    });
    this.loader.present();
  }

  hideLoader() {
    this.loader.dismiss();
  }

  showConfirmAdd(index) {
    const confirm = this.alertCtrl.create({
      header: '¿Agregar video?',
      message: 'El video se va a agregar a la lista',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Disagree clicked');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.addVideo(index);
            console.log('Agree clicked');
          },
        },
      ],
    });
    confirm.then(() => {});
  }

  goBack() {
    this.navCtrl.pop();
    // this.viewCtrl.dismiss();
  }

  addVideo(index: number) {
    this.youtubeVideo = this.selectVideo(index);
    this.videosService.add(this.extractVideoId()).subscribe((video) => {
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
