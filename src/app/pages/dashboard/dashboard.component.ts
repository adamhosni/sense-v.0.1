import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { NbThemeService } from '@nebular/theme';
import { DataQueryService } from 'app/@core/mock/grpc/data-query.service';
import { DeviceSettingsService } from 'app/@core/mock/grpc/device-settings.service';
import { IamService } from 'app/@core/mock/grpc/iam.service';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  value: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy, AfterViewInit {

  private alive = true;

  authjwt:any;
  deviceInfo : any;
  ReqAgain : any ;

  cputemp:any;
  cpuperf : any;
  internaltemp : any;
  externaltemp : number;
  humiditylvl : any;
  exthumidity : any;
  hddusage : any;
  ramusage : any;

  solarValue: number;
  cpuTempCard: CardSettings = {
    title: 'CPU temperature',
    iconClass: 'nb-sunny-circled',
    type: 'primary',
    value: '-- °C',
  };
  cpuPerfCard: CardSettings = {
    title: 'CPU performance',
    iconClass: 'nb-bar-chart',
    type: 'success',
    value: '-- %',
  };
  memUsaCard: CardSettings = {
    title: 'Memory usage',
    iconClass: 'nb-roller-shades',
    type: 'info',
    value: '-- %',
  };
  harDisCard: CardSettings = {
    title: 'Hard disk',
    iconClass: 'nb-grid-a',
    type: 'warning',
    value: '-- %',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.cpuTempCard,
    this.cpuPerfCard,
    this.memUsaCard,
    this.harDisCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.cpuTempCard,
        type: 'warning',
      },
      {
        ...this.cpuPerfCard,
        type: 'primary',
      },
      {
        ...this.memUsaCard,
        type: 'danger',
      },
      {
        ...this.harDisCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private iamService: IamService, private deviceSettingsService : DeviceSettingsService,
    private daraQueryService: DataQueryService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });

      this.logIn();console.log(this.cputemp);
  }

  ngAfterViewInit(){
    
    
    
    // this.logIn();
    // console.log(this.authjwt);
    
    
  }
  ngOnDestroy() {
    this.alive = false;
    clearInterval(this.ReqAgain);
  }


  GetDeviceInfo(){
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.deviceSettingsService.getDeviceInfo(auth).then(response => {
        //console.log(response);
       // this.deviceInfo = response;    
      });
  
  }
  
  GetDeviceDiagnostics(): any{
    // console.log('ttt');
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.deviceSettingsService.getDeviceDiagnostics(auth).then(response => {
        console.log(response);
        this.deviceInfo = response;
        this.cpuperf = this.deviceInfo.cpuperf;
        this.cputemp = this.deviceInfo.cputemp;
        this.internaltemp = this.deviceInfo.internaltemp;
        this.externaltemp = this.deviceInfo.externaltemp;
        this.exthumidity = this.deviceInfo.exthumidity;
        this.hddusage = this.deviceInfo.hddusage;
        this.humiditylvl = this.deviceInfo.humiditylvl;
        this.internaltemp = this.deviceInfo.internaltemp;
        this.ramusage = this.deviceInfo.ramusage;

        this.cpuTempCard.value = this.cputemp+' °C' ;
        this.cpuPerfCard.value = this.cpuperf.toFixed(2) +' %';
        this.memUsaCard.value = this.ramusage.toFixed(2) +' %';
        this.harDisCard.value = this.hddusage +' %';
      });
  
  }
  
  getAp(){
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.daraQueryService.getAP(auth);
       // console.log(response);
       // this.deviceInfo = response;    
  
  
  }
  
    logIn(): any{
  
      const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Basic c2Vuc2U6R01HZ3BHZz0='];
  
       this.iamService.authenticate(auth).then(response => {
        // console.log(response);
         this.authjwt = response;
        // this.GetDeviceInfo();
        this.GetDeviceDiagnostics();
        this.ReqAgain = setInterval(() => {this.GetDeviceDiagnostics(); 
          // console.log(auth);
          }, 6000);

        // this.getAp();
        
        //return response;      
      });
    }
    
}
