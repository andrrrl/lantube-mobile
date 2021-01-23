import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PlayerService } from './services/player.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public selectedIndex = 0;

    public appPages = [
        { title: 'Reproductor', icon: 'play', url: '/player' },
        { title: 'Videos', icon: 'list', url: '/list' },
        { title: 'Buscar', icon: 'search', url: '/search' },
        { title: 'Agregar URL', icon: 'add', url: '/search/add' },
        { title: 'Configuraciones', icon: 'settings', url: '/config' },
        { title: 'Extras', icon: 'gift', url: '/extras' },
    ];

    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private playerService: PlayerService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleBlackTranslucent();
            this.splashScreen.hide();
        });
    }

    ngOnInit(): void {
        // const path = window.location.pathname.split('folder/')[1];
        const path = 'player';
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        } else {
            this.selectedIndex = 0;

        }
    }

    ngOnDestroy(): void {
        this.playerService.sendMessage('disconnectAll');
    }

}
