import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { MainComponent } from './main.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';

import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';


import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { LiveDetectionComponent } from './live-detection/live-detection.component';
import { LivePieChartComponent } from './live-detection/back-side/live-pie-chart.component';
import { LiveUpdateChartComponent } from './live-detection/front-side/live-update-chart.component';
import { LiveCardFrontComponent } from './live-detection/front-side/live-card-front.component';
import { LiveCardBackComponent } from './live-detection/back-side/live-card-back.component';
import { SmartTableComponent } from './smart-table/smart-table.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToolTipRowComponent } from './tool-tip-row/tool-tip-row.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    MainComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,

    StatsCardBackComponent,
    SmartTableComponent,

    LiveDetectionComponent,
    LiveCardFrontComponent,
    LiveCardBackComponent,
    LivePieChartComponent,
    LiveUpdateChartComponent,
    ToolTipRowComponent,
  ],
  entryComponents: [ToolTipRowComponent]

})
export class MainModule { }
