import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { PlayerPage } from '../pages/player/player';
import { SearchPage } from '../pages/search/search';

import { VideosService } from './services/videos.service';
import { ServerService } from './services/server.service';
import { PlayerService } from './services/player.service';
import { YoutubeService } from './services/youtube.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImageModalPage } from '../pages/modal/imageModal';
import { ConfigPage } from '../pages/config/config';
import { ConfigService } from './services/config.services';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    AddPage,
    PlayerPage,
    SearchPage,
    ImageModalPage,
    ConfigPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    AddPage,
    PlayerPage,
    SearchPage,
    ImageModalPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideosService,
    ServerService,
    PlayerService,
    YoutubeService,
    ConfigService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
