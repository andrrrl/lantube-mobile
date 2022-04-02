import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { catchError, map } from 'rxjs/operators';

import { SocketEvent } from '../enums/socketio-events';
import { ConfigService } from './config.services';

@Injectable()
export class SensorService {
  private sensorURL: string;
  private socket: Socket;

  constructor(private http: HttpClient, public configService: ConfigService) {
    this.sensorURL = this.configService.getApiEndpoint() + '/api/sensor';
    this.socket = io(this.sensorURL.replace('/api/sensor', ''));
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('SENSOR_MESSAGE', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    return Observable.create((observer, error) => {
      this.socket.on('SENSOR_MESSAGE', (msg) => {
        observer.next(msg);
      });
    });
  }

  public onEvent(event: SocketEvent): Observable<any> {
    return new Observable<Event>((observer) => {
      this.socket.on(String(event), () => {
        observer.next();
      });
    });
  }

  extractData(res: Response) {
    return res;
  }

  get(sensor: string): Observable<any> {
    return this.http
      .get(this.sensorURL + '/' + sensor)
      .pipe(map(this.extractData), catchError(this.handleError));
  }
  private handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    return Observable.throw(errMsg);
  }
}
