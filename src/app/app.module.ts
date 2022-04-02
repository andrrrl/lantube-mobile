import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { PlayerPage } from '../pages/player/player';
import { SearchPage } from '../pages/search/search';

import { VideosService } from './services/videos.service';
import { ServerService } from './services/server.service';
import { PlayerService } from './services/player.service';
import { YoutubeService } from './services/youtube.service';

import { SensorService } from './services/sensor.service';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalPage } from '../pages/modal/modal';
import { ConfigPage } from '../pages/config/config';
import { ConfigService } from './services/config.services';
import { TemperatureComponent } from './../pages/sensor/temperature';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './shared/logo/logo.component';
import { VynilThumbnailComponent } from './shared/vynil-thumbnail/vynil-thumbnail.component';
import { RecordPlayerComponent } from 'src/pages/player/record-player/record-player.component';

@NgModule({
    declarations: [
        AppComponent,
        ListPage,
        AddPage,
        PlayerPage,
        SearchPage,
        ModalPage,
        ConfigPage,
        // GamePage,
        TemperatureComponent,
        LogoComponent,
        VynilThumbnailComponent,
        RecordPlayerComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        // IonicModule.forRoot(MyApp),
    ],
    bootstrap: [AppComponent],
    providers: [
        // StatusBar,
        // SplashScreen,
        VideosService,
        ServerService,
        PlayerService,
        YoutubeService,
        ConfigService,
        SensorService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ]
})
export class AppModule {}
