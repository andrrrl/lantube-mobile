import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../app/services/config.services';
import { SensorService } from '../../app/services/sensor.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.html',
  // styleUrls: ['./temperature.scss']
})
export class TemperatureComponent implements OnInit {
  @Input() core: any = {};
  @Input() dht: any = {};
  @Input() ds18b20: any = {};

  sensorOK = false;

  constructor(
    public configService: ConfigService,
    public sensorService: SensorService
  ) {}

  get dhtHumedad() {
    return this.dht && this.dht.humedad && this.dht.humedad.value;
  }

  get dhtTemperatura() {
    return this.dht && this.dht.temperatura && this.dht.temperatura.value;
  }

  get ds18b20Temperatura() {
    return (
      this.ds18b20 && this.ds18b20.temperatura && this.ds18b20.temperatura.value
    );
  }

  ngOnInit(): void {
    if (!this.sensorOK) {
      this.getSensorStats();
    }

    setTimeout(() => {
      this.configService.autoConnect();
    }, 500);

    // this.sensorService.onNewMessage().subscribe(stats => {
    //     console.log(stats);
    //     if (stats) {
    //         this.dht = JSON.parse(JSON.stringify(stats));
    //     }
    //     if (stats.sensor === 'core') {
    //         this.core = JSON.parse(JSON.stringify(stats));
    //     }
    //     if (stats.sensor === 'DS18B20') {
    //         this.ds18b20 = JSON.parse(JSON.stringify(stats));
    //     }
    // });
  }

  getSensorStats() {
    if (!this.sensorOK) {
      // this.sensorService.get('dht').subscribe(stats => {
      //     console.log('1', stats);

      //     this.sensorOK = true;
      // });
      this.sensorService.get('ds18b20').subscribe((stats) => {
        console.log('2', stats);

        this.sensorOK = true;
      });
      this.sensorService.get('coreTemp').subscribe((stats) => {
        console.log('3', stats);

        this.sensorOK = true;
      });
    }
  }

  coreTempStatus() {
    return this.core.temperature.value > this.core.dangerTempLimit
      ? 'danger'
      : 'cool';
  }

  roomTempStatus() {
    return this.ds18b20.temperature.value >
      this.ds18b20.temperature.dangerTempLimit
      ? 'danger'
      : 'cool';
  }
}
