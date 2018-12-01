import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

@Injectable()
export class PlayerService {

    private playerURL = (location.href.includes('172.16') ? environment.API : (location.href.includes('192.168.4') ? environment.API_WIFI_CASA : environment.API_WIFI)) + '/api/player';

    private socket: SocketIOClient.Socket;

    constructor(private http: Http) {
        this.socket = io(this.playerURL.replace('/api/player', ''));
    }

    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('PLAYER_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return Observable.create(observer => {
            this.socket.on('PLAYER_MESSAGE', msg => {
                observer.next(msg);
            });
        });
    }

    extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    get(player: String): Observable<any> {
        return this.http.get(this.playerURL + '/' + player).map(this.extractData);
    }

    setVolume(upOrDown: 'up' | 'down'): Observable<any> {
        return this.http.get(this.playerURL + '/volume/' + upOrDown).map(this.extractData);
    }

    update(player: any): Observable<any> {
        return this.http.put(this.playerURL, player).map(this.extractData);
    }

    play(id: String): Observable<any[]> {
        return this.http.get(this.playerURL + '/' + id + '/play').map(this.extractData);
    }

    playAll(): Observable<any[]> {
        return this.http.get(this.playerURL + '/playall').map(this.extractData).catch(this.handleError);
    }

    playPause(): Observable<any[]> {
        return this.http.get(this.playerURL + '/playlist').map(this.extractData);
    }

    playPrev(): Observable<any[]> {
        return this.http.get(this.playerURL + '/prev').map(this.extractData);
    }
    playNext(): Observable<any[]> {
        return this.http.get(this.playerURL + '/next').map(this.extractData);
    }

    stopAll(): Observable<any[]> {
        return this.http.get(this.playerURL + '/stop').map(this.extractData);
    }

    pause(): Observable<any[]> {
        return this.http.get(this.playerURL + '/pause').map(this.extractData);
    }

    volume(volume: any): Observable<any[]> {
        return this.http.get(this.playerURL + '/volume/' + volume).map(this.extractData);
    }

}
