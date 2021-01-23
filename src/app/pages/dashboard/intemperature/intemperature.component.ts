import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Electricity, ElectricityChart, ElectricityData } from '../../../@core/data/internal-temperature';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-intemperature',
  styleUrls: ['./intemperature.component.scss'],
  templateUrl: './intemperature.component.html',
})
export class InternalTemperatureComponent implements OnDestroy {

  private alive = true;

  listData: Electricity[];
  chartData: ElectricityChart[];

  type = 'today';
  types = ['today', 'yesterday'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private electricityService: ElectricityData,
              private themeService: NbThemeService) {
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
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
