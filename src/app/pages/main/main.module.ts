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
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';

// import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
// import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
// import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
// import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
// import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
// import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';


import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { LiveDetectionComponent } from './live-detection/live-detection.component';
import { LivePieChartComponent } from './live-detection/back-side/live-pie-chart.component';
import { LiveUpdateChartComponent } from './live-detection/front-side/live-update-chart.component';
import { LiveCardFrontComponent } from './live-detection/front-side/live-card-front.component';
import { LiveCardBackComponent } from './live-detection/back-side/live-card-back.component';

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
  ],
  declarations: [
    MainComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    // TrafficRevealCardComponent,
    // TrafficBarChartComponent,
    // TrafficFrontCardComponent,
    // TrafficBackCardComponent,
    // TrafficBarComponent,
    // TrafficCardsHeaderComponent,
    LiveDetectionComponent,
    LiveCardFrontComponent,
    LiveCardBackComponent,
    LivePieChartComponent,
    LiveUpdateChartComponent,
  ],
  // providers: [
  //   CountryOrdersMapService,
  // ],
})
export class MainModule { }