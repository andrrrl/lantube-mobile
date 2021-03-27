import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExtrasService } from '../services/extras.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-external-browser',
    templateUrl: './external-browser.component.html',
    styleUrls: ['./external-browser.component.scss'],
})
export class ExternalBrowserComponent implements OnInit {

    server: any;
    url: URL;
    urlPattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;
    invalidForm = true;

    // Form Model
    form: FormGroup = new FormGroup({
        url: new FormControl(null, [Validators.required, Validators.pattern(this.urlPattern)]),
        edit: new FormControl({ disabled: this.invalidForm }, Validators.required)
    });

    // 2 Observables
    formStatus$: Observable<string>;
    formChanges$: Observable<any>;

    entryId: number;

    constructor(private sanitizer: DomSanitizer, private extrasService: ExtrasService) { }

    ngOnInit() {

        this.form.get('url').valueChanges.subscribe(u => console.log('URL: ', u));

        this.formChanges$ = this.form.valueChanges.pipe(
            // Lee el valor sólo si el distinto al último
            distinctUntilChanged((a, b) => a === b),
            tap(value => console.log(value)),
            map(v => console.log(v))
        );

        this.formStatus$ = this.form.statusChanges.pipe(
            distinctUntilChanged((a, b) => a === b),
            tap(value => console.log(value)),
            map(status => status.toLowerCase())
        );

        this.extrasService.onNewMessage().subscribe(browserMessage => {
            if (browserMessage.message === 'open') {

            }
        });
    }

    openInBrowser() {
        if (this.form.valid) {
            console.log(this.form);
            const entry = this.form.value;
            const sanitizedURL = this.sanitizer.sanitize(SecurityContext.URL, entry.url);
            this.extrasService.sendURL(sanitizedURL).subscribe(result => {
                console.log(result);
            });
        } else {
            console.log(this.form);
        }
    }


}
