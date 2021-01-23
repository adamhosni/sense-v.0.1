import { AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { grpc } from '@improbable-eng/grpc-web';
import { DeviceSettingsService } from 'app/@core/mock/grpc/device-settings.service';
import { IamService } from 'app/@core/mock/grpc/iam.service';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  @Input() aa: number;

  authjwt:any[] = [];
  deviceInfo : any;

  internaltemp : any;
  externaltemp : number = 10;
  humiditylvl : any;
  exthumidity : any;



  private alive = true;

  temperatureData: Temperature;
  temperature: number;
  temperatureOff = false;
  //temperatureMode = 'cool';

  humidityData: Temperature;
  humidity: number;
  humidityOff = false;
  humidityMode = 'heat';

  theme: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private temperatureHumidityService: TemperatureHumidityData,
              private iamService: IamService, private deviceSettingsService : DeviceSettingsService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
      this.theme = config.variables.temperature;
    });

    forkJoin(
      this.temperatureHumidityService.getTemperatureData(),
      this.temperatureHumidityService.getHumidityData(),
    )
      .subscribe(([temperatureData, humidityData]: [Temperature, Temperature]) => {
        this.temperatureData = temperatureData;
        // this.temperature = this.temperatureData.value;

        this.humidityData = humidityData;
        this.humidity = this.humidityData.value;
        // this.temperature = this.aa;
      });
      
      
      this.logIn()
      
  }


  logIn(): any{
  
    const auth = new grpc.Metadata();
    auth.headersMap ["Authorization"] = ['Basic c2Vuc2U6R01HZ3BHZz0='];

     this.iamService.authenticate(auth).then(response => {
      //console.log(response);
      this.authjwt.push(response);


      this.GetDeviceDiagnostics();
      // this.getAp();
      
      //return response;      
    });
  }
  GetDeviceDiagnostics(){
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.deviceSettingsService.getDeviceDiagnostics(auth).then(response => {
        // console.log(response);
        this.deviceInfo = response;
        this.temperature = this.deviceInfo.externaltemp;
        this.humidity = this.deviceInfo.exthumidity;
        this.humiditylvl = this.deviceInfo.humiditylvl;
        this.internaltemp = this.deviceInfo.internaltemp;



      });
  
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
