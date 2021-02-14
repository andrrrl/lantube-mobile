import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { VideosService } from '../../services/videos.service';
import { YoutubeService } from '../../services/youtube.service';
import { ImageModalPage } from '../modal/imageModal';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage {

    @ViewChild('searchFocus') searchInput: IonInput;

    public youtubeVideo: any;
    public term = '';
    public videoList$: Observable<any[]>;

    loader: any;

    constructor(
        public router: Router,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public modalController: ModalController,
        public youtubeService: YoutubeService,
        public videosService: VideosService,
        public toastController: ToastController) {

    }

    ionViewWillEnter() {
        // we need to delay our call in order to work with ionic ...
        setTimeout(() => {
            this.searchInput.setFocus();
        }, 300);
    }
    search() {
        if (typeof this.term === 'string' && this.term.length) {
            this.showLoader('Buscando videos...');
            this.videoList$ = this.youtubeService.search(this.term).pipe(
                catchError(async (err) => {
                    console.log('Handling error locally and rethrowing it...', err);
                    await this.hideLoader();
                    return throwError(err);
                }),
                tap(async () => {
                    await this.hideLoader();
                })
            );
        }
    }

    async showImageModal(image) {
        const modal = await this.modalController.create({
            component: ImageModalPage,
            componentProps: {
                image
            }
        });
        modal.present();
    }

    async showLoader(text: string) {
        this.loader = await this.loadingCtrl.create({
            message: text,
            spinner: 'crescent'
        });
        await this.loader.present();
    }

    hideLoader() {
        this.loader.dismiss();
    }

    async showConfirmAdd(index) {
        const confirm = await this.alertCtrl.create({
            header: '¿Agregar video?',
            message: 'El video se va a agregar a la lista',
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
                        this.addVideo(index);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        await confirm.present();
    }

    addVideo(index: number) {
        this.videoList$.pipe(
            tap(videos => {

                this.youtubeVideo = videos[index];
                const videoId = this.videosService.extractVideoId(this.youtubeVideo.url);
                this.showLoader('Agregando video...').then(async () => {

                    this.videosService.add(videoId).subscribe(async () => {
                        const toast = await this.toastController.create({
                            message: `Se agregó "${this.youtubeVideo.title}"`,
                            duration: 2000
                        });

                        this.hideLoader();
                        toast.present();

                        this.router.navigate(['list']);
                    });
                });

            })
        ).subscribe();
    }
}
