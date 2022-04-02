import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ConfigService } from './../../app/services/config.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  apiUrl: string;
  apiPort = 3000;
  audioOnly = false;

  constructor(
    public configService: ConfigService,
    public toastController: ToastController,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    if (!this.configService.getApiUrl()) {
      this.apiUrl = `http://${window.location.hostname}`;
    } else {
      console.log(this.configService.getApiUrl());
      this.apiUrl = this.configService.getApiUrl();
    }
    if (this.apiUrl.indexOf('http') > -1) {
      this.configService.setApiEndpoint(this.apiUrl, this.apiPort);
    }
  }

  onCancel() {
    this.router.navigate(['/player'], { relativeTo: this.route });
  }

  onSave() {
    this.setApiEndpoint();
    this.router.navigate(['/player'], { relativeTo: this.route });
  }

  setApiEndpoint() {
    this.configService.setApiEndpoint(this.apiUrl, this.apiPort);
    if (this.configService.getApiEndpoint()) {
      this.presentToast('Configuración guardada.');
    } else {
      this.presentToast('No se pudo guardar la configuración.');
    }
  }

  toggleAudioOnly() {
    this.audioOnly = !this.audioOnly;
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
