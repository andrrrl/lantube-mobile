import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

@Injectable()
export class VideosService {

    private API = location.href.includes('172.16') ? environment.API : environment.API_WIFI;
    private socket: SocketIOClient.Socket;

    constructor(private http: Http) {
        this.socket = io(this.API);
    }

    extractData(res: Response) {
        return res.json();
    }

    // EMITTER
    sendMessage(msg: string) {
        this.socket.emit('USER_MESSAGE', { message: msg });
    }

    // HANDLER
    onNewMessage() {
        return Observable.create(observer => {
            this.socket.on('USER_MESSAGE', msg => {
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

    play(id: String): Observable<any[]> {
        return this.http.get(this.API + '/api/player/' + id + '/play').map(this.extractData);
    }

    playAll(): Observable<any[]> {
        return this.http.get(this.API + '/api/player/playall').map(this.extractData).catch(this.handleError);
    }

    playPause(): Observable<any[]> {
        return this.http.get(this.API + '/api/player/playlist').map(this.extractData);
    }

    playPrev(): Observable<any[]> {
        return this.http.get(this.API + '/api/player/prev').map(this.extractData);
    }
    playNext(): Observable<any[]> {
        return this.http.get(this.API + '/api/player/next').map(this.extractData);
    }

    stopAll(): Observable<any[]> {
        return this.http.get(this.API + '/api/player/stop').map(this.extractData);
    }

    pause(): Observable<any[]> {
        return this.http.get(this.API + '/api/player/pause').map(this.extractData);
    }

    volume(volume: any): Observable<any[]> {
        return this.http.get(this.API + '/api/player/volume/' + volume).map(this.extractData);
    }

    // save(data: any): Observable<any> {
    //     let headers = new Headers({
    //         'Content-Type': 'application/json'
    //     });
    //     let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Json, method: RequestMethod.Post });
    //     return this.http.post(this.API + '/api/videos/add', data, options).map(this.extractData).catch(this.handleError);
    // }

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
}
