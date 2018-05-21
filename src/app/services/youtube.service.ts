import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class YoutubeService {

    private API: string;

    constructor(
        private http: HttpClient,
        private configService: ConfigService) {
        this.API = this.configService.getAPIEndpoint();
    }

    search(term: string): Observable<any> {
        return this.http.get(this.API + '/api/videos/search/' + encodeURIComponent(term));
    }


}
