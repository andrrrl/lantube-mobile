import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volume } from '../interfaces/volume.interface';
import { Socket, io } from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlayerStats } from '../interfaces/player-stats.interface';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private playerURL: string;
  private socket!: Socket;
  private serveStatsURL: string;

  constructor(private http: HttpClient) {
    this.playerURL = '/api/player';
    this.serveStatsURL = '/api/player/stats';
    this.socket = io('/', {
      upgrade: false,
      transports: ['websocket'],
    });
  }

  restart(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.disconnect();
      this.playerURL = '/api/player';
      this.serveStatsURL = '/api/player/stats';
      this.socket = io('/', {
        upgrade: false,
        transports: ['websocket'],
      });
      observer.next();
    });
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('CLIENT_MESSAGE', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    return new Observable<any>((observer) => {
      this.socket.on('PLAYER_MESSAGE', (msg) => {
        observer.next(msg);
      });
      this.socket.on('disconnect', () => {
        this.socket.removeAllListeners();
      });
      this.socket.off('PLAYER_MESSAGE', this.onNewMessage);
    });
  }

  get(player: string): Observable<any> {
    return this.http.get(this.playerURL + '/' + player);
  }

  getStats(): Observable<PlayerStats> {
    return this.http.get<PlayerStats>(this.serveStatsURL);
  }

  setVolume(upOrDown: Volume): Observable<any> {
    return this.http.get(this.playerURL + '/volume/' + upOrDown.volume);
  }

  update(player: any, videoId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.put(
      this.playerURL + '/stats/update/' + videoId,
      player,
      options
    );
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
