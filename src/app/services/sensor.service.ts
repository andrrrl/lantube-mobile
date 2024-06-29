import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket, io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SensorService {

    private sensorURL: string;
    private socket: Socket;

    constructor(
        private http: HttpClient) {
        this.sensorURL = '/api/sensor';
        this.socket = io('/', { upgrade: false, transports: ['websocket'] });
    }

    get isIotEnabled() {
      return environment.iot.enabled;
    }

    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('CLIENT_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return new Observable<any>(observer => {
            this.socket.on('SENSOR_MESSAGE', msg => {
                observer.next(msg);
            });
            this.socket.on('disconnect', () => {
                this.socket.removeAllListeners();
            });
            this.socket.off('SENSOR_MESSAGE', this.onNewMessage);
        });
    }

    get(sensor: string): Observable<any> {
        console.log('sensor', sensor);
        return this.http.get(this.sensorURL + '/' + sensor);
    }

}
