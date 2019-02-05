import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from './config.services';
import { Headers } from '@angular/http'
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';

@Injectable()
export class VideosService {

    private API: string;
    private socket: SocketIOClient.Socket;

    constructor(
        private http: Http,
        private configService: ConfigService) {
        this.API = this.configService.getAPIEndpoint();
        this.socket = io(this.API);
    }

    extractData(res: Response) {
        return res.json();
    }

    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('VIDEOS_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return Observable.create(observer => {
            this.socket.on('VIDEOS_MESSAGE', msg => {
                observer.next(msg);
            });
        });
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    get(params: any): Observable<any[]> {
        return this.http.get(this.API + '/api/videos', params).map(this.extractData);
    }

    getById(id: string): Observable<any> {
        return this.http.get(this.API + '/api/videos/' + id).map(this.extractData);
    }

    add(video: any): Observable<any> {
        return this.http.get(this.API + '/api/videos/add/' + video).map(this.extractData).catch(this.handleError);
    }

    put(video: any): Observable<any> {
        return video;
    }

    delete(videoId: string): Observable<any> {
        return this.http.delete(this.API + '/api/videos/delete/' + videoId)
            .map(this.extractData)
            .catch(this.handleError);
    }


    reorder(videoId: string, swap: boolean): Observable<any> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.API + '/api/', swap, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
