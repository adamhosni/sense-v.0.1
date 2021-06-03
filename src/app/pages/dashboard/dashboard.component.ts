import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { grpc } from '@improbable-eng/grpc-web';
import { NbThemeService } from '@nebular/theme';
import { DeviceSettingsService } from 'app/@core/mock/grpc/device-settings.service';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { DetectionComponent } from './detection/detection.component';


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
export class DashboardComponent implements OnDestroy, OnInit, AfterViewInit {

  // @ViewChildren (DetectionComponent) detectionC;

  private alive = true;

  authjwt:any;
  deviceInfo : any;
  ReqAgain : any ;

  deviceIp;

  cputemp: number;
  cpuperf: number;
  internaltemp: number;
  externaltemp: number;
  ramusage: number;

  solarValue: number;

  cpuTempCard: CardSettings = {
    title: 'CPU Temperature',
    iconClass: 'nb-sunny-circled',
    type: 'primary',
    value: '-- °C',
  };
  cpuPerfCard: CardSettings = {
    title: 'CPU Performance',
    iconClass: 'nb-bar-chart',
    type: 'success',
    value: '-- %',
  };
  memUsaCard: CardSettings = {
    title: 'Memory Usage',
    iconClass: 'nb-roller-shades',
    type: 'info',
    value: '-- %',
  };
  intTempCard: CardSettings = {
    title: 'Internal Temp',
    iconClass: 'nb-grid-a',
    type: 'warning',
    value: '-- °C',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.cpuTempCard,
    this.cpuPerfCard,
    this.memUsaCard,
    this.intTempCard,
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
        ...this.intTempCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private deviceSettingsService : DeviceSettingsService,
              private activatedRoute: ActivatedRoute) {

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
  }

  ngOnInit(){

    this.deviceIp = this.activatedRoute.snapshot.params.deviceIp;
    let tokenSense = localStorage.getItem('token_sense' + this.deviceIp);
      const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+tokenSense];
      this.ReqAgain = setInterval(() => {
        this.getDeviceDiagnostics(auth, this.deviceIp);
        // console.log(this.detectionC.nBTdevice);

        }, 10000);

  }
  ngAfterViewInit(){
    // let a = this.detectionC.last.nBTdevice
    // console.log(a);

  }
  getDeviceDiagnostics( auth, ip: string ){


      this.deviceSettingsService.getDeviceDiagnostics(auth, ip).then(response => {

        this.deviceInfo = response;
        this.cpuperf = this.deviceInfo.cpuperf;
        this.cputemp = this.deviceInfo.cputemp;
        this.internaltemp = this.deviceInfo.internaltemp;
        this.ramusage = this.deviceInfo.ramusage;

        this.cpuTempCard.value = this.cputemp+' °C' ;
        this.cpuPerfCard.value = this.cpuperf.toFixed(2) +' %';
        this.memUsaCard.value = this.ramusage.toFixed(2) +' %';
        this.intTempCard.value = (this.internaltemp / 1000).toFixed(2) +' °C';
      });

  }
  ngOnDestroy() {
    this.alive = false;
    clearInterval(this.ReqAgain);
  }

}
