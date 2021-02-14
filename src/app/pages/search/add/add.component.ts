import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { VideosService } from 'src/app/services/videos.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {

    youtubeVideo: any;
    videoAdded: any;

    constructor(
        public videosService: VideosService,
        public toastController: ToastController,
        public loadingController: LoadingController
    ) { }


    ngOnInit() {
        const adding = this.loadingController.create({
            message: 'Agregando video...',
            spinner: 'crescent'
        });
    }

    addVideo() {

        const videoID = this.videosService.extractVideoId(this.youtubeVideo);
        this.videoAdded = this.videosService.add(videoID).subscribe(added => {
            if (added.error) {
                this.presentToast(`ID inválido. No se agregó el video "${this.youtubeVideo}"`);
            } else {
                this.presentToast(`Se agregó el video "${added.videoInfo.title}"`);
            }
        });
    }




    async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        await toast.present();
    }

    ngOnDestroy(): void {
        this.videoAdded.unsubscribe();
    }

}
