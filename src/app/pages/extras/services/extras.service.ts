import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '@app/env';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

    private API = `${ENV.apiURL}/browser`;

        this.socket = io(ENV.apiURL.replace('/api', ''));
}
