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
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { InternalTemperatureComponent } from './intemperature/intemperature.component';
import { ElectricityChartComponent } from './intemperature/electricity-chart/electricity-chart.component';
import { SolarComponent } from './solar/solar.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { DetectionComponent } from './detection/detection.component';
import { DetectionLookUpComponent } from './detection/detection-look-up/detection-look-up.component';
import { AdvancedComponent } from './advanced/advanced.component';
// import { FilterPipe } from 'app/@theme/pipes';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
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
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    DetectionComponent,
    TemperatureComponent,
    InternalTemperatureComponent,
    ElectricityChartComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    DetectionLookUpComponent,
    AdvancedComponent
  ],
})
export class DashboardModule { }
