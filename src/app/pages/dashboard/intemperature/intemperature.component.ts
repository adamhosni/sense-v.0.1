import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Electricity, ElectricityChart, ElectricityData } from '../../../@core/data/internal-temperature';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { DeviceSettingsService } from 'app/@core/mock/grpc/device-settings.service';
import { IamService } from 'app/@core/mock/grpc/iam.service';
import { grpc } from '@improbable-eng/grpc-web';

@Component({
  selector: 'ngx-intemperature',
  styleUrls: ['./intemperature.component.scss'],
  templateUrl: './intemperature.component.html',
})
export class InternalTemperatureComponent implements OnDestroy {

  authjwt:any[] = [];
  deviceInfo : any;
  internaltemp : any;
  
  private alive = true;

  listData: Electricity[];
  chartData: ElectricityChart[];
  currentintemp: any[];

  type = 'today';
  types = ['today', 'yesterday'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private electricityService: ElectricityData,
              private themeService: NbThemeService,
              private iamService: IamService, private deviceSettingsService : DeviceSettingsService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    forkJoin(

      this.electricityService.getListData(),
      this.electricityService.getChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([listData, chartData]: [Electricity[], ElectricityChart[]] ) => {
        this.listData = listData;
        this.chartData = chartData;
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

      //return response;      
    });
  }
  GetDeviceDiagnostics(){
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.deviceSettingsService.getDeviceDiagnostics(auth).then(response => {
        console.log(response);
        this.deviceInfo = response;
        this.internaltemp = this.deviceInfo.internaltemp;
        this.electricityService.addChartPoint(this.internaltemp);
        console.log(this.internaltemp);
        
      });
    }

  ngOnDestroy() {
    this.alive = false;
  }
}
