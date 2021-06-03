import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSearchModule,
  NbInputModule,
  NbFormFieldModule,
  NbDatepickerModule,
  NbSpinnerModule,
  NbTooltipModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
// import { InternalTemperatureComponent } from './intemperature/intemperature.component';
// import { ElectricityChartComponent } from './intemperature/electricity-chart/electricity-chart.component';
import { SolarComponent } from './solar/solar.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { DetectionComponent } from './detection/detection.component';
import { DetectionLookUpComponent } from './detection/detection-look-up/detection-look-up.component';
import { AdvancedComponent } from './advanced/advanced.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';

import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';

import { LegendChartComponent } from './legend-chart/legend-chart.component';
// import { FilterPipe } from 'app/@theme/pipes';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbSearchModule,
    NbInputModule,
    NbFormFieldModule,
    NbDatepickerModule,
    NgxChartsModule,
    ChartModule,
    NbSpinnerModule,
    NbTooltipModule
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    DetectionComponent,
    TemperatureComponent,
    // InternalTemperatureComponent,
    // ElectricityChartComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    DetectionLookUpComponent,
    AdvancedComponent,
    ECommerceChartsPanelComponent,
    ChartPanelSummaryComponent,
    ChartPanelHeaderComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    LegendChartComponent,
  ],
})
export class DashboardModule { }
