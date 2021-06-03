import {  Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { grpc } from '@improbable-eng/grpc-web';
import { DeviceSettingsService } from 'app/@core/mock/grpc/device-settings.service';
import { ActivatedRoute } from '@angular/router';
import { TemperatureHumidityService } from 'app/@core/mock/temperature-humidity.service';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy, OnInit {


  deviceInfo : any;

  internaltemp : number;
  externaltemp : number;
  humiditylvl : number;
  exthumidity : number;



  private alive = true;

  temperatureData: Temperature;
  temperature: number;
  temperatureOff = true;
  temperatureMode = 'cool';

  humidityData: Temperature;
  humidity: number;
  humidityOff = true;
  humidityMode = 'heat';

  theme: any;
  themeSubscription: any;

  deviceIp;

  constructor(private themeService: NbThemeService,
              private activatedRoute: ActivatedRoute,
              private temperatureHumidityService: TemperatureHumidityService, private deviceSettingsService : DeviceSettingsService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
      this.theme = config.variables.temperature;
    });

    forkJoin(
      [this.temperatureHumidityService.getTemperatureData(),
      this.temperatureHumidityService.getHumidityData(),]
    )
      .subscribe(([temperatureData, humidityData]: [Temperature, Temperature]) => {
        this.temperatureData = temperatureData;
        this.humidityData = humidityData;

      });

  }
  ngOnInit(){

    this.deviceIp = this.activatedRoute.snapshot.params.deviceIp;
    let tokenSense = localStorage.getItem('token_sense' + this.deviceIp);
      const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+tokenSense];

      this.GetDeviceDiagnostics( auth, this.deviceIp );

  }


  GetDeviceDiagnostics( auth, ip: string ){

      this.deviceSettingsService.getDeviceDiagnostics(auth, ip).then(response => {

        this.deviceInfo = response;
        this.temperature = this.deviceInfo.externaltemp;
        this.temperatureOff = false;

        this.humidity = this.deviceInfo.exthumidity;
        this.humidityOff = false;
        this.humiditylvl = this.deviceInfo.humiditylvl;

      });

  }
  ngOnDestroy() {
    this.alive = false;
  }
}
