import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { ENV } from '@app/env';

@Injectable({
    providedIn: 'root'
})
export class ExtrasService {

    private socket: SocketIOClient.Socket;
    private API = `${ENV.apiURL}/browser`;

    constructor(
        private http: HttpClient
    ) {
        this.socket = io(ENV.apiURL.replace('/api', ''));
    }

    sendURL(url) {
        return this.http.post(this.API, { url });
    }

    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('URL_SHARE_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return new Observable<any>(observer => {
            this.socket.on('URL_SHARE_MESSAGE', msg => {
                observer.next(msg);
            });
            this.socket.on('disconnect', () => {
                this.socket.removeAllListeners();
            });
            this.socket.off('URL_SHARE_MESSAGE', this.onNewMessage);
        });
    }
}
