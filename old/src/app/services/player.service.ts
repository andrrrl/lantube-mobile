import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IVolume } from '../interfaces/IVolume.interface';
import { ConfigService } from './config.services';
import * as io from 'socket.io-client';
import { Headers } from '@angular/http'
import { SocketEvent } from '../enums/socketio-events';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class PlayerService {

    private playerURL: string;
    private socket: SocketIOClient.Socket;

    constructor(
        private http: Http,
        public configService: ConfigService) {
        this.playerURL = this.configService.getAPIEndpoint() + '/api/player';
        this.socket = io(this.playerURL.replace('/api/player', ''));
    }


    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('PLAYER_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return Observable.create((observer, error) => {
            this.socket.on('PLAYER_MESSAGE', msg => {
                observer.next(msg);
            });
        });
    }

    public onEvent(event: SocketEvent): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(String(event), () => {
                observer.next();
            });
        });
    }

    extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    get(player: String): Observable<any> {
        return this.http.get(this.playerURL + '/' + player).map(this.extractData);
    }

    setVolume(upOrDown: IVolume): Observable<any> {
        return this.http.get(this.playerURL + '/volume/' + upOrDown).map(this.extractData);
    }

    update(player: any, videoId): Observable<any> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.playerURL + '/stats/update/' + videoId, player, options).map(this.extractData);
    }

    play(id: String): Observable<any[]> {
        return this.http.get(this.playerURL + '/' + id + '/play').map(this.extractData);
    }

    playAll(): Observable<any[]> {
        return this.http.get(this.playerURL + '/playall').map(this.extractData).catch(this.handleError);
    }

    // Toggles playlist mode
    playList(): Observable<any[]> {
        return this.http.patch(this.playerURL + '/playlist', {}).map(this.extractData);
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
