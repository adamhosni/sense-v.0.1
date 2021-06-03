import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChart, OrdersChartData } from '../data/devices-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../data/devices-all-chart';
import { ProfitChart, ProfitChartData } from '../data/detection-chart';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class OrdersProfitChartService extends OrdersProfitChartData {


  private summary = [
    // {
    //   title: 'All',
    //   value: 3654,
    // },
    // {
    //   title: 'Last Month',
    //   value: 946,
    // },
    // {
    //   title: 'Last Week',
    //   value: 654,
    // },
    // {
    //   title: 'Today',
    //   value: 230,
    // },


    {
      title: 'All',
      value: undefined,
    },
    {
      title: 'Last Month',
      value: undefined,
    },
    {
      title: 'Last Week',
      value: undefined,
    },
    {
      title: 'Today',
      value: undefined,
    },
  ];
deviceIp: string;
  constructor(private ordersChartService: OrdersChartData,
              private profitChartService: ProfitChartData) {
    super();

  }

  nBTdevices: number;
  nWFdevices: number;
  nAP: number;

  getOrderProfitChartSummary(ip: string): Observable<OrderProfitChartSummary[]> {
    this.nBTdevices = Number(localStorage.getItem('sense_nbtd' + ip));
    this.nWFdevices = Number(localStorage.getItem('sense_nwfd' + ip));
    this.nAP = Number(localStorage.getItem('sense_napd' + ip));
     let nAll = this.nWFdevices + this.nBTdevices;

    this.summary[0].value = nAll;

    // console.log(this.deviceIp);
    // console.log(localStorage.getItem('sense_nwd' + this.deviceIp));

    return observableOf(this.summary);
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return observableOf(this.ordersChartService.getOrdersChartData(period));
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    return observableOf(this.profitChartService.getProfitChartData(period));
  }
}
