import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from './config.services';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  // private serveStatsURL = location.href.includes('172.16') ? environment.API : (location.href.includes('192.168.4') ? environment.API_WIFI_CASA : environment.API_WIFI) + '/api/player/stats';
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
