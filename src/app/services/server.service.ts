import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class ServerService {

  private serveStatsURL: string;

  constructor(
    private http: HttpClient,
    public configService: ConfigService) {
    this.serveStatsURL = this.configService.getAPIEndpoint() + '/api/player/stats';
  }

  get(): Observable<any> {
    return this.http.get(this.serveStatsURL);
  }

}
