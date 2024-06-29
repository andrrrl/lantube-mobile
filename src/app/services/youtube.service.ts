import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class YoutubeService {

    constructor(
        private http: HttpClient) {
    }

    search(term: string): Observable<any> {
        return this.http.get('/api/videos/search/' + encodeURIComponent(term));
    }


}
