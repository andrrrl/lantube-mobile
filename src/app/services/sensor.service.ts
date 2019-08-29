import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from './config.services';
import * as io from 'socket.io-client';
import { SocketEvent } from '../enums/socketio-events';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class SensorService {

    private sensorURL: string;
    private socket: SocketIOClient.Socket;

    constructor(
        private http: Http,
        public configService: ConfigService) {
        this.sensorURL = this.configService.getAPIEndpoint() + '/api/sensor';
        this.socket = io(this.sensorURL.replace('/api/sensor', ''));
    }


    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('SENSOR_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return Observable.create((observer, error) => {
            this.socket.on('SENSOR_MESSAGE', msg => {
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

    get(sensor: string): Observable<any> {
        console.log({ sensor });
        return this.http.get(this.sensorURL + '/' + sensor).map(this.extractData).catch(this.handleError);
    }

}
