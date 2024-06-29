import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({ providedIn: 'root' })
export class ServerService {

  private serveStatsURL: string;

  constructor(
    private http: HttpClient) {
    this.serveStatsURL = '/api/player/stats';
  }

  get(): Observable<any> {
    return this.http.get(this.serveStatsURL);
  }

}
