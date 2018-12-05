import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, Modal } from 'ionic-angular';
import { VideosService } from '../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


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
  public playerStats: any = {
    videoId: '',
    status: 'idle'
  };

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
    public videosService: VideosService,
    public serverService: ServerService,
    public playerService: PlayerService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
  }


  ionViewDidLoad() {
    // this.getPlayerStats();
  }

  async ionViewDidEnter() {

    // this.getPlayerStats();
    this.showLoader('Cargando lista de videos...');
    await this.loader.present();
    this.getAllVideos();

    this.videosService.onNewMessage().subscribe(videosMessage => {
      if (videosMessage.message === 'getAll' || videosMessage.message === 'added' || videosMessage.message === 'deleted') {
        this.getAllVideos();
      }
    });
    this.playerService.onNewMessage().subscribe(stats => {
      this.playerStats = stats;
    });

  }
  /**
     * Get full list of videos
     */
  getAllVideos() {
    this.videosService.get({}).subscribe(videos => {
      this.videos = videos.sort((a, b) => parseInt(b.videoId.replace(/video/, '')) - parseInt(a.videoId.replace(/video/, '')));
      this.videosTmp = this.videos;
      this.loader.dismiss();
    });
  }

  /**
   * Play selected video by ID
   * @param id Redis or MongoDB video ID
   */
  async play(id) {
    this.showLoader('Reproduciendo...');
    await this.loader.present();
    this.playerService.play(id).subscribe(async playback => {
      this.currentVideo = playback;
      this.getPlayerStats();
      await this.loader.dismiss();
    });

  }

  playPause() {
    this.showLoader('Reproduciendo...');
    this.playerService.playPause().subscribe(playback => {
      this.currentVideo = playback;
      this.playerService.onNewMessage().subscribe(stats => {
        this.playerStats = stats;
        this.hideLoader();
      });
    });

  }

  async showLoader(text: string) {
    this.loader = this.loadingCtrl.create({
      content: text,
    });
  }

  async hideLoader() {
    await this.loader.dismiss();
  }



  /**
     * Get server
     */
  getServerStats() {
    this.serverService.get().subscribe(stats => {
      this.serverStats = stats;
    });
  }

  /**
   * Get player stats (current volume, last video, etc)
   */
  getPlayerStats() {
    this.serverService.get().subscribe(stats => {
      this.playerStats = stats;
      this.currentVideo.videoId = this.playerStats.videoId;
    });

  }

  playPrev() {
    this.showLoader('Reproduciendo...');
    this.playerService.playPrev().subscribe(playback => {
      this.currentVideo = playback;
      this.playerService.onNewMessage().subscribe(stats => {
        this.playerStats = stats;
        this.hideLoader();
      });
      this.hideLoader();
    });

  }
  playNext() {
    this.showLoader('Reproduciendo...');
    this.playerService.playNext().subscribe(playback => {
      this.currentVideo = playback;
      this.playerService.onNewMessage().subscribe(stats => {
        this.playerStats = stats;
        this.hideLoader();
      });
      this.hideLoader();
    });

  }

  /**
   * Plays PLS file generated "on the fly"
   */
  playAll() {
    this.playerService.playAll().subscribe(playback => {
      this.currentVideo = playback;
    });
  }

  /**
   * Stops all playback
   */
  stopAll() {
    this.showLoader('Deteniendo reproducción...');
    this.playerService.stopAll().subscribe(playback => {
      this.currentVideo = playback;
      this.playerStats.status = 'idle';
      this.hideLoader();
    });
  }

  /**
   * Pauses playback
   */
  pause() {
    this.playerService.pause().subscribe(playback => {
      this.currentVideo = playback;
      this.playerStats.status = 'paused';
    });
  }

  /**
   * Changes volume
   */
  volume(change) {
    this.playerService.setVolume(change).debounceTime(200).subscribe(playback => {
      this.currentVideo = playback;
      this.currentVolume = change;
    });
  }

}
