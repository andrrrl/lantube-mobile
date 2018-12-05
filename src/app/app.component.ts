import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { PlayerPage } from '../pages/player/player';
import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { SearchPage } from '../pages/search/search';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PlayerPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Videos', component: ListPage },
      { title: 'Agregar URL', component: AddPage },
      { title: 'Buscar', component: SearchPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.nav.setRoot(PlayerPage);
      this.splashScreen.hide();
      this.platform.registerBackButtonAction(() => {


        if (this.nav.canGoBack()) { //Can we go back?
          this.nav.pop();
        } else {
          const alert = this.alertCtrl.create({
            title: 'Salir de Lantube',
            message: 'La App se va a cerrar',
            buttons: [{
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                console.log('Application exit prevented!');
              }
            }, {
              text: 'Cerrar App',
              handler: () => {
                this.platform.exitApp(); // Close this application
              }
            }]
          });
          alert.present();
        }
        // this.nav.pop();
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
