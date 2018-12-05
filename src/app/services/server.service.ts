import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ServerService {

  // private serveStatsURL = location.href.includes('172.16') ? environment.API : (location.href.includes('192.168.4') ? environment.API_WIFI_CASA : environment.API_WIFI) + '/api/player/stats';
  private serveStatsURL = environment.API_CASA ? environment.API_WIFI_CASA + '/api/player/stats' : (location.href.includes('172.16') ? environment.API : (location.href.includes('192.168.4') ? environment.API_WIFI_CASA : environment.API_WIFI)) + '/api/player/stats';


  constructor(private http: Http) { }

  extractData(res: Response) {
    return res.json();
  }

  get(): Observable<any> {
    console.log(this.serveStatsURL);
    return this.http.get(this.serveStatsURL).map(this.extractData);
  }

  update(stats: any): Observable<any> {
    return this.http.put(this.serveStatsURL, stats).map(this.extractData);
  }

}
