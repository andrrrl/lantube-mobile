import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVolume } from '../interfaces/IVolume.interface';
import { ConfigService } from './config.services';
import * as io from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class PlayerService {

    private playerURL: string;
    private socket: SocketIOClient.Socket;
    private serveStatsURL: string;

    constructor(
        private http: HttpClient,
        public configService: ConfigService) {
        this.playerURL = this.configService.getAPIEndpoint() + '/api/player';
        this.serveStatsURL = this.configService.getAPIEndpoint() + '/api/player/stats';
        this.socket = io(this.playerURL.replace('/api/player', ''), { upgrade: false, transports: ['websocket'] });
    }

    restart(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.disconnect();
            this.playerURL = this.configService.getAPIEndpoint() + '/api/player';
            this.serveStatsURL = this.configService.getAPIEndpoint() + '/api/player/stats';
            this.socket = io(this.playerURL.replace('/api/player', ''), { upgrade: false, transports: ['websocket'] });
            observer.next();
        });
    }

    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('CLIENT_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return new Observable<any>(observer => {
            this.socket.on('PLAYER_MESSAGE', msg => {
                observer.next(msg);
            });
            this.socket.on('disconnect', () => {
                this.socket.removeAllListeners();
            });
            this.socket.off('PLAYER_MESSAGE', this.onNewMessage);
        });
    }

    get(player: string): Observable<any> {
        const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
        const options = { headers };
        return this.http.get(this.playerURL + '/' + player, options);
    }

    getStats(): Observable<any> {
        const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
        const options = { headers };
        return this.http.get(this.serveStatsURL, options);
    }

    setVolume(upOrDown: IVolume): Observable<any> {
        return this.http.get(this.playerURL + '/volume/' + upOrDown.volume);
    }

    update(player: any, videoId): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers };
        return this.http.put(this.playerURL + '/stats/update/' + videoId, player, options);
    }

    play(id: string): Observable<any> {
        return this.http.get(this.playerURL + '/' + id + '/play');
    }

    playAll(): Observable<any> {
        return this.http.get(this.playerURL + '/playall');
    }

    // Toggles playlist mode
    playList(): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers };
        return this.http.patch(this.playerURL + '/playlist', options);
    }

    playPrev(): Observable<any> {
        return this.http.get(this.playerURL + '/prev');
    }

    playNext(): Observable<any> {
        return this.http.get(this.playerURL + '/next');
    }

    stopAll(): Observable<any> {
        return this.http.get(this.playerURL + '/stop');
    }

    pause(): Observable<any> {
        return this.http.get(this.playerURL + '/pause');
    }

    volume(volume: any): Observable<any> {
        return this.http.get(this.playerURL + '/volume/' + volume);
    }

}
