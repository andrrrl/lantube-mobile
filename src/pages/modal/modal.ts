import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  @Input() isOpen: boolean;
  @Input() image: any;
  @Output() modalClose = new EventEmitter();
  @Output() modalAccept = new EventEmitter();
  disabled: boolean;

  constructor(public routerOutlet: IonRouterOutlet) {}

  onModalClose() {
    this.modalClose.emit('closed');
  }

  onModalAccept() {
    this.modalAccept.emit('accepted');
  }
}
