import { Component, AfterViewInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { PlayerStats } from 'src/app/interfaces/player-stats.interface';
import { Volume } from 'src/app/interfaces/volume.interface';
import { PlayerService } from '../../services/player.service';
import { ServerService } from '../../services/server.service';
import { VideosService } from '../../services/videos.service';
import { Video } from 'src/app/interfaces/video.interface';
// import { ImageModalPage } from '../modal/imageModal';

@Component({
  selector: 'app-list',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss'],
})
export class PlaylistPageComponent implements AfterViewInit {
  videos$!: Observable<Video[]>;
  playerStats$!: Observable<PlayerStats>;
  videosAux!: Video[];
  videos: Video[] = [];
  currentVideo: Video | undefined;
  stats!: PlayerStats;
  sortDirection: 'asc' | 'desc' = 'asc';
  modalOpen = false;
  userTitle = '';
  videoId = '';

  constructor(
    public modalController: ModalController,
    public videosService: VideosService,
    public alertCtrl: AlertController,
    public serverService: ServerService,
    public playerService: PlayerService
  ) {}

  ngAfterViewInit() {
    this.getPlayerStats();
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

  // /**
  //  * Get player stats (current volume, last video, etc)
  //  */
  getPlayerStats() {
    this.playerStats$ = this.serverService.get().pipe(
      tap((stats) => {
        this.stats = stats;
      })
    );
  }

  sortVideos(videos: Video[], direction: 'asc' | 'desc' = 'asc') {
    return videos.sort((a: Video, b: Video) => {
      if (direction === 'asc') {
        return b.order - a.order;
      } else if (direction === 'desc') {
        return a.order - b.order;
      }
      return 0;
    });
  }

  // /**
  //  * Get full list of videos
  //  */
  getAllVideos() {
    this.videos$ = this.videosService.get({}).pipe(
      tap((videos) => {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        const fixVideos = this.sortVideos(videos);
        this.videosAux = fixVideos;
        this.currentVideo = this.videosAux.find(
          (x: Video) => x.videoId === this.stats.videoId
        );
        if (this.currentVideo) {
          this.currentVideo.hasError = false;
          this.userTitle =
            this.currentVideo.userTitle ?? this.currentVideo.title;
          console.log(this.currentVideo);
        }
      })
    );
  }

  stopAll() {
    this.playerService.stopAll().subscribe();
  }

  playPause() {
    this.playerService.pause().subscribe();
  }

  // playPrev() {
  //     this.playerService.playPrev().subscribe();
  // }

  // playNext() {
  //     this.playerService.playNext().subscribe();
  // }

  volume(event: Event, change: Volume) {
    this.playerService.setVolume(change).pipe(debounceTime(200)).subscribe();
  }

  // /**
  //  * Play selected video by ID
  //  * @param id Redis or MongoDB video ID
  //  */
  play(id: string) {
    this.playerService.play(id).subscribe();
  }

  // /**
  //  * Remove video from the list of videos
  //  * @param id Video ID
  //  */
  removeVideo(id: string) {
    this.videosService.delete(id).subscribe(() => {
      this.getAllVideos();
    });
  }

  async showConfirmDelete(id: string) {
    const confirm = await this.alertCtrl.create({
      header: 'Quitar video',
      subHeader: '¿Está seguro?',
      message: 'El video se va a quitar de la lista',
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
            this.removeVideo(id);
            console.log('Agree clicked');
          },
        },
      ],
    });
    await confirm.present();
  }

  swapToTop(id: string) {
    const newTop = this.videos.find((x: any) => x.videoId === id);
    if (newTop) {
      const newTopIndex = this.videos.indexOf(newTop);

      const currentTop = this.videos[0];
      currentTop.videoId = newTop.videoId;
      currentTop.order = newTop.order;
      currentTop.videoId = newTop.videoId;
      this.videos[newTopIndex] = currentTop;

      newTop.videoId = `video${this.videos.length}`;
      newTop.order = this.videos.length;
      newTop.videoId = `video${this.videos.length}`;
      this.videos[0] = newTop;

      this.playerStats$.pipe(
        tap((playerStats) => {
          if (playerStats.status === 'playing' && playerStats.videoId === id) {
            playerStats.videoId = `video${this.videos.length}`;
            playerStats = { ...playerStats, ...newTop };
          } else if (
            playerStats.status === 'playing' &&
            playerStats.videoId === `video${this.videos.length}`
          ) {
            playerStats.videoId = currentTop.videoId;
            playerStats = { ...playerStats, ...currentTop };
          }
          this.playerService.update(playerStats, newTop.videoId).subscribe();
        })
      );
    }
  }

  moveToTop(id: string) {
    this.videos$ = this.videos$.pipe(
      tap((videos) => {
        const newTop = videos.find((x) => x.videoId === id);
        if (newTop) {
          const newTopIndex = videos.indexOf(newTop);
          const currentTop = videos[0];

          videos.splice(newTopIndex, 1);
          videos = [newTop, ...videos];
          videos = this.reorderList(videos);

          // Update Player Stats
          this.playerStats$.pipe(
            tap((playerStats) => {
              if (playerStats) {
                if (
                  playerStats.status === 'playing' &&
                  playerStats.videoId === id
                ) {
                  playerStats.videoId = `video${videos.length}`;
                  playerStats = { ...playerStats, ...newTop };
                } else if (
                  playerStats.status === 'playing' &&
                  playerStats.videoId === `video${videos.length}`
                ) {
                  playerStats.videoId = currentTop.videoId;
                  playerStats = { ...playerStats, ...currentTop };
                }

                this.playerService
                  .update(playerStats, id)
                  .subscribe((stats) => {
                    this.playerStats$ = stats;
                  });
              }
            })
          );
        }
      })
    );
  }

  reorderList(videos: any) {
    let i = videos.length;
    const vids = [];
    for (const video of videos) {
      video.videoId = video.videoId = 'video' + i;
      video.order = i;
      vids.push(video);
      i--;
    }
    return vids;
  }

  // async presentModal(image: any) {
  //     const modal = await this.modalController.create({
  //         component: ImageModalPage,
  //         cssClass: 'my-custom-class',
  //         componentProps: {
  //             image
  //         }
  //     });
  //     return await modal.present();
  // }

  searchItems(event: any) {
    // set val to the value of the event target
    const val = event.target.value;

    // Reset items back to all of the items
    const videos = of(this.videosAux);

    this.videos$ = videos.pipe(
      tap((v) => console.log(v, val)),
      map((vids: Video[]) =>
        vids.filter(
          (vid: Video) =>
            vid.title.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
      )
    );
  }

  cancelSearch() {
    this.videos$ = of(this.videosAux);
  }

  editVideoTitle(videoId: string) {
    this.videoId = videoId;
    const editVideo = this.videosAux.find((x) => x.videoId === this.videoId);
    this.userTitle = editVideo?.userTitle ?? editVideo?.title ?? ''

    this.modalOpen = true;
  }

  updateVideoTitle() {
    const patchedVideo = this.videosAux.find((x) => x.videoId === this.videoId);
    console.log({ patchedVideo });

    if (!patchedVideo?.userTitle) {
      return;
    }
    patchedVideo.userTitle = this.userTitle;
    this.videosService.patch(this.videoId, 'userTitle', this.userTitle).subscribe(() => {
      this.modalOpen = false;
    });
    
  }

  handleImgError(e: Event) {
    if (this.currentVideo && e.type === 'error') {
      this.currentVideo.hasError = true;
    }
  }
}
