import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class VideosService {

    private API = environment.API;

    constructor(private http: Http) { }

    extractData(res: Response) {
        return res.json();
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
        return this.http.get(this.API + '/api/player/playlist').map(this.extractData);
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
