import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVolume } from '../interfaces/IVolume.interface';
import { ConfigService } from './config.services';
import { io, Socket } from 'socket.io-client';
import { catchError, debounceTime, take } from 'rxjs/operators';

import { SocketEvent } from '../enums/socketio-events';
import { IPlayerStats } from '../interfaces/IPlayerStats';

@Injectable()
export class PlayerService {
  private playerURL: string;
  private io: Socket;

  constructor(private http: HttpClient, public configService: ConfigService) {
    this.playerURL = this.configService.getApiEndpoint() + '/api/player';
    this.io = io(this.playerURL.replace('/api/player', ''));
  }

  get(player: string): Observable<any> {
    return this.http
      .get(this.playerURL + '/' + player)
      .pipe(take(1), catchError(this.handleError));
  }

  // EMITTER
  sendMessage(msg: string) {
    this.io.emit('PLAYER_MESSAGE', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    return new Observable((observer) => {
      console.log('onNewMessage', { observer });

      this.io.on('PLAYER_MESSAGE', (msg: IPlayerStats) => {
        console.log({ msg });

        observer.next(msg);
      });
    });
  }

  public onEvent(event: SocketEvent): Observable<any> {
    return new Observable<Event>((observer) => {
      console.log('onEvent', { observer });
      this.io.on(String(event), () => {
        observer.next();
      });
    });
  }

  setVolume(upOrDown: IVolume): Observable<any> {
    return this.http
      .get(this.playerURL + '/volume/' + upOrDown)
      .pipe(take(1), debounceTime(200), catchError(this.handleError));
  }

  update(player: any, videoId): Observable<any> {
    // const cpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .put(this.playerURL + '/stats/update/' + videoId, player, {
        // headers: cpHeaders,
      })
      .pipe(take(1), catchError(this.handleError));
  }

  play(id: string) {
    return this.http
      .get(this.playerURL + '/' + id + '/play')
      .pipe(take(1), catchError(this.handleError));
  }

  playAll() {
    return this.http
      .get(this.playerURL + '/playall')
      .pipe(take(1), catchError(this.handleError));
  }

  // Toggles playlist mode
  playList() {
    return this.http
      .patch(this.playerURL + '/playlist', {})
      .pipe(take(1), catchError(this.handleError));
  }

  playPrev() {
    return this.http
      .get(this.playerURL + '/prev')
      .pipe(take(1), catchError(this.handleError));
  }

  playNext() {
    return this.http
      .get(this.playerURL + '/next')
      .pipe(take(1), catchError(this.handleError));
  }

  stopAll() {
    return this.http
      .get(this.playerURL + '/stop')
      .pipe(take(1), catchError(this.handleError));
  }

  pause() {
    return this.http
      .get(this.playerURL + '/pause')
      .pipe(take(1), catchError(this.handleError));
  }

  volume(volume: any) {
    return this.http
      .get(this.playerURL + '/volume/' + volume)
      .pipe(take(1), catchError(this.handleError));
  }

  private handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    return errMsg;
  }
}
