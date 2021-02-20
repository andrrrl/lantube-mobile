import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/compiler/src/core';
import { ExtrasService } from '../services/extras.service';

@Component({
    selector: 'app-external-browser',
    templateUrl: './external-browser.component.html',
    styleUrls: ['./external-browser.component.scss'],
})
export class ExternalBrowserComponent implements OnInit {

    server: any;

    constructor(private sanitizer: DomSanitizer, private extrasService: ExtrasService) { }

    ngOnInit() {
    }

    sendURL(url) {
        const sanitizedURL = this.sanitizer.sanitize(SecurityContext.URL, url);
        this.extrasService.shareURL(sanitizedURL, {});
    }

}
