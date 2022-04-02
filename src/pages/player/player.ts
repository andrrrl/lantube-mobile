import { Component, Input, ViewChild } from '@angular/core';
import {
  NavController,
  LoadingController,
  AlertController,
  ModalController,
  IonFab,
  IonModal,
} from '@ionic/angular';
import { VideosService } from './../../app/services/videos.service';
import { ServerService } from '../../app/services/server.service';
import { PlayerService } from '../../app/services/player.service';
import { IVolume } from '../../app/interfaces/IVolume.interface';
import { ConfigService } from '../../app/services/config.services';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: 'player.html',
  styleUrls: ['./player.scss'],
})
export class PlayerPage {
  @ViewChild('fab') fab: IonFab;

  @Input() playerStats: any;
  connected = false;
  playerStats$: any;
  currentVolume: any;
  addModal: IonModal;
  loader: any;

  // List of all videos from the API
  public videos = [];

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public configService: ConfigService,
    public videosService: VideosService,
    public serverService: ServerService,
    public playerService: PlayerService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public router: Router
  ) {}

  ionViewDidLoad() {
    // this.fab.toggleList();
  }

  ionViewWillEnter() {
    if (typeof this.playerStats === 'undefined') {
      this.getPlayerStats();
    }
  }

  async ionViewDidEnter() {
    setTimeout(() => {
      this.configService.autoConnect();
    }, 500);

    this.playerStats$ = this.playerService.onNewMessage().pipe(
      tap(() => {
        this.connected = true;
      })
    );
  }

  async showLoader(text: string) {
    this.loader = this.loadingCtrl.create({
      message: text,
    });
  }

  async hideLoader() {
    await this.loader.dismiss();
  }

  openConfigPage() {
    this.router.navigate(['/config']);
  }
  openSearchPage() {
    this.router.navigate(['/search']);
  }
  openListPage() {
    this.router.navigate(['/list']);
  }

  /**
   * Get player stats (current volume, last video, etc)
   */
  getPlayerStats() {
    this.serverService.get().subscribe((stats) => {
      this.playerStats = stats;
    });
  }

  // Toggle continuous mode
  setPlaylistMode() {
    this.playerService.playList().subscribe((playlistStats) => {
      this.playerStats = playlistStats;
    });
  }

  playPrev() {
    this.playerService.playPrev().subscribe();
  }

  playNext() {
    this.playerService.playNext().subscribe();
  }

  /**
   * Plays all videos (from current) in ascending order
   */
  playAll() {
    this.playerService.playAll().subscribe();
  }

  playPause() {
    this.playerService.pause().subscribe();
  }

  /**
   * Stops all playback
   */
  stopAll() {
    this.playerService.stopAll().subscribe();
  }

  /**
   * Pauses playback
   */
  pause() {
    this.playerService.pause().subscribe();
  }

  /**
   * Changes volume
   */
  volume(change: 'up' | 'down') {
    const vol: IVolume = { volume: change };
    this.playerService.setVolume(vol).subscribe((playback) => {
      this.currentVolume = vol;
    });
  }
}
