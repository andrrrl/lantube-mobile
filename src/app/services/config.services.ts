import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {

    APIUrl = new BehaviorSubject<any>(null);
    APIPort = new BehaviorSubject<any>(null);

    constructor() { }

    setAPIEndpoint(ip = 'http://localhost', port = 3000) {
        const url = ip;
        this.APIUrl.next({ url, port });
        localStorage.setItem('url', url);
        localStorage.setItem('port', String(port));
        return `${url}:${port}`;
    }

    getAPIUrl() {
        const url = localStorage.getItem('url') || this.APIUrl.getValue();
        return url;

    }
    getAPIEndpoint() {
        const url = localStorage.getItem('url') || this.APIUrl.getValue();
        const port = localStorage.getItem('port') || this.APIPort.getValue();
        return `${url}:${port}`;
    }

    delAPIEndpoint() {
        this.APIUrl.next(null);
        this.APIPort.next(null);
        localStorage.removeItem('url');
        localStorage.removeItem('port');
    }

    async autoConnect() {
        if (!this.getAPIEndpoint()) {
            if (window.location.hostname.indexOf('http') > -1) {
                const result = await this.setAPIEndpoint(window.location.hostname, 3000);
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
