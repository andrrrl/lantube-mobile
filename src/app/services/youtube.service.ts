import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

  constructor(private http: Http) { }

  private API = environment.API;

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
