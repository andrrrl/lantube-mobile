import { ICoreTemperature } from '../interfaces/ICoreTemperature';
import { iif, Observable } from 'rxjs';
import { SensorService } from './../services/sensor.service';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {

    coreTempSensor$: Observable<ICoreTemperature>;
    roomTempSensor$: Observable<any>;
    connected = false;

    constructor(
        private sensorService: SensorService
    ) { }

    ngOnInit() {

        // Core temperature (http GET)
        console.log('Core temperature');
        this.coreTempSensor$ = this.sensorService.get('coreTemp');
        this.roomTempSensor$ = this.sensorService.get('roomTemp');

        // Socket
        this.sensorService.onNewMessage().pipe(
            tap(temp => {
                // Core or Room temperature?
                iif(() => temp.type === 'core', this.coreTempSensor$, this.roomTempSensor$);
            })
        );

    }

    coreTempColor(temp) {
        if (temp.value < temp.coolTempLimit) {
            return 'success';
        } else if (temp.value > temp.dangerTempLimit) {
            return 'warning';
        } else if (temp.value > temp.coolTempLimit) {
            return 'danger';
        } else {
            return 'dark';
        }
    }

    roomTempColor(temp) {
        if (temp.value < temp.coolTempLimit) {
            return 'success';
        } else if (temp.value > temp.dangerTempLimit) {
            return 'warning';
        } else if (temp.value > temp.coolTempLimit) {
            return 'danger';
        } else {
            return 'dark';
        }
    }

}
