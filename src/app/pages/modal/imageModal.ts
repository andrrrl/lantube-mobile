// import { NavParams } from "ionic-angular";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-image-modal',
    templateUrl: 'imageModal.html'
})
export class ImageModalPage {
    @Input() image: any;

    constructor(public modalController: ModalController) { }

    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }

}
