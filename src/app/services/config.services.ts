import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConfigService {
  apiUrl = new BehaviorSubject<any>(null);
  apiPort = new BehaviorSubject<any>(null);

  constructor() {}

  setApiEndpoint(ip = 'http://localhost', port = 3000) {
    const url = ip;
    this.apiUrl.next({ url, port });
    localStorage.setItem('url', url);
    localStorage.setItem('port', String(port));
    return `${url}:${port}`;
  }

  getApiUrl() {
    const url = localStorage.getItem('url') || this.apiUrl.getValue();
    return url;
  }
  getApiEndpoint() {
    const url = localStorage.getItem('url') || this.apiUrl.getValue();
    const port = localStorage.getItem('port') || this.apiPort.getValue();
    return `${url}:${port}`;
  }

  delAPIEndpoint() {
    this.apiUrl.next(null);
    this.apiPort.next(null);
    localStorage.removeItem('url');
    localStorage.removeItem('port');
  }

  async autoConnect() {
    if (!this.getApiEndpoint()) {
      if (window.location.hostname.indexOf('http') > -1) {
        const result = await this.setApiEndpoint(
          window.location.hostname,
          3000
        );
        if (result) {
          return true;
        } else {
          return null;
        }
      }
    } else {
      return true;
    }
  }
}
