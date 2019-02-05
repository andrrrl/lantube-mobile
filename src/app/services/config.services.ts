import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

    constructor() { }

    setAPIEndpoint(ip) {
        return localStorage.setItem('ip', ip);
    }

    getAPIEndpoint() {
        return localStorage.getItem('ip') || environment.API;
    }

    delAPIEndpoint() {
        return localStorage.removeItem('ip');
    }

}
