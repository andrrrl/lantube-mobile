import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ConfigService } from './config.services';

@Injectable()
export class YoutubeService {
  private api: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.api = this.configService.getApiEndpoint();
  }

  search(term: string): Observable<any> {
    return this.http
      .get(this.api + '/api/videos/search/' + encodeURIComponent(term))
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  private extractData(res: Response) {
    return res;
  }

  private handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
