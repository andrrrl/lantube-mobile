import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ConfigService } from './config.services';

@Injectable()
export class VideosService {
  private api: string;
  private socket: Socket;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.api = this.configService.getApiEndpoint();
    this.socket = io(this.api);
  }

  extractData(res: Response) {
    return res;
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('VIDEOS_MESSAGE', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    return Observable.create((observer) => {
      this.socket.on('VIDEOS_MESSAGE', (msg) => {
        observer.next(msg);
      });
    });
  }

  get(params: any): Observable<any> {
    return this.http.get(this.api + '/api/videos').pipe(map(this.extractData));
  }

  getById(id: string): Observable<any> {
    return this.http
      .get(this.api + '/api/videos/' + id)
      .pipe(map(this.extractData));
  }

  add(video: any): Observable<any> {
    return this.http
      .get(this.api + '/api/videos/add/' + video)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  put(video: any): Observable<any> {
    return video;
  }

  delete(videoId: string): Observable<any> {
    return this.http
      .delete(this.api + '/api/videos/delete/' + videoId)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  reorder(videoId: string, swap: boolean): Observable<any> {
    // const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    // let options = new HttpRequest({ headers: cpHeaders });
    return this.http
      .post(this.api + '/api/', swap)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  private handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
