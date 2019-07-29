import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConfigService {

    APIEndpoint = new BehaviorSubject<any>(null);

    constructor() { }

    setAPIEndpoint(ip, port) {
        const url = `http://${ip}:${port}`;
        this.APIEndpoint.next({ url });
        localStorage.setItem('url', url);
        return url;
    }

    getAPIEndpoint() {
        return localStorage.getItem('url') || this.APIEndpoint.getValue() || null;
    }

    delAPIEndpoint() {
        this.APIEndpoint.next(null);
        localStorage.removeItem('url');
    }

    async autoConnect() {
        if (!this.getAPIEndpoint()) {
            if (window.location.hostname) {
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
