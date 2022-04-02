import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from './config.services';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  private serveStatsURL: string;

  constructor(
    private http: Http,
    public configService: ConfigService) {
    this.serveStatsURL = this.configService.getAPIEndpoint() + '/api/player/stats';
  }

  extractData(res: Response) {
    return res.json();
  }

  get(): Observable<any> {
    return this.http.get(this.serveStatsURL).map(this.extractData);
  }

}
