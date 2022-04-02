import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from './config.services';

@Injectable()
export class ServerService {
  private serveStatsURL: string;

  constructor(private http: HttpClient, public configService: ConfigService) {
    this.serveStatsURL =
      this.configService.getApiEndpoint() + '/api/player/stats';
  }

  extractData(res: Response) {
    return res;
  }

  get(): Observable<any> {
    return this.http.get(this.serveStatsURL).pipe(map(this.extractData));
  }
}
