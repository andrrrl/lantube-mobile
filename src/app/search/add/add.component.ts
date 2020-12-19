import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { VideosService } from 'src/app/services/videos.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
})
export class AddComponent {

    youtubeVideo: any;

    constructor(
        public videosService: VideosService,
        public toastController: ToastController
    ) { }

    // dismiss() {
    //     this.modalController.dismiss({
    //         dismissed: true
    //     });
    // }

    addVideo() {
        console.log(this.youtubeVideo);
        this.videosService.add(this.extractVideoId()).subscribe(added => {
            console.log(added);
            if (added.error) {
                this.presentToast(`ID inválido. No se agregó el video "${this.youtubeVideo}"`);
            } else {
                this.presentToast(`Se agregó el video "${added.videoInfo.title}"`);
            }
        });
    }

    extractVideoId() {
        return this.youtubeVideo.trim().replace(/http(s?):\/\/(w{3}?)(\.?)youtube\.com\/watch\?v=/, '');
    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000
        });
        await toast.present();
    }

}
