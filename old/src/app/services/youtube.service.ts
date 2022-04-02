import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.services';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

    private API: string;

    constructor(
        private http: Http,
        private configService: ConfigService) {
        this.API = this.configService.getAPIEndpoint();
    }

    search(term: string): Observable<any> {
        return this.http.get(this.API + '/api/videos/search/' + encodeURIComponent(term)).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
