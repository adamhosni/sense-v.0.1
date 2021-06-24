import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval , Subscription } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { LiveUpdateChart, EarningData } from '../../../../@core/data/live-detection';

@Component({
  selector: 'ngx-live-card-front',
  styleUrls: ['./live-card-front.component.scss'],
  templateUrl: './live-card-front.component.html',
})
export class LiveCardFrontComponent implements OnDestroy, OnInit {
  private alive = true;

  @Input() selectedFeature: string = 'All';

  intervalSubscription: Subscription;
  features: string[] = ['All', 'Wifi', 'Bluetooth'];
  currentTheme: string;
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: { value: [string, number] }[];

  constructor(private themeService: NbThemeService,
              private earningService: EarningData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedFeature);
  }

  changeFeature(feature) {
    if (this.selectedFeature !== feature) {
      this.selectedFeature = feature;

      this.getEarningCardData(this.selectedFeature);
    }
  }

  private getEarningCardData(feature) {
    this.earningService.getEarningCardData(feature)
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningLiveUpdateCardData: LiveUpdateChart) => {
        this.earningLiveUpdateCardData = earningLiveUpdateCardData;
        this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

        this.startReceivingLiveData(feature);
      });
  }

  startReceivingLiveData(feature) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.earningService.getEarningLiveUpdateCardData(feature)),
      )
      .subscribe((liveUpdateChartData: any[]) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
