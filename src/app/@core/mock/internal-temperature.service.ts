import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Electricity, ElectricityChart, ElectricityData } from '../data/internal-temperature';

@Injectable()
export class ElectricityService extends ElectricityData {

  // private listData: Electricity[] = [
  //   {
  //     title: '2015',
  //     months: [
  //       { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
  //       { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
  //       { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
  //       { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
  //       { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
  //       { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
  //       { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
  //       { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
  //       { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
  //       { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
  //       { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
  //       { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
  //     ],
  //   },
  //   {
  //     title: '2016',
  //     active: true,
  //     months: [
  //       { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
  //       { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
  //       { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
  //       { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
  //       { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
  //       { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
  //       { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
  //       { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
  //       { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
  //       { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
  //       { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
  //       { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
  //     ],
  //   },
  //   {
  //     title: '2017',
  //     months: [
  //       { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
  //       { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
  //       { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
  //       { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
  //       { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
  //       { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
  //       { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
  //       { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
  //       { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
  //       { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
  //       { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
  //       { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
  //     ],
  //   },
  // ];



  private listData: Electricity[] = [
    {
      title: 'Dec',
      months: [
        { month: '01 Dec', delta: '0.97', down: true, kWatts: '18', cost: '10' },
        { month: '02 Dec', delta: '1.83', down: true, kWatts: '20', cost: '7' },
        { month: '03 Dec', delta: '0.64', down: true, kWatts: '18', cost: '9' },
        { month: '04 Dec', delta: '2.17', down: false, kWatts: '20', cost: '11' },
        { month: '05 Dec', delta: '1.32', down: true, kWatts: '16', cost: '12' },
        { month: '06 Dec', delta: '0.05', down: true, kWatts: '19', cost: '8' },
        { month: '07 Dec', delta: '1.39', down: false, kWatts: '21', cost: '8' },
        { month: '08 Dec', delta: '0.73', down: true, kWatts: '20', cost: '10' },
        { month: '09 Dec', delta: '2.61', down: true, kWatts: '19', cost: '15' },
        { month: '10 Dec', delta: '0.16', down: true, kWatts: '20', cost: '14' },
        { month: '11 Dec', delta: '1.71', down: true, kWatts: '21', cost: '13' },
        { month: '12 Dec', delta: '0.37', down: false, kWatts: '22', cost: '12' },
      ],
    },
    {
      title: 'Jan',
      active: true,
      months: [
        { month: '01 Jan', delta: '1.56', down: true, kWatts: '18', cost: '10' },
        { month: '02 Jan', delta: '0.33', down: false, kWatts: '22', cost: '11' },
        { month: '03 Jan', delta: '0.62', down: true, kWatts: '22', cost: '9' },
        { month: '04 Jan', delta: '1.93', down: true, kWatts: '18', cost: '10' },
        { month: '05 Jan', delta: '2.52', down: true, kWatts: '20', cost: '12' },
        { month: '06 Jan', delta: '0.39', down: false, kWatts: '23', cost: '11' },
        { month: '07 Jan', delta: '1.61', down: true, kWatts: '19', cost: '12' },
        { month: '08 Jan', delta: '1.41', down: true, kWatts: '18', cost: '14' },
        { month: '09 Jan', delta: '1.03', down: true, kWatts: '20', cost: '15' },
        { month: '10 Jan', delta: '2.94', down: false, kWatts: '22', cost: '10' },
        { month: '11 Jan', delta: '0.26', down: true, kWatts: '23', cost: '9' },
        { month: '12 Jan', delta: '1.62', down: true, kWatts: '20', cost: '10' },
      ],
    },

  ];

  private chartPoints = [
    // 12, 12, 13, 14,
    // 15, 16, 17, 16,
    // 17, 15, 15, 16,
    // 17, 18, 19, 20,
    // 20, 21, 20, 20,
    // 19, 18, 17, 16,
    // 15, 12, 10, 8,
    // 12, 12, 13, 12,
    // 13, 13, 14, 16,
    31, 32, 33, 35,
    38, 39, 38, 39,
    41, 41, 40,
  ];

  chartData: ElectricityChart[];

  constructor() {
    super();
    this.chartData = this.chartPoints.map((p, index) => ({
      label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
      value: p,
    }));
  }

  getListData(): Observable<Electricity[]> {
    return observableOf(this.listData);
  }

  getChartData(): Observable<ElectricityChart[]> {
    return observableOf(this.chartData);
  }

  addChartPoint(p:number) {
    this.chartPoints.push(p);
    return this.chartPoints;
  }
}
