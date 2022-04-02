import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';

import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, take, tap } from 'rxjs/operators';

import { VideosService } from './../../app/services/videos.service';
import { PlayerService } from '../../app/services/player.service';
import { ServerService } from '../../app/services/server.service';
import { IPlayerStats } from '../../app/interfaces/IPlayerStats';

@Component({
  selector: 'app-page-list',
  templateUrl: 'list.html',
  styleUrls: ['list.scss'],
})
export class ListPage implements OnInit {
  videos: any[] = [];
  playerStats: IPlayerStats;
  playerStats$: Observable<IPlayerStats>;
  videosAux: any[] = [];
  modalThumbImage: string;
  public isAddModalOpen = new BehaviorSubject(false);
  public isThumbModalOpen = new BehaviorSubject(false);

  constructor(
    public navCtrl: NavController,
    public videosService: VideosService,
    public actionSheetController: ActionSheetController,
    public serverService: ServerService,
    public playerService: PlayerService
  ) {}

  get isPaused() {
    return this.playerStats?.status === 'paused';
  }

  get isLoading() {
    return this.playerStats?.status === 'loading';
  }

  get isPlaying() {
    return this.playerStats?.status === 'playing';
  }

  get isStopped() {
    return this.playerStats?.status === 'stopped';
  }

  get isIdle() {
    return this.playerStats?.status === 'idle';
  }

  // get notAtTop() {
  //   return video?.order < videos.length && (video?.videoInfo?.videoId !== playerStats?.videoId && isPlaying);
  // }

  ngOnInit() {
    if (typeof this.playerStats === 'undefined') {
      this.getPlayerStats();
    }

    this.playerService.onNewMessage().subscribe((stats: IPlayerStats) => {
      this.playerStats = stats;
    });
  }

  async ionViewDidEnter() {
    this.getAllVideos();

    this.videosService.onNewMessage().subscribe((videosMessage) => {
      if (
        videosMessage.message === 'getAll' ||
        videosMessage.message === 'added' ||
        videosMessage.message === 'deleted'
      ) {
        this.getAllVideos();
      }
    });
  }

  /**
   * Get player stats (current volume, last video, etc)
   */
  getPlayerStats() {
    this.playerStats$ = this.serverService.get().pipe(
      take(1),
      tap((stats: IPlayerStats) => (this.playerStats = stats))
    );
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

  volume(change: 'up' | 'down') {
    this.playerService
      .setVolume({ volume: change })
      .pipe(debounceTime(200))
      .subscribe();
  }

  /**
   * Get full list of videos
   */
  getAllVideos() {
    this.videosService.get({}).subscribe((videos) => {
      videos = JSON.parse(JSON.stringify(videos));
      this.videos = videos.sort(
        (a, b) =>
          +b.videoId.replace(/video/, '') - +a.videoId.replace(/video/, '')
      );
      this.videosAux = this.videos;
    });
  }

  onShowThumbModal(img) {
    this.modalThumbImage = img;
    this.isThumbModalOpen.next(true);
  }

  onShowAddModal() {
    this.isAddModalOpen.next(true);
  }

  onAddModalClose(event) {
    if (event === 'closed') {
      this.isAddModalOpen.next(false);
    }
  }

  onAddModalAccept(event) {
    this.isAddModalOpen.next(false);
  }

  onThumbModalClose(event) {
    if (event === 'closed') {
      this.isThumbModalOpen.next(false);
    }
  }

  /**
   * Play selected video by ID
   *
   * @param id Redis or MongoDB video ID
   */
  async play(id) {
    this.playerService.play(id).subscribe();
    // this.navCtrl.pop();
  }

  /**
   * Remove video from the list of videos
   *
   * @param id Video ID
   */
  removeVideo(id) {
    this.videosService.delete(id).subscribe((removed) => {
      this.getAllVideos();
    });
  }

  async showOptions(id) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Mover al principio',
          icon: 'arrow-up-outline',
          data: id,
          handler: () => {
            // this.play(id);
            console.log('Play clicked');
          },
        },
        {
          text: 'Mover al final',
          icon: 'arrow-down-outline',
          data: id,
          handler: () => {
            // this.play(id);
            console.log('Play clicked');
          },
        },
        {
          text: 'Reproducir',
          icon: 'caret-forward-circle',
          data: id,
          handler: () => {
            this.play(id);
            console.log('Play clicked');
          },
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete',
          },
          handler: () => {
            console.log('Delete clicked');
            this.removeVideo(id);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  swapToTop(id) {
    const newTop = this.videos.find((x) => x.videoId === id);
    const newTopIndex = this.videos.indexOf(newTop);

    const currentTop = this.videos[0];
    currentTop.videoId = newTop.videoId;
    currentTop.order = newTop.order;
    currentTop.videoInfo.videoId = newTop.videoId;
    this.videos[newTopIndex] = currentTop;

    newTop.videoId = `video${this.videos.length}`;
    newTop.order = this.videos.length;
    newTop.videoInfo.videoId = `video${this.videos.length}`;
    this.videos[0] = newTop;

    if (this.playerStats) {
      if (
        this.playerStats.status === 'playing' &&
        this.playerStats.videoId === id
      ) {
        this.playerStats.videoId = `video${this.videos.length}`;
        this.playerStats.videoInfo = newTop.videoInfo;
      } else if (
        this.playerStats.status === 'playing' &&
        this.playerStats.videoId === `video${this.videos.length}`
      ) {
        this.playerStats.videoId = currentTop.videoId;
        this.playerStats.videoInfo = currentTop.videoInfo;
      }

      this.playerService
        .update(this.playerStats, newTop.videoId)
        .subscribe((stats) => {
          this.playerStats = stats;
        });
    }
  }

  moveToTop(id) {
    const newTop = this.videos.find((x) => x.videoId === id);
    const newTopIndex = this.videos.indexOf(newTop);
    const currentTop = this.videos[0];

    this.videos.splice(newTopIndex, 1);
    this.videos = [newTop, ...this.videos];

    this.reorderList();

    // Update Player Stats
    if (this.playerStats) {
      if (
        this.playerStats.status === 'playing' &&
        this.playerStats.videoId === id
      ) {
        this.playerStats.videoId = `video${this.videos.length}`;
        this.playerStats.videoInfo = newTop.videoInfo;
      } else if (
        this.playerStats.status === 'playing' &&
        this.playerStats.videoId === `video${this.videos.length}`
      ) {
        this.playerStats.videoId = currentTop.videoId;
        this.playerStats.videoInfo = currentTop.videoInfo;
      }

      this.playerService.update(this.playerStats, id).subscribe((stats) => {
        // this.playerStats = stats;
      });
    }
  }

  reorderList() {
    let i = this.videos.length;
    for (const video of this.videos) {
      video.videoId = video.videoInfo.videoId = 'video' + i;
      video.order = i;
      i--;
    }
  }

  // showImageModal(img) {
  //     this.navCtrl.push(ImageModalPage, { img: img });
  // }

  // presentAddModal() {
  //     this.navCtrl.push(SearchPage);
  // }

  getItems(ev) {
    // Reset items back to all of the items
    this.videos = this.videosAux;

    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.videos = this.videos.filter(
        (video) =>
          video.videoInfo.title.toLowerCase().indexOf(val.toLowerCase()) > -1
      );
    }
  }
}
