import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PlayerPage } from '../pages/player/player';
import { ConfigService } from './services/config.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
})
export class AppComponent {
  rootPage: any = PlayerPage;
  pages: Array<{ title: string; url: string }>;

  constructor(
    private platform: Platform,
    private configService: ConfigService,
    private router: Router
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Videos', url: 'videos' },
      { title: 'Agregar URL', url: '' },
      { title: 'Buscar', url: '' },
      { title: 'Configuraciones', url: 'config' },
      { title: 'Extras', url: '' },
      { title: 'Dapp', url: 'dapp' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.configService.autoConnect();
      // this.statusBar.styleDefault();
      // this.nav.setRoot(PlayerPage);
      // this.splashScreen.hide();

      // this.platform.backButton

      // if (this.nav.canGoBack()) { //Can we go back?
      //     this.nav.pop();
      // } else {
      // const alert = this.alertCtrl.create({
      //         text: 'Cancelar',
      //         role: 'cancel',
      //         handler: () => {
      //             console.log('Application exit prevented!');
      //         }
      //     }, {
      //         text: 'Cerrar App',
      //         handler: () => {
      //             // this.platform.exitApp(); // Close this application
      //         }
      //     }]
    });
    // alert.present();
  }
  // this.nav.pop();
  // });
  //     });
  // }

  openPage(page) {
    this.router.navigate([page.url]);
  }
}
