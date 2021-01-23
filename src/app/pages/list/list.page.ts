import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { IPlayerStats } from '../../interfaces/IPlayerStats';
import { IVolume } from '../../interfaces/IVolume.interface';
import { PlayerService } from '../../services/player.service';
import { ServerService } from '../../services/server.service';
import { VideosService } from '../../services/videos.service';
import { ImageModalPage } from '../modal/imageModal';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage {

    videos$: Observable<any[]>;
    playerStats$: Observable<IPlayerStats>;
    videosAux: any;
    videos: any;
    // videosAux: any[] = [];

    constructor(
        public modalController: ModalController,
        public videosService: VideosService,
        public alertCtrl: AlertController,
        public serverService: ServerService,
        public playerService: PlayerService
    ) {

    }

    ionViewWillEnter() {

        this.getPlayerStats();
        this.getAllVideos();

        this.videosService.onNewMessage().subscribe(videosMessage => {
            if (videosMessage.message === 'getAll' || videosMessage.message === 'added' || videosMessage.message === 'deleted') {
                this.getAllVideos();
            }
        });
    }

    // /**
    //  * Get player stats (current volume, last video, etc)
    //  */
    getPlayerStats() {
        this.playerStats$ = this.serverService.get().pipe(
            tap(videos => {
                this.videos = videos;
            })
        );
        // this.playerStats$ = this.playerService.onNewMessage();
    }

    // /**
    //  * Get full list of videos
    //  */
    getAllVideos() {
        this.videos$ = this.videosService.get({}).pipe(
            tap(videos => {
                console.log(videos);
                videos = JSON.parse(JSON.stringify((videos)));
                const videoSort = (a, b) => parseInt(b.videoId.replace(/video/, ''), 10)
                    - parseInt(a.videoId.replace(/video/, ''), 10);
                const fixVideos = videos.sort(videoSort);
                this.videosAux = fixVideos;
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

    volume(change: IVolume) {
        this.playerService.setVolume(change).pipe(
            debounceTime(200)
        ).subscribe();
    }



    // /**
    //  * Play selected video by ID
    //  * @param id Redis or MongoDB video ID
    //  */
    play(id) {
        this.playerService.play(id).subscribe();
    }

    // /**
    //  * Remove video from the list of videos
    //  * @param id Video ID
    //  */
    removeVideo(id) {
        this.videosService.delete(id).subscribe(() => {
            this.getAllVideos();
        });
    }

    async showConfirmDelete(id) {
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
                    }
                },
                {
                    text: 'Aceptar',
                    handler: () => {
                        this.removeVideo(id);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        await confirm.present();
    }

    swapToTop(id) {

        const newTop = this.videos.find(x => x.videoId === id);
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

        this.playerStats$.pipe(
            tap(stats => {
                const playerStats = stats;
                if (playerStats.status === 'playing' && playerStats.videoId === id) {
                    playerStats.videoId = `video${this.videos.length}`;
                    playerStats.videoInfo = newTop.videoInfo;
                } else if (playerStats.status === 'playing' && playerStats.videoId === `video${this.videos.length}`) {
                    playerStats.videoId = currentTop.videoId;
                    playerStats.videoInfo = currentTop.videoInfo;
                }
                this.playerService.update(playerStats, newTop.videoId).subscribe();
            })
        );
    }

    moveToTop(id) {
        this.videos$ = this.videos$.pipe(
            tap(videos => {

                const newTop = videos.find(x => x.videoId === id);
                const newTopIndex = videos.indexOf(newTop);
                const currentTop = videos[0];

                videos.splice(newTopIndex, 1);
                videos = [newTop, ...videos];
                videos = this.reorderList(videos);

                // Update Player Stats
                this.playerStats$.pipe(
                    tap(playerStats => {
                        if (playerStats) {
                            if (playerStats.status === 'playing' && playerStats.videoId === id) {
                                playerStats.videoId = `video${videos.length}`;
                                playerStats.videoInfo = newTop.videoInfo;
                            } else if (playerStats.status === 'playing' && playerStats.videoId === `video${videos.length}`) {
                                playerStats.videoId = currentTop.videoId;
                                playerStats.videoInfo = currentTop.videoInfo;
                            }

                            this.playerService.update(playerStats, id).subscribe(stats => {
                                this.playerStats$ = stats;
                            });
                        }
                    })
                );
            })
        );
    }

    reorderList(videos) {
        let i = videos.length;
        const vids = [];
        for (const video of videos) {
            video.videoId = video.videoInfo.videoId = 'video' + i;
            video.order = i;
            vids.push(video);
            i--;
        }
        return vids;
    }


    async presentModal(image) {
        const modal = await this.modalController.create({
            component: ImageModalPage,
            cssClass: 'my-custom-class',
            componentProps: {
                image
            }
        });
        return await modal.present();
    }

    searchItems(event) {
        // set val to the value of the event target
        const val = event.target.value;

        // Reset items back to all of the items
        const videos = of(this.videosAux);

        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.videos$ = videos.pipe(
                tap(v => console.log(v, val)),
                map(vids => vids.filter((vid: any) => vid.videoInfo.title.toLowerCase().indexOf(val.toLowerCase()) > -1))
            );
        }
    }

    cancelSearch() {
        this.videos$ = of(this.videosAux);
    }

}
