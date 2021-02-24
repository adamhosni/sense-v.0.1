import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './detected-devices.service';
import { ElectricityService } from './internal-temperature.service';
import { OrdersChartService } from './devices-chart.service';
import { ProfitChartService } from './detection-chart.service';
import { TrafficListService } from './traffic-list.service';
import { PeriodsService } from './periods.service';
import { EarningService } from './live-detection.service';
import { OrdersProfitChartService } from './devices-all-chart.service';
import { TrafficBarService } from './traffic-bar.service';
import { ProfitBarAnimationChartService } from './detection-bar-animation-chart.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { SolarService } from './solar.service';
import { TrafficChartService } from './traffic-chart.service';
import { StatsBarService } from './stats-bar.service';
import { StatsProgressBarService } from './stats-progress-bar.service';
import { SmartTableService } from './smart-table.service';


const SERVICES = [
  UserService,
  ElectricityService,
  OrdersChartService,
  ProfitChartService,
  TrafficListService,
  PeriodsService,
  EarningService,
  OrdersProfitChartService,
  TrafficBarService,
  ProfitBarAnimationChartService,
  TemperatureHumidityService,
  SolarService,
  TrafficChartService,
  StatsBarService,
  StatsProgressBarService,
  SmartTableService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
