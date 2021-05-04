import { delay } from 'rxjs/operators';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

declare const echarts: any;

@Component({
  selector: 'ngx-advanced',
  styleUrls: ['./advanced.component.scss'],
  template: `
    <nb-card size="tiny" class="solar-card">
      <nb-card-header>Advanced Settings</nb-card-header>
      <nb-card-body>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class = "row">
      <button nbButton outline status="danger">Restart</button>
      <div class="details subtitle-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restart Device (takes 1 min)</div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class = "row">
      <button nbButton outline status="danger">Reset</button>
      <div class="details subtitle-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Factory Reset device (use responsibly)</div>
      </div>

      </nb-card-body>
    </nb-card>
  `,
})

// <div class="info">
//           <div class="h5 value">Restart</div>
//           <div class="details subtitle-2"><span>out of</span> Restart Device (takes 1 min) kWh</div>
//         </div>
export class AdvancedComponent implements AfterViewInit, OnDestroy {

  private value = 0;


  option: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {




  }

  ngOnDestroy() {
    // this.themeSubscription.unsubscribe();
  }
}
