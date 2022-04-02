webpackJsonp([1],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerService = /** @class */ (function () {
    function ServerService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.serveStatsURL = this.configService.getAPIEndpoint() + '/api/player/stats';
    }
    ServerService.prototype.extractData = function (res) {
        return res.json();
    };
    ServerService.prototype.get = function () {
        return this.http.get(this.serveStatsURL).map(this.extractData);
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__config_services__["a" /* ConfigService */]])
    ], ServerService);
    return ServerService;
}());

//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageModalPage = /** @class */ (function () {
    function ImageModalPage(params) {
        this.imagen = params.get('img');
    }
    ImageModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-image-modal',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/modal/imageModal.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Miniatura del video</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="thumbnail-conatiner">\n        <ion-img class="youtube-thumbnail" [src]="imagen"></ion-img>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/modal/imageModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */]])
    ], ImageModalPage);
    return ImageModalPage;
}());

//# sourceMappingURL=imageModal.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_videos_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_player_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_imageModal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_server_service__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, videosService, alertCtrl, serverService, playerService) {
        this.navCtrl = navCtrl;
        this.videosService = videosService;
        this.alertCtrl = alertCtrl;
        this.serverService = serverService;
        this.playerService = playerService;
        this.videos = [];
        this.videosAux = [];
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (typeof this.playerStats === 'undefined') {
            this.getPlayerStats();
        }
        this.playerService.onNewMessage().subscribe(function (stats) {
            _this.playerStats = stats;
        });
        this.fab.toggleList();
    };
    ListPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.getAllVideos();
                this.videosService.onNewMessage().subscribe(function (videosMessage) {
                    if (videosMessage.message === 'getAll' || videosMessage.message === 'added' || videosMessage.message === 'deleted') {
                        _this.getAllVideos();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Get player stats (current volume, last video, etc)
     */
    ListPage.prototype.getPlayerStats = function () {
        var _this = this;
        this.serverService.get().subscribe(function (stats) {
            _this.playerStats = stats;
        });
    };
    ListPage.prototype.stopAll = function () {
        this.playerService.stopAll().subscribe();
    };
    ListPage.prototype.playPause = function () {
        this.playerService.pause().subscribe();
    };
    ListPage.prototype.playPrev = function () {
        this.playerService.playPrev().subscribe();
    };
    ListPage.prototype.playNext = function () {
        this.playerService.playNext().subscribe();
    };
    ListPage.prototype.volume = function (change) {
        this.playerService.setVolume(change).debounceTime(200).subscribe();
    };
    /**
     * Get full list of videos
     */
    ListPage.prototype.getAllVideos = function () {
        var _this = this;
        this.videosService.get({}).subscribe(function (videos) {
            videos = JSON.parse(JSON.stringify((videos)));
            _this.videos = videos.sort(function (a, b) { return parseInt(b.videoId.replace(/video/, '')) - parseInt(a.videoId.replace(/video/, '')); });
            _this.videosAux = _this.videos;
        });
    };
    /**
     * Play selected video by ID
     * @param id Redis or MongoDB video ID
     */
    ListPage.prototype.play = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.playerService.play(id).subscribe();
                return [2 /*return*/];
            });
        });
    };
    /**
     * Remove video from the list of videos
     * @param id Video ID
     */
    ListPage.prototype.removeVideo = function (id) {
        var _this = this;
        this.videosService.delete(id).subscribe(function (removed) {
            _this.getAllVideos();
        });
    };
    ListPage.prototype.showConfirmDelete = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Eliminar video?',
            message: 'El video se va a quitar de la lista',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.removeVideo(id);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    ListPage.prototype.swapToTop = function (id) {
        var _this = this;
        var newTop = this.videos.find(function (x) { return x.videoId === id; });
        var newTopIndex = this.videos.indexOf(newTop);
        var currentTop = this.videos[0];
        currentTop.videoId = newTop.videoId;
        currentTop.order = newTop.order;
        currentTop.videoInfo.videoId = newTop.videoId;
        this.videos[newTopIndex] = currentTop;
        newTop.videoId = "video" + this.videos.length;
        newTop.order = this.videos.length;
        newTop.videoInfo.videoId = "video" + this.videos.length;
        this.videos[0] = newTop;
        if (this.playerStats) {
            if (this.playerStats.status === 'playing' && this.playerStats.videoId === id) {
                this.playerStats.videoId = "video" + this.videos.length;
                this.playerStats.videoInfo = newTop.videoInfo;
            }
            else if (this.playerStats.status === 'playing' && this.playerStats.videoId === "video" + this.videos.length) {
                this.playerStats.videoId = currentTop.videoId;
                this.playerStats.videoInfo = currentTop.videoInfo;
            }
            this.playerService.update(this.playerStats, newTop.videoId).subscribe(function (stats) {
                _this.playerStats = stats;
            });
        }
    };
    ListPage.prototype.moveToTop = function (id) {
        var newTop = this.videos.find(function (x) { return x.videoId === id; });
        var newTopIndex = this.videos.indexOf(newTop);
        var currentTop = this.videos[0];
        this.videos.splice(newTopIndex, 1);
        this.videos = [newTop].concat(this.videos);
        this.reorderList();
        // Update Player Stats
        if (this.playerStats) {
            if (this.playerStats.status === 'playing' && this.playerStats.videoId === id) {
                this.playerStats.videoId = "video" + this.videos.length;
                this.playerStats.videoInfo = newTop.videoInfo;
            }
            else if (this.playerStats.status === 'playing' && this.playerStats.videoId === "video" + this.videos.length) {
                this.playerStats.videoId = currentTop.videoId;
                this.playerStats.videoInfo = currentTop.videoInfo;
            }
            this.playerService.update(this.playerStats, id).subscribe(function (stats) {
                // this.playerStats = stats;
            });
        }
    };
    ListPage.prototype.reorderList = function () {
        var i = this.videos.length;
        for (var _i = 0, _a = this.videos; _i < _a.length; _i++) {
            var video = _a[_i];
            video.videoId = video.videoInfo.videoId = 'video' + i;
            video.order = i;
            i--;
        }
    };
    ListPage.prototype.showImageModal = function (img) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__modal_imageModal__["a" /* ImageModalPage */], { img: img });
    };
    ListPage.prototype.presentAddModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    ListPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.videos = this.videosAux;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.videos = this.videos.filter(function (video) {
                return (video.videoInfo.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* FabContainer */])
    ], ListPage.prototype, "fab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ListPage.prototype, "content", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/list/list.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Videos</ion-title>\n    </ion-navbar>\n    <ion-fab top right>\n        <button ion-fab color="danger" (click)="presentAddModal()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n    <div class="video-info-lista">\n        <div class="vinyl-container">\n            <img *ngIf="playerStats?.videoInfo?.img" class="video-img" src="{{ playerStats?.videoInfo?.img }}"\n                 alt="{{ playerStats?.videoInfo?.title }}">\n            <svg version="1.1" class="vinyl-cover" xmlns="http://www.w3.org/2000/svg"\n                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="45px" height="67px"\n                 viewBox="0 0 45 67" enable-background="new 0 0 45 67" xml:space="preserve">\n                <polygon fill="#C66749" points="0,16.256 34.794,0 45,42.087 16.907,67 " />\n            </svg>\n            <svg version="1.1" class="vinyl" xmlns="http://www.w3.org/2000/svg"\n                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px"\n                 viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">\n                <g>\n                    <path fill="none" stroke="#A8A39F" stroke-width="1" stroke-miterlimit="10"\n                          d="M24,46.999C11.287,46.999,1,36.707,1,24 C1,11.287,11.287,1,24,1c12.707,0,23,10.287,23,23C47,36.707,36.707,46.999,24,46.999z" />\n                    <path fill="none" stroke="#A8A39F" stroke-width="1" stroke-miterlimit="10"\n                          d="M24,43.45C13.241,43.45,4.536,34.745,4.536,24C4.536,13.241,13.241,4.536,24,4.536C34.745,4.536,43.45,13.241,43.45,24C43.45,34.745,34.745,43.45,24,43.45z" />\n                    <path fill="none" stroke="#A8A39F" stroke-width="1" stroke-miterlimit="10"\n                          d="M24,39.907c-8.804,0-15.924-7.108-15.924-15.908c0-8.805,7.12-15.924,15.924-15.924c8.8,0,15.907,7.12,15.907,15.924C39.907,32.799,32.799,39.907,24,39.907z" />\n                    <path fill="none" stroke="#A8A39F" stroke-width="1" stroke-miterlimit="10"\n                          d="M24,36.375c-6.85,0-12.392-5.534-12.392-12.376c0-6.85,5.542-12.392,12.392-12.392c6.841,0,12.377,5.542,12.377,12.392C36.376,30.841,30.84,36.375,24,36.375z" />\n                    <path fill="none" stroke="#A8A39F" stroke-width="1" stroke-miterlimit="10"\n                          d="M24,32.844c-4.894,0-8.849-3.971-8.849-8.845c0-4.894,3.956-8.849,8.849-8.849c4.874,0,8.845,3.956,8.845,8.849C32.844,28.874,28.874,32.844,24,32.844z" />\n                    <path fill="none" stroke="#A8A39F" stroke-width="1" stroke-miterlimit="10"\n                          d="M24.875,24c0-0.494-0.382-0.897-0.876-0.897c-0.493,0-0.897,0.403-0.897,0.897s0.404,0.876,0.897,0.876C24.494,24.875,24.875,24.494,24.875,24z" />\n                </g>\n            </svg>\n        </div>\n        <div class="video-title">\n            {{ playerStats?.videoInfo?.title }}\n        </div>\n    </div>\n    <ion-searchbar class="filtro" (ionInput)="getItems($event)" placeholder="Filtrar" cancelButtonText="Limpiar">\n    </ion-searchbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item *ngIf="videos?.length === 0">No hay videos en la lista</ion-item>\n        <ion-item *ngFor="let video of videos">\n            <div class="video-thumb" item-start (click)="showImageModal(video.videoInfo.img)">\n                <img src="{{ video.videoInfo.img }}" alt="" srcset="">\n            </div>\n            <ion-label class="" (click)="play(video?.videoId)"\n                       [ngClass]="{\'playing\': video?.videoInfo?.videoId === playerStats?.videoId && playerStats?.status === \'playing\'}">\n                {{ video.order }} {{ video.videoInfo.title }}\n                {{ video.videoInfo?.duration ? \'(\' + video.videoInfo.duration + \')\' : \'\' }}\n            </ion-label>\n            <div class="item-note" item-end>\n                <ion-icon *ngIf="video?.order < videos.length && (video?.videoInfo?.videoId !== playerStats?.videoId && playerStats?.status === \'playing\')"\n                          (click)="moveToTop(video?.videoId)" name=\'arrow-round-up\' item-end color="secondary">\n                </ion-icon>\n                <!-- <ion-icon *ngIf="video?.order < videos.length" (click)="swapToTop(video?.videoId)" name=\'git-compare\' class="rotateCW"\n                    item-end color="secondary"></ion-icon> -->\n                <ion-icon (click)="showConfirmDelete(video?.videoId)" name="trash" item-end color="primary"></ion-icon>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <!-- <ion-fab bottom center>\n        <button ion-fab color="dark">\n            <ion-icon name="arrow-down" role="img" class="icon icon-md ion-md-arrow-down" aria-label="arrow-down"\n                      ng-reflect-name="arrow-down" (click)="scrollToBottom()">\n            </ion-icon>\n        </button>\n    </ion-fab> -->\n    <ion-fab bottom right #fab>\n        <button ion-fab color="dark">\n            <ion-icon name="more" role="img" class="icon icon-md ion-md-more" aria-label="more" ng-reflect-name="more">\n            </ion-icon>\n        </button>\n        <ion-fab-list side="top">\n            <button ion-fab mini [disabled]="playerStats?.status !== \'playing\' && playerStats?.status !== \'paused\'"\n                    class="button button-md button-default button-default-md" (click)="volume(\'down\')">\n                <ion-icon name="volume-down"></ion-icon>\n            </button>\n            <button ion-fab mini [disabled]="playerStats?.status !== \'playing\' && playerStats?.status !== \'paused\'"\n                    class="button button-md button-default button-default-md" (click)="volume(\'up\')">\n                <ion-icon name="volume-up"></ion-icon>\n            </button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n            <button ion-fab mini class="button button-md button-default button-default-md" (click)="playPause()">\n                <!-- <ion-icon name="play" role="img" class="icon icon-md ion-md-play" aria-label="play" ng-reflect-name="play"></ion-icon> -->\n                <ion-icon *ngIf="playerStats?.status === \'loading\' || playerStats?.status === \'paused\' || playerStats?.status === \'stopped\'"\n                          name="play" role="img" class="icon icon-md ion-md-play" aria-label="play"\n                          ng-reflect-name="play">\n                </ion-icon>\n                <ion-icon *ngIf="playerStats?.status === \'playing\'" name="pause" role="img"\n                          class="icon icon-md ion-md-pause" aria-label="pause" ng-reflect-name="pause"></ion-icon>\n            </button>\n            <button ion-fab mini [disabled]="playerStats?.status !== \'playing\'"\n                    class="button button-md button-default button-default-md" (click)="stopAll()">\n                <ion-icon name="stop" role="img" class="icon icon-md ion-md-square" aria-label="stop"\n                          ng-reflect-name="stop"></ion-icon>\n            </button>\n            <!-- <button ion-fab mini [disabled]="playerStats?.videoId === null"\n                    class="button button-md button-default button-default-md" (click)="playNext()">\n                <ion-icon name="skip-forward" role="img" class="icon icon-md ion-md-skip-forward"\n                          aria-label="skip forward" ng-reflect-name="skip-forward"></ion-icon>\n            </button>\n            <button ion-fab mini dark [disabled]="playerStats?.videoId === null"\n                    class="button button-md button-default button-default-md" (click)="playPrev()">\n                <ion-icon name="skip-backward" role="img" class="icon icon-md ion-md-skip-backward"\n                          aria-label="skip backward" ng-reflect-name="skip-backward"></ion-icon>\n            </button> -->\n        </ion-fab-list>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_videos_service__["a" /* VideosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_player_service__["a" /* PlayerService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_player_service__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, loadingCtrl, navParams, playerService, configService, viewCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.playerService = playerService;
        this.configService = configService;
        this.viewCtrl = viewCtrl;
        this.toastController = toastController;
        this.APIPort = 3000;
        this.audioOnly = false;
    }
    ConfigPage.prototype.ionViewWillEnter = function () {
        if (!this.configService.getAPIUrl()) {
            this.APIUrl = "http://" + window.location.hostname;
        }
        else {
            console.log(this.configService.getAPIUrl());
            this.APIUrl = this.configService.getAPIUrl();
        }
        if (this.APIUrl.indexOf('http') > -1) {
            this.configService.setAPIEndpoint(this.APIUrl, this.APIPort);
        }
    };
    ConfigPage.prototype.goBack = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    };
    ConfigPage.prototype.saveAndGoBack = function () {
        this.playerService.playList().subscribe(function (playlistStats) {
            playlistStats;
        });
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    };
    ConfigPage.prototype.setAPIEndpoint = function () {
        this.configService.setAPIEndpoint(this.APIUrl, this.APIPort);
        if (this.configService.getAPIEndpoint()) {
            this.presentToast('Configuración guardada.');
        }
        else {
            this.presentToast('No se pudo guardar la configuración.');
        }
    };
    ConfigPage.prototype.toggleAudioOnly = function () {
        this.audioOnly = !this.audioOnly;
    };
    ConfigPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/config/config.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Configuraciones</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-item>\n        <ion-label>API address</ion-label>\n        <ion-input type="text" placeholder="API address" [(ngModel)]="APIUrl" autofocus="true"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>API port</ion-label>\n        <ion-input type="text" placeholder="API port number" [(ngModel)]="APIPort"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Sólo audio</ion-label>\n        <ion-checkbox [(ngModel)]="audioOnly" (ionChange)="toggleAudioOnly()"></ion-checkbox>\n    </ion-item>\n</ion-content>\n<ion-footer>\n    <button full ion-button (click)="goBack()">\n        CANCELAR\n    </button>\n    <button full ion-button color="secondary" (click)="setAPIEndpoint()" [(disabled)]="!APIUrl">\n        GUARDAR\n    </button>\n</ion-footer>'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/config/config.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_config_services__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/game/game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>game</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="paisaje">\n        <div class="stick lejano">\n        </div>\n        <div class="stick cercano">\n        </div>\n        <div class="stick cercano mb-4">\n        </div>\n        <div class="tipito"></div>\n        <div class="piso"></div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/game/game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game/game.module": [
		729,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_videos_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_server_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_player_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_config_services__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var PlayerPage = /** @class */ (function () {
    function PlayerPage(navCtrl, navParams, viewCtrl, loadingCtrl, configService, videosService, serverService, playerService, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.configService = configService;
        this.videosService = videosService;
        this.serverService = serverService;
        this.playerService = playerService;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.connected = false;
        // List of all videos from the API
        this.videos = [];
    }
    PlayerPage.prototype.ionViewDidLoad = function () {
        // this.fab.toggleList();
    };
    PlayerPage.prototype.ionViewWillEnter = function () {
        if (typeof this.playerStats === 'undefined') {
            this.getPlayerStats();
        }
    };
    PlayerPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.configService.autoConnect();
                }, 500);
                if (this.navCtrl.canGoBack()) {
                    // this.navCtrl.popTo(this.navCtrl.getActive().component);
                    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
                }
                this.playerService.onNewMessage().subscribe(function (stats) {
                    _this.playerStats = JSON.parse(JSON.stringify(stats));
                    _this.connected = true;
                });
                return [2 /*return*/];
            });
        });
    };
    // Toggle continuous mode
    PlayerPage.prototype.playList = function () {
        var _this = this;
        this.playerService.playList().subscribe(function (playlistStats) {
            _this.playerStats = playlistStats;
        });
    };
    PlayerPage.prototype.showLoader = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loader = this.loadingCtrl.create({
                    content: text,
                });
                return [2 /*return*/];
            });
        });
    };
    PlayerPage.prototype.hideLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerPage.prototype.presentListModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__list_list__["a" /* ListPage */]);
    };
    PlayerPage.prototype.presentAddModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    PlayerPage.prototype.presentConfigModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__config_config__["a" /* ConfigPage */]);
    };
    /**
     * Get player stats (current volume, last video, etc)
     */
    PlayerPage.prototype.getPlayerStats = function () {
        var _this = this;
        this.serverService.get().subscribe(function (stats) {
            _this.playerStats = stats;
        });
    };
    PlayerPage.prototype.playPrev = function () {
        this.playerService.playPrev().subscribe();
    };
    PlayerPage.prototype.playNext = function () {
        this.playerService.playNext().subscribe();
    };
    /**
     * Plays all videos (from current) in ascending order
     */
    PlayerPage.prototype.playAll = function () {
        this.playerService.playAll().subscribe();
    };
    PlayerPage.prototype.playPause = function () {
        this.playerService.pause().subscribe();
    };
    /**
     * Stops all playback
     */
    PlayerPage.prototype.stopAll = function () {
        this.playerService.stopAll().subscribe();
    };
    /**
     * Pauses playback
     */
    PlayerPage.prototype.pause = function () {
        this.playerService.pause().subscribe();
    };
    /**
     * Changes volume
     */
    PlayerPage.prototype.volume = function (change) {
        var _this = this;
        this.playerService.setVolume(change).debounceTime(200).subscribe(function (playback) {
            _this.currentVolume = change;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* FabContainer */])
    ], PlayerPage.prototype, "fab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PlayerPage.prototype, "playerStats", void 0);
    PlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'player',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/player/player.html"*/'<ion-header>\n    <ion-fab top left>\n        <button ion-fab mini class="button button-md button-default button-default-md" (click)="presentConfigModal()">\n            <ion-icon name="config" role="img" class="icon icon-md ion-md-build" aria-label="config"\n                      ng-reflect-name="config"></ion-icon>\n        </button>\n        <span *ngIf="!connected" ion-fab mini class="disconnected">\n            <ion-icon name="cloud" size="small"></ion-icon>\n        </span>\n        <span *ngIf="connected" ion-fab mini class="connected">\n            <ion-icon name="cloud" size="small"></ion-icon>\n        </span>\n    </ion-fab>\n\n    <!-- <ion-fab-list top left side="bottom"> -->\n\n    <!-- </ion-fab-list> -->\n    <!-- <ion-fab top right #fab>\n            <button ion-fab color="dark">\n                <ion-icon name="more" role="img" class="icon icon-md ion-md-more" aria-label="more" ng-reflect-name="more">\n                </ion-icon>\n            </button>\n        </ion-fab> -->\n    <div class="logo-container">\n        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n             x="0px" y="0px" width="506.224px" height="83.673px" viewBox="0 0 506.224 83.673"\n             enable-background="new 0 0 506.224 83.673" xml:space="preserve">\n            <g>\n                <polygon fill="#FFFFFF" points="50.388,50.303 50.388,5.245 5.244,50.387 50.303,50.387 50.303,50.303" />\n                <polygon fill="#FFFFFF"\n                         points="83.673,83.517 83.673,0 62.637,0 62.636,62.636 0,62.636 0,83.673 83.517,83.673 83.517,83.517" />\n            </g>\n            <g>\n                <path fill="#DFE8E8" d="M104.298,10.53h15.701v58.204h34.802v13.2h-50.503V10.53z" />\n                <path fill="#DFE8E8" d="M183.098,10.53h16.102L225.9,81.934H209.6l-5.4-15.901h-26.701l-5.601,15.901h-15.901L183.098,10.53z\n            M181.598,54.333h18.501l-9-26.202h-0.2L181.598,54.333z" />\n                <path fill="#DFE8E8" d="M232.097,10.53h15.601l29.802,47.903h0.2V10.53H292.4v71.404h-15.701l-29.701-47.803h-0.2v47.803h-14.701\n           V10.53z" />\n                <path fill="#DFE8E8" d="M298.796,10.53h56.604v5.8h-24.901v65.604h-6.801V16.33h-24.901V10.53z" />\n                <path fill="#DFE8E8" d="M393.499,81.934h-5.8v-9.301h-0.2c-3.301,6.9-10.101,10.801-17.802,10.801\n           c-13,0-18.101-7.601-18.101-19.601V30.331h6.301v33.602c0.3,9.301,3.8,14.201,13.801,14.201c10.8,0,15.501-10.201,15.501-20.701\n           V30.331h6.3V81.934z" />\n                <path fill="#DFE8E8" d="M405.395,10.53h6.301v29.602h0.2c2.7-7.4,10.2-11.3,17.901-11.3c15.7,0,23.201,12.701,23.201,27.301\n           c0,14.602-7.501,27.302-23.201,27.302c-8.301,0-15.501-4.3-18.401-11.301h-0.2v9.801h-5.801V10.53z M429.797,34.131\n           c-13.401,0-18.102,11.3-18.102,22.001c0,10.701,4.7,22.002,18.102,22.002c12,0,16.9-11.301,16.9-22.002\n           C446.697,45.432,441.797,34.131,429.797,34.131z" />\n                <path fill="#DFE8E8" d="M466.494,57.833c0.101,9.2,4.9,20.302,17.001,20.302c9.201,0,14.201-5.4,16.201-13.201h6.301\n           c-2.7,11.701-9.501,18.501-22.502,18.501c-16.4,0-23.301-12.601-23.301-27.302c0-13.601,6.9-27.301,23.301-27.301\n           c16.602,0,23.202,14.5,22.702,29.001H466.494z M499.896,52.533c-0.3-9.501-6.2-18.401-16.401-18.401\n           c-10.3,0-16.001,9-17.001,18.401H499.896z" />\n            </g>\n        </svg>\n    </div>\n\n    <!-- <ion-item>\n          <ion-range dualKnobs="false" min="0" max="100" color="secondary" [ngModel]="volumeRange" (ngModelChange)="volume($event)">\n            <ion-icon name="volume-down"></ion-icon>\n            <ion-icon name="volume-uo"></ion-icon>\n          </ion-range>\n        </ion-item> -->\n\n</ion-header>\n<ion-content background="dark" padding>\n\n    <!-- <temperature></temperature> -->\n\n    <!-- <pre>\n        {{ ds18b20Temp | json }}\n    </pre> -->\n\n    <ion-fab class="add" middle center>\n        <button ion-fab color="danger" (click)="presentAddModal()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n    <div class="video-img-container">\n        <img *ngIf="playerStats?.videoInfo?.img" class="video-img" src="{{ playerStats?.videoInfo?.img }}"\n             alt="{{ playerStats?.videoInfo?.title }}">\n\n        <svg version="1.1" id="record-cover" xmlns="http://www.w3.org/2000/svg"\n             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="107px" height="160px"\n             viewBox="0 0 107 160" enable-background="new 0 0 107 160" xml:space="preserve">\n            <polygon fill="#C66749" points="0,38.843 83.131,0 107.534,100.56 40.395,160.295 " />\n        </svg>\n    </div>\n    <div class="record-player-container">\n        <div id="tridiv">\n            <div class="scene">\n                <div class="shape cuboid-1 cub-1" [ngClass]="{\'play\': playerStats?.status === \'playing\'}">\n                    <div class="face ft">\n                        <div class="photon-shader"></div>\n                    </div>\n                    <div class="face bk">\n                        <div class="photon-shader"></div>\n                    </div>\n                    <div class="face rt">\n                        <div class="photon-shader"></div>\n                    </div>\n                    <div class="face lt">\n                        <div class="photon-shader"></div>\n                    </div>\n                    <div class="face bm">\n                        <div class="photon-shader"></div>\n                    </div>\n                    <div class="face tp">\n                        <div class="photon-shader"></div>\n                    </div>\n                    <div class="cr cr-0">\n                        <div class="face side s0">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s1">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s2">\n                            <div class="photon-shader"></div>\n                        </div>\n                    </div>\n                    <div class="cr cr-1">\n                        <div class="face side s0">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s1">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s2">\n                            <div class="photon-shader"></div>\n                        </div>\n                    </div>\n                    <div class="cr cr-2">\n                        <div class="face side s0">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s1">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s2">\n                            <div class="photon-shader"></div>\n                        </div>\n                    </div>\n                    <div class="cr cr-3">\n                        <div class="face side s0">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s1">\n                            <div class="photon-shader"></div>\n                        </div>\n                        <div class="face side s2">\n                            <div class="photon-shader"></div>\n                        </div>\n                    </div>\n                    <div class="shape pyramid-1 pyr-1">\n                        <div class="face-wrapper ft">\n                            <div class="face">\n                                <div class="photon-shader"></div>\n                            </div>\n                        </div>\n                        <div class="face-wrapper bk">\n                            <div class="face">\n                                <div class="photon-shader"></div>\n                            </div>\n                        </div>\n                        <div class="face-wrapper lt">\n                            <div class="face">\n                                <div class="photon-shader"></div>\n                            </div>\n                        </div>\n                        <div class="face-wrapper rt">\n                            <div class="face">\n                                <div class="photon-shader"></div>\n                            </div>\n                        </div>\n                        <div class="face bm">\n                            <div class="photon-shader"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <svg version="1.1" id="vinyl" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n             x="0px" y="0px" width="325px" height="325px" viewBox="0 0 325 325" enable-background="new 0 0 325 325"\n             xml:space="preserve">\n            <g\n               [ngClass]="{\'playing-animation\': playerStats?.status === \'loading\' || playerStats?.status === \'playing\'}">\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,323.5c-88.99,0-161-72.01-161-161\n                s72.01-161,161-161s161,72.01,161,161S251.486,323.5,162.496,323.5z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,311.079\n                c-82.15,0-148.579-66.429-148.579-148.579S80.346,13.921,162.496,13.921S311.075,80.35,311.075,162.5\n                S244.646,311.079,162.496,311.079z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,298.736\n                c-75.312,0-136.236-60.925-136.236-136.236S87.185,26.264,162.496,26.264S298.732,87.188,298.732,162.5\n                S237.808,298.736,162.496,298.736z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,286.316\n                c-68.473,0-123.816-55.344-123.816-123.816S94.023,38.684,162.496,38.684S286.313,94.027,286.313,162.5\n                S230.969,286.316,162.496,286.316z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,273.974\n                c-61.633,0-111.474-49.841-111.474-111.474S100.863,51.026,162.496,51.026S273.97,100.867,273.97,162.5\n                S224.129,273.974,162.496,273.974z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10"\n                      d="M162.496,261.553\n                c-54.793,0-99.053-44.26-99.053-99.053s44.26-99.053,99.053-99.053s99.053,44.26,99.053,99.053S217.289,261.553,162.496,261.553z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,249.211\n                c-47.954,0-86.711-38.757-86.711-86.711s38.757-86.711,86.711-86.711s86.711,38.757,86.711,86.711S210.45,249.211,162.496,249.211z\n                " />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,236.789\n                c-41.036,0-74.289-33.253-74.289-74.289s33.253-74.289,74.289-74.289s74.289,33.253,74.289,74.289S203.532,236.789,162.496,236.789\n                z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10"\n                      d="M162.496,224.447\n                c-34.197,0-61.947-27.75-61.947-61.947s27.75-61.947,61.947-61.947s61.947,27.75,61.947,61.947S196.693,224.447,162.496,224.447z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M162.496,212.026\n                c-27.357,0-49.526-22.169-49.526-49.526s22.169-49.526,49.526-49.526s49.526,22.169,49.526,49.526S189.854,212.026,162.496,212.026\n                z" />\n                <path stroke="#A8A39F" stroke-width="3" stroke-miterlimit="10" d="M168.707,162.5c0-3.459-2.752-6.211-6.211-6.211\n                s-6.211,2.752-6.211,6.211s2.752,6.211,6.211,6.211S168.707,165.959,168.707,162.5z" />\n            </g>\n        </svg>\n\n        <svg version="1.1" id="record-player" xmlns="http://www.w3.org/2000/svg"\n             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500.051px" height="304.709px"\n             viewBox="0 0 500.051 304.709" enable-background="new 0 0 500.051 304.709" xml:space="preserve">\n            <g>\n                <polygon fill="#403B3C" points="499.291,68.914 250.025,0 0.761,68.914 250.027,198.738 	" />\n                <polygon fill="#403B3C" stroke="#939393" stroke-miterlimit="10" points="23.044,156.249 250.027,303.788 250.027,198.738 \n                0.761,68.912 	" />\n                <polygon fill="#403B3C" stroke="#939393" stroke-miterlimit="10" points="477.389,154.759 250.027,302.061 250.027,198.738 \n                499.291,68.912 	" />\n                <g>\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M220.351,130.938c-78.38,0.695-119.763-35.606-99.533-68.706\n                  c14.921-24.406,60.785-40.024,105.556-40.158c44.557-0.134,88.078,15.07,100.036,39.105\n                  C342.576,93.666,298.079,130.251,220.351,130.938z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M322.487,61.203c-11.063-23.226-52.997-38.048-96.181-37.916\n                  c-43.384,0.133-87.575,15.354-101.48,38.927c-18.618,31.582,21.48,65.749,95.729,65.106\n                  C294.213,126.686,337.264,92.225,322.487,61.203z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M220.746,123.808c-70.302,0.594-109.024-31.496-91.913-61.614\n                  c12.926-22.748,55.385-37.543,97.408-37.673c41.826-0.132,82.117,14.275,92.322,36.7\n                  C332.045,90.831,290.524,123.217,220.746,123.808z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M314.688,61.243c-9.373-21.6-48.113-35.613-88.52-35.487\n                  c-40.578,0.127-81.405,14.521-93.383,36.417c-15.667,28.644,21.746,58.809,88.147,58.258\n                  C286.869,119.885,326.921,89.423,314.688,61.243z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M221.117,117.105c-62.672,0.51-98.631-27.728-84.328-54.954\n                  c11.063-21.055,50.145-34.994,89.311-35.121c39.006-0.127,76.087,13.45,84.661,34.232\n                  C321.827,88.068,283.375,116.604,221.117,117.105z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M306.832,61.281c-7.803-19.935-43.269-33.082-80.804-32.954\n                  c-37.688,0.126-75.061,13.618-85.237,33.804c-12.996,25.792,21.525,52.208,80.508,51.737\n                  C279.908,113.405,316.78,86.698,306.832,61.281z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M221.473,110.72c-55.457,0.432-88.46-24.199-76.679-48.608\n                  c9.327-19.333,44.938-32.345,81.163-32.467c36.084-0.123,69.874,12.559,76.94,31.658\n                  C311.812,85.376,276.595,110.29,221.473,110.72z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M299.019,61.324c-6.369-18.241-38.58-30.474-73.137-30.356\n                  c-34.686,0.121-68.633,12.676-77.139,31.124c-10.623,23.018,20.938,45.992,72.896,45.599\n                  C273.312,107.295,306.951,84.036,299.019,61.324z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M221.807,104.699c-48.617,0.361-78.602-20.956-69.071-42.628\n                  c7.729-17.572,39.898-29.618,73.072-29.735c33.053-0.119,63.575,11.624,69.275,29.007\n                  C302.101,82.747,270.164,104.341,221.807,104.699z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M291.148,61.362c-5.055-16.499-33.938-27.753-65.416-27.639\n                  c-31.589,0.116-62.029,11.657-68.999,28.327c-8.505,20.314,19.942,40.065,65.232,39.736\n                  C267.04,101.46,297.301,81.441,291.148,61.362z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M222.123,98.951c-42.114,0.298-68.944-17.913-61.402-36.922\n                  c6.266-15.777,34.914-26.782,64.93-26.893c29.921-0.107,57.107,10.621,61.563,26.244\n                  C292.576,80.185,264.044,98.649,222.123,98.951z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M283.32,61.402c-3.887-14.721-29.463-24.949-57.745-24.841\n                  c-28.372,0.105-55.325,10.591-60.912,25.45c-6.639,17.688,18.649,34.471,57.614,34.201\n                  C261.073,95.944,287.948,78.91,283.32,61.402z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M222.424,93.512c-35.944,0.243-59.585-15.108-53.768-31.524\n                  c4.944-13.947,30.095-23.862,56.837-23.961c26.666-0.104,50.529,9.565,53.885,23.396C283.33,77.682,258.232,93.265,222.424,93.512\n                  z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M275.439,61.443c-2.861-12.906-25.053-22.023-50.03-21.924\n                  c-25.037,0.097-48.433,9.441-52.765,22.45c-5.04,15.128,16.983,29.124,49.923,28.903\n                  C255.393,90.652,278.759,76.441,275.439,61.443z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10"\n                          d="M222.71,88.3c-30.007,0.197-50.397-12.493-46.082-26.352\n                  c3.757-12.059,25.39-20.815,48.697-20.91c23.246-0.091,43.767,8.454,46.169,20.425C274.243,75.21,252.623,88.104,222.71,88.3z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M267.547,61.486c-1.976-11.05-20.772-18.985-42.307-18.899\n                  c-21.59,0.089-41.404,8.22-44.624,19.341c-3.667,12.636,15.026,24.037,42.236,23.861C249.98,85.614,269.792,74.027,267.547,61.486\n                  z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M222.982,83.367c-24.419,0.152-41.503-10.06-38.439-21.46\n                  c2.735-10.153,20.822-17.677,40.613-17.761c19.74-0.083,36.901,7.266,38.497,17.355C265.438,72.826,247.333,83.215,222.982,83.367\n                  z" />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M259.702,61.522c-1.248-9.144-16.671-15.845-34.635-15.765\n                  c-18.002,0.076-34.261,6.933-36.538,16.131c-2.525,10.206,12.84,19.214,34.59,19.08C244.813,80.832,261.088,71.67,259.702,61.522z\n                  " />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10" d="M223.248,78.625c-19.084,0.116-32.778-7.755-30.743-16.758\n                  c1.858-8.207,16.336-14.402,32.469-14.471c16.103-0.07,29.836,5.979,30.781,14.147C256.778,70.498,242.288,78.513,223.248,78.625z\n                  " />\n                    <path fill="none" stroke="#A8A39F" stroke-miterlimit="10"\n                          d="M228.143,61.685c0.038-1.074-1.668-1.914-3.851-1.904\n                  c-2.187,0.012-3.994,0.867-4.074,1.946c-0.086,1.087,1.625,1.956,3.859,1.944C226.306,63.659,228.108,62.772,228.143,61.685z" />\n                </g>\n                <g>\n                    <g>\n                        <g enable-background="new">\n                            <g>\n                                <path fill="#A8A39E"\n                                      d="M117.097,78.655v-1.408c0,4.947,1.35,9.864,4.052,14.63c12.609,22.205,50.112,36.001,97.875,36.001\n                        c0.729,0,1.476-0.009,2.214-0.009c48.789-0.427,89.55-15.574,103.842-38.58v1.408c-14.292,23.005-55.054,38.153-103.842,38.58\n                        c-0.738,0-1.485,0.009-2.214,0.009c-47.763,0-85.266-13.796-97.875-36.001C118.447,88.52,117.097,83.603,117.097,78.655z" />\n                            </g>\n                            <g>\n                                <path fill="#A8A39E" d="M330.1,72.828v1.408c0,5.525-1.679,11.076-5.02,16.463v-1.408\n                        C328.421,83.904,330.1,78.354,330.1,72.828z" />\n                            </g>\n                            <g>\n                                <path fill="#A8A39E" d="M331.105,72.84v1.408c0-4.58-1.118-9.145-3.36-13.595v-1.408\n                        C329.987,63.695,331.105,68.26,331.105,72.84z" />\n                            </g>\n                            <g>\n                                <path fill="#A8A39E"\n                                      d="M227.844,21.753v-1.408c22.05,0,44.091,3.716,62.073,10.48c18.972,7.129,32.058,16.96,37.827,28.419\n                        v1.408c-5.77-11.458-18.855-21.29-37.827-28.419C271.935,25.469,249.894,21.753,227.844,21.753z" />\n                            </g>\n                            <g>\n                                <rect x="227.259" y="20.346" fill="#A8A39E" width="0.585" height="1.408" />\n                            </g>\n                            <g>\n                                <path fill="#A8A39E"\n                                      d="M116.088,78.655v-1.408c0-5.691,1.73-11.419,5.188-17.007c14.229-22.979,58.797-39.762,105.984-39.895\n                        v1.408c-47.187,0.133-91.755,16.917-105.984,39.895C117.818,67.236,116.088,72.964,116.088,78.655z" />\n                            </g>\n                            <g>\n                                <path fill="#A8A39E" d="M327.745,60.653c5.03,9.982,4.4,20.543-1.81,30.561c-14.463,23.291-55.557,38.625-104.688,39.051\n                        c-0.738,0-1.485,0.008-2.223,0.008c-24.462,0-46.728-3.653-64.377-10.551c-16.506-6.462-28.395-15.441-34.371-25.957\n                        c-5.904-10.4-5.562-21.512,0.999-32.117c14.229-22.979,58.797-39.762,105.984-39.895h0.585c22.05,0,44.091,3.715,62.073,10.48\n                        C308.889,39.363,321.975,49.194,327.745,60.653z M325.081,90.699c6.021-9.708,6.642-19.948,1.772-29.61\n                        c-11.195-22.223-52.83-38.348-99.009-38.348h-0.585c-46.854,0.133-91.071,16.721-105.129,39.424\n                        c-6.363,10.285-6.696,21.041-0.981,31.122c12.609,22.205,50.112,36.001,97.875,36.001c0.729,0,1.476-0.009,2.214-0.009\n                        C270.027,128.852,310.789,113.704,325.081,90.699" />\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n    </div>\n    <ion-spinner *ngIf="playerStats?.status === \'loading\'" color="primary"></ion-spinner>\n    <div *ngIf="playerStats" class="video-info">\n        <span *ngIf="playerStats?.videoInfo?.title" class="artist">\n            {{ playerStats.videoInfo.order }} {{ playerStats.videoInfo.title }}\n        </span>\n        <!-- <span *ngIf="!videos.length" class="artist">\n                No hay videos en la lista\n            </span> -->\n    </div>\n    <ion-fab left middle>\n        <button color="{{ playerStats?.playlist ? \'secondary\' : \'dark\' }}" ion-fab mini\n                class="button button-md button-default button-default-md" (click)="playList()">\n            <ion-icon name="infinite"></ion-icon>\n        </button>\n        <br>\n        <button color="dark" ion-fab mini class="button button-md button-default button-default-md"\n                (click)="presentListModal()">\n            <ion-icon name="list"></ion-icon>\n        </button>\n    </ion-fab>\n    <ion-fab left bottom class="player">\n        <button color="dark" ion-fab mini dark [disabled]="playerStats?.videoId === null"\n                class="button button-md button-default button-default-md" (click)="playPrev()">\n            <ion-icon name="skip-backward" role="img" class="icon icon-md ion-md-skip-backward"\n                      aria-label="skip backward" ng-reflect-name="skip-backward"></ion-icon>\n        </button>\n        <button color="dark" ion-fab mini [disabled]="playerStats?.videoId === null"\n                class="button button-md button-default button-default-md" (click)="playNext()">\n            <ion-icon name="skip-forward" role="img" class="icon icon-md ion-md-skip-forward" aria-label="skip forward"\n                      ng-reflect-name="skip-forward"></ion-icon>\n        </button>\n    </ion-fab>\n    <ion-fab bottom right class="player">\n        <button color="dark" ion-fab mini [disabled]="playerStats?.status !== \'playing\'"\n                class="button button-md button-default button-default-md" (click)="stopAll()">\n            <ion-icon name="stop" role="img" class="icon icon-md ion-md-square" aria-label="stop"\n                      ng-reflect-name="stop"></ion-icon>\n        </button>\n        <button color="dark" ion-fab mini class="button button-md button-default button-default-md"\n                style="transition: none;" (click)="playPause()">\n            <ion-icon *ngIf="playerStats?.status === \'loading\' || playerStats?.status === \'paused\' || playerStats?.status === \'stopped\'"\n                      name="play" role="img" class="icon icon-md ion-md-play" aria-label="play" ng-reflect-name="play">\n            </ion-icon>\n            <ion-icon *ngIf="playerStats?.status === \'playing\'" name="pause" role="img"\n                      class="icon icon-md ion-md-pause" aria-label="pause" ng-reflect-name="pause"></ion-icon>\n        </button>\n    </ion-fab>\n    <ion-fab right middle>\n        <button color="dark" ion-fab mini\n                [disabled]="playerStats?.status !== \'playing\' && playerStats?.status !== \'paused\'"\n                class="button button-md button-default button-default-md" (click)="volume(\'up\')">\n            <ion-icon name="volume-up"></ion-icon>\n        </button>\n        <br>\n        <button color="dark" ion-fab mini\n                [disabled]="playerStats?.status !== \'playing\' && playerStats?.status !== \'paused\'"\n                class="button button-md button-default button-default-md" (click)="volume(\'down\')">\n            <ion-icon name="volume-down"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n\n\n<!-- </ion-fab-list> -->'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/player/player.html"*/,
            styles: [
                './player.scss'
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__app_services_config_services__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_videos_service__["a" /* VideosService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.APIUrl = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.APIPort = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    ConfigService.prototype.setAPIEndpoint = function (ip, port) {
        if (ip === void 0) { ip = 'http://localhost'; }
        if (port === void 0) { port = 3000; }
        var url = ip;
        this.APIUrl.next({ url: url, port: port });
        localStorage.setItem('url', url);
        localStorage.setItem('port', String(port));
        return url + ":" + port;
    };
    ConfigService.prototype.getAPIUrl = function () {
        var url = localStorage.getItem('url') || this.APIUrl.getValue();
        return url;
    };
    ConfigService.prototype.getAPIEndpoint = function () {
        var url = localStorage.getItem('url') || this.APIUrl.getValue();
        var port = localStorage.getItem('port') || this.APIPort.getValue();
        return url + ":" + port;
    };
    ConfigService.prototype.delAPIEndpoint = function () {
        this.APIUrl.next(null);
        this.APIPort.next(null);
        localStorage.removeItem('url');
        localStorage.removeItem('port');
    };
    ConfigService.prototype.autoConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.getAPIEndpoint()) return [3 /*break*/, 3];
                        if (!(window.location.hostname.indexOf('http') > -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setAPIEndpoint(window.location.hostname, 3000)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, true];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());

//# sourceMappingURL=config.services.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeService = /** @class */ (function () {
    function YoutubeService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.API = this.configService.getAPIEndpoint();
    }
    YoutubeService.prototype.search = function (term) {
        return this.http.get(this.API + '/api/videos/search/' + encodeURIComponent(term)).map(this.extractData).catch(this.handleError);
    };
    YoutubeService.prototype.extractData = function (res) {
        return res.json();
    };
    YoutubeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config_services__["a" /* ConfigService */]])
    ], YoutubeService);
    return YoutubeService;
}());

//# sourceMappingURL=youtube.service.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_videos_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, loadingCtrl, navParams, videosService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.videosService = videosService;
        this.viewCtrl = viewCtrl;
    }
    AddPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AddPage.prototype.addVideo = function () {
        var _this = this;
        this.videosService.add(this.extractVideoId()).subscribe(function (video) {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
        });
    };
    AddPage.prototype.extractVideoId = function () {
        return this.youtubeVideo.trim().replace(/http(s?):\/\/(w{3}?)(\.?)youtube\.com\/watch\?v=/, '');
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/add/add.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Agregar URL de Video</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Youtube URL or video ID" [(ngModel)]="youtubeVideo" autofocus="true">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button (click)="goBack()">\n    CANCELAR\n  </button>\n  <button ion-button color="secondary" (click)="addVideo()" [(disabled)]="!youtubeVideo">\n    AGREGAR\n  </button>\n</ion-footer>'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/add/add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_videos_service__["a" /* VideosService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SensorService = /** @class */ (function () {
    function SensorService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.sensorURL = this.configService.getAPIEndpoint() + '/api/sensor';
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(this.sensorURL.replace('/api/sensor', ''));
    }
    // EMITTER
    SensorService.prototype.sendMessage = function (msg) {
        this.socket.emit('SENSOR_MESSAGE', { message: msg });
    };
    // HANDLER
    SensorService.prototype.onNewMessage = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer, error) {
            _this.socket.on('SENSOR_MESSAGE', function (msg) {
                observer.next(msg);
            });
        });
    };
    SensorService.prototype.onEvent = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"](function (observer) {
            _this.socket.on(String(event), function () {
                observer.next();
            });
        });
    };
    SensorService.prototype.extractData = function (res) {
        return res.json();
    };
    SensorService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    SensorService.prototype.get = function (sensor) {
        return this.http.get(this.sensorURL + '/' + sensor).map(this.extractData).catch(this.handleError);
    };
    SensorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config_services__["a" /* ConfigService */]])
    ], SensorService);
    return SensorService;
}());

//# sourceMappingURL=sensor.service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_add__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_player_player__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_videos_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_server_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_player_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_youtube_service__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sensor_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modal_imageModal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_config_config__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_game_game__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sensor_temperature__ = __webpack_require__(728);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modal_imageModal__["a" /* ImageModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sensor_temperature__["a" /* TemperatureComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modal_imageModal__["a" /* ImageModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sensor_temperature__["a" /* TemperatureComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_videos_service__["a" /* VideosService */],
                __WEBPACK_IMPORTED_MODULE_11__services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_12__services_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_13__services_youtube_service__["a" /* YoutubeService */],
                __WEBPACK_IMPORTED_MODULE_19__services_config_services__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_14__services_sensor_service__["a" /* SensorService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_player_player__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_add__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_config_config__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_game__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';







var MyApp = /** @class */ (function () {
    function MyApp(platform, configService, statusBar, splashScreen, alertCtrl) {
        this.platform = platform;
        this.configService = configService;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_player_player__["a" /* PlayerPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Videos', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Agregar URL', component: __WEBPACK_IMPORTED_MODULE_6__pages_add_add__["a" /* AddPage */] },
            { title: 'Buscar', component: __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */] },
            { title: 'Configuraciones', component: __WEBPACK_IMPORTED_MODULE_8__pages_config_config__["a" /* ConfigPage */] },
            { title: 'Extras', component: __WEBPACK_IMPORTED_MODULE_10__pages_game_game__["a" /* GamePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.configService.autoConnect();
            _this.statusBar.styleDefault();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_player_player__["a" /* PlayerPage */]);
            _this.splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Salir de Lantube',
                        message: 'La App se va a cerrar',
                        buttons: [{
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application exit prevented!');
                                }
                            }, {
                                text: 'Cerrar App',
                                handler: function () {
                                    _this.platform.exitApp(); // Close this application
                                }
                            }]
                    });
                    alert_1.present();
                }
                // this.nav.pop();
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content background="dark">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n        {{ page.title }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__services_config_services__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideosService = /** @class */ (function () {
    function VideosService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.API = this.configService.getAPIEndpoint();
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(this.API);
    }
    VideosService.prototype.extractData = function (res) {
        return res.json();
    };
    // EMITTER
    VideosService.prototype.sendMessage = function (msg) {
        this.socket.emit('VIDEOS_MESSAGE', { message: msg });
    };
    // HANDLER
    VideosService.prototype.onNewMessage = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            _this.socket.on('VIDEOS_MESSAGE', function (msg) {
                observer.next(msg);
            });
        });
    };
    VideosService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    VideosService.prototype.get = function (params) {
        return this.http.get(this.API + '/api/videos', params).map(this.extractData);
    };
    VideosService.prototype.getById = function (id) {
        return this.http.get(this.API + '/api/videos/' + id).map(this.extractData);
    };
    VideosService.prototype.add = function (video) {
        return this.http.get(this.API + '/api/videos/add/' + video).map(this.extractData).catch(this.handleError);
    };
    VideosService.prototype.put = function (video) {
        return video;
    };
    VideosService.prototype.delete = function (videoId) {
        return this.http.delete(this.API + '/api/videos/delete/' + videoId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VideosService.prototype.reorder = function (videoId, swap) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: cpHeaders });
        return this.http.post(this.API + '/api/', swap, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VideosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config_services__["a" /* ConfigService */]])
    ], VideosService);
    return VideosService;
}());

//# sourceMappingURL=videos.service.js.map

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_sensor_service__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent(configService, sensorService) {
        this.configService = configService;
        this.sensorService = sensorService;
        this.core = {};
        this.dht = {};
        this.ds18b20 = {};
        this.sensorOK = false;
    }
    TemperatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.sensorOK) {
            this.getSensorStats();
        }
        setTimeout(function () {
            _this.configService.autoConnect();
        }, 500);
        // this.sensorService.onNewMessage().subscribe(stats => {
        //     console.log(stats);
        //     if (stats) {
        //         this.dht = JSON.parse(JSON.stringify(stats));
        //     }
        //     if (stats.sensor === 'core') {
        //         this.core = JSON.parse(JSON.stringify(stats));
        //     }
        //     if (stats.sensor === 'DS18B20') {
        //         this.ds18b20 = JSON.parse(JSON.stringify(stats));
        //     }
        // });
    };
    TemperatureComponent.prototype.getSensorStats = function () {
        var _this = this;
        if (!this.sensorOK) {
            // this.sensorService.get('dht').subscribe(stats => {
            //     console.log('1', stats);
            //     this.sensorOK = true;
            // });
            this.sensorService.get('ds18b20').subscribe(function (stats) {
                console.log('2', stats);
                _this.sensorOK = true;
            });
            this.sensorService.get('coreTemp').subscribe(function (stats) {
                console.log('3', stats);
                _this.sensorOK = true;
            });
        }
    };
    TemperatureComponent.prototype.coreTempStatus = function () {
        return this.core.temperature.value > this.core.dangerTempLimit ? 'danger' : 'cool';
    };
    TemperatureComponent.prototype.roomTempStatus = function () {
        return this.ds18b20.temperature.value > this.ds18b20.temperature.dangerTempLimit ? 'danger' : 'cool';
    };
    Object.defineProperty(TemperatureComponent.prototype, "dhtHumedad", {
        get: function () {
            return this.dht && this.dht.humedad && this.dht.humedad.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemperatureComponent.prototype, "dhtTemperatura", {
        get: function () {
            return this.dht && this.dht.temperatura && this.dht.temperatura.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemperatureComponent.prototype, "ds18b20Temperatura", {
        get: function () {
            return this.ds18b20 && this.ds18b20.temperatura && this.ds18b20.temperatura.value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TemperatureComponent.prototype, "core", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TemperatureComponent.prototype, "dht", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TemperatureComponent.prototype, "ds18b20", void 0);
    TemperatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'temperature',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/sensor/temperature.html"*/'<!-- <ion-fab *ngIf="dht.humedad && dht.temperatura" top right color="primary">\n    <div ion-fab mini color="dark">\n        <span>\n            {{ dht.humedad }}\n        </span>\n    </div>\n    <div ion-fab mini color="dark">\n        <span>\n            {{ dht.temperatura }}\n        </span>\n    </div>\n</ion-fab>\n\n<ion-fab top right>\n    <div ion-fab mini> lksajdlksajd</div>\n</ion-fab> -->\nlalalala\n<!-- {{ dht | json }} -->\n{{ core | json }}\n{{ ds18b20 | json }}\n<!-- {{ stats | json }} -->\n\n<!-- <div *ngIf="ds18b20Temp?.value" top left ion-fab mini color="warning">\n        <span>\n            {{ ds18b20Temp?.value }} {{ ds18b20Temp?.unit }}\n        </span>\n    </div> -->\n<!-- <div *ngIf="ds18b20Temp?.value" top left ion-fab mini color="dark">\n        <span>\n            {{ ds18b20Temp?.value }}\n        </span>\n    </div> -->\n<!-- </ion-fab> -->\n<!-- <ion-chip *ngIf="ds18b20?.temperature?.value" color="warning">\n    <ion-icon name="heart" color="dark"></ion-icon>\n    <ion-label>{{ ds18b20?.temperature?.value }} {{ ds18b20?.temperature?.unit }}</ion-label>\n</ion-chip>\n\n<ion-fab top right>\n    <div *ngIf="core?.temperature?.value" top right ion-fab mini [color]="coreTempStatus()">\n        <span>\n            {{ core.temperature?.value }} {{ core.temperature?.unit}}\n        </span>\n    </div>\n    <div *ngIf="ds18b20.temperature?.value" top right ion-fab mini [color]="roomTempStatus()">\n        <span>\n            {{ ds18b20.temperature?.value }} {{ ds18b20.temperature?.unit }}\n        </span>\n    </div>\n\n</ion-fab> -->'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/sensor/temperature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_config_services__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_sensor_service__["a" /* SensorService */]])
    ], TemperatureComponent);
    return TemperatureComponent;
}());

//# sourceMappingURL=temperature.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_services__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PlayerService = /** @class */ (function () {
    function PlayerService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.playerURL = this.configService.getAPIEndpoint() + '/api/player';
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(this.playerURL.replace('/api/player', ''));
    }
    // EMITTER
    PlayerService.prototype.sendMessage = function (msg) {
        this.socket.emit('PLAYER_MESSAGE', { message: msg });
    };
    // HANDLER
    PlayerService.prototype.onNewMessage = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer, error) {
            _this.socket.on('PLAYER_MESSAGE', function (msg) {
                observer.next(msg);
            });
        });
    };
    PlayerService.prototype.onEvent = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"](function (observer) {
            _this.socket.on(String(event), function () {
                observer.next();
            });
        });
    };
    PlayerService.prototype.extractData = function (res) {
        return res.json();
    };
    PlayerService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    PlayerService.prototype.get = function (player) {
        return this.http.get(this.playerURL + '/' + player).map(this.extractData);
    };
    PlayerService.prototype.setVolume = function (upOrDown) {
        return this.http.get(this.playerURL + '/volume/' + upOrDown).map(this.extractData);
    };
    PlayerService.prototype.update = function (player, videoId) {
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: cpHeaders });
        return this.http.put(this.playerURL + '/stats/update/' + videoId, player, options).map(this.extractData);
    };
    PlayerService.prototype.play = function (id) {
        return this.http.get(this.playerURL + '/' + id + '/play').map(this.extractData);
    };
    PlayerService.prototype.playAll = function () {
        return this.http.get(this.playerURL + '/playall').map(this.extractData).catch(this.handleError);
    };
    // Toggles playlist mode
    PlayerService.prototype.playList = function () {
        return this.http.patch(this.playerURL + '/playlist', {}).map(this.extractData);
    };
    PlayerService.prototype.playPrev = function () {
        return this.http.get(this.playerURL + '/prev').map(this.extractData);
    };
    PlayerService.prototype.playNext = function () {
        return this.http.get(this.playerURL + '/next').map(this.extractData);
    };
    PlayerService.prototype.stopAll = function () {
        return this.http.get(this.playerURL + '/stop').map(this.extractData);
    };
    PlayerService.prototype.pause = function () {
        return this.http.get(this.playerURL + '/pause').map(this.extractData);
    };
    PlayerService.prototype.volume = function (volume) {
        return this.http.get(this.playerURL + '/volume/' + volume).map(this.extractData);
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config_services__["a" /* ConfigService */]])
    ], PlayerService);
    return PlayerService;
}());

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_youtube_service__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_videos_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_imageModal__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, alertCtrl, loadingCtrl, youtubeService, videosService, renderer, elementRef) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.youtubeService = youtubeService;
        this.videosService = videosService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.term = '';
        this.videoList = [];
    }
    SearchPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // we need to delay our call in order to work with ionic ...
        setTimeout(function () {
            var element = _this.elementRef.nativeElement.querySelector('input');
            _this.renderer.invokeElementMethod(element, 'focus', []);
        }, 1000);
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        if (typeof this.term === 'string' && this.term.length) {
            this.showLoader('Buscando videos...');
            this.videoList = [];
            this.youtubeService.search(this.term).subscribe(function (result) {
                _this.videoList = result;
                _this.hideLoader();
            });
        }
    };
    SearchPage.prototype.showImageModal = function (img) {
        // const modal = this.modalCtrl.create(ImageModalPage, { img: img });
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modal_imageModal__["a" /* ImageModalPage */], { img: img });
    };
    SearchPage.prototype.showLoader = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    SearchPage.prototype.hideLoader = function () {
        this.loader.dismiss();
    };
    SearchPage.prototype.showConfirmAdd = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Agregar video?',
            message: 'El video se va a agregar a la lista',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.addVideo(index);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    SearchPage.prototype.goBack = function () {
        this.navCtrl.pop();
        // this.viewCtrl.dismiss();
    };
    SearchPage.prototype.addVideo = function (index) {
        var _this = this;
        this.youtubeVideo = this.selectVideo(index);
        this.videosService.add(this.extractVideoId()).subscribe(function (video) {
            _this.navCtrl.pop();
        });
    };
    SearchPage.prototype.selectVideo = function (index) {
        return this.videoList[index];
    };
    SearchPage.prototype.extractVideoId = function () {
        return this.youtubeVideo.url.trim().replace(/\/watch\?v=/, '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('input'),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "searchInput", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/pi/src/lantube-mobile/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Buscar Video</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-input type="text" placeholder="Búsqueda" [(ngModel)]="term" (keyup.enter)="search()">\n    </ion-input>\n\n  </ion-item>\n\n  <ion-list>\n    <ng-container *ngFor="let item of videoList; let i = index">\n      <ion-item>\n        <ion-avatar item-start (click)="showImageModal(item.img)">\n          <img src="{{ item.img }}">\n        </ion-avatar>\n        <ion-label (click)="showConfirmAdd(i)">\n          {{ item.title }} ~ {{ item.duration }}\n        </ion-label>\n        <div class="item-note" item-end (click)="showConfirmAdd(i)">\n          <ion-icon name=\'add\' item-end color="danger"></ion-icon>\n        </div>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <button full ion-button color="primary" (click)="search()">\n    BUSCAR\n  </button>\n</ion-footer>'/*ion-inline-end:"/home/pi/src/lantube-mobile/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_videos_service__["a" /* VideosService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

},[380]);
//# sourceMappingURL=main.js.map