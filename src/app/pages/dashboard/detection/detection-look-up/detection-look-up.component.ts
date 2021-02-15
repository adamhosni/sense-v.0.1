import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-detection-look-up',
  templateUrl: './detection-look-up.component.html',
  styleUrls: ['./detection-look-up.component.scss'],
})
export class DetectionLookUpComponent implements OnInit {

  constructor() { }
  // @Input('childToMaster') masterName: any[];
  timeTab: any;
  mac: any;
  initTimeTab: any;
  rssi: number;
  accuracy: string;
  // ssid: any;
  isAccessPoint: boolean = false;
  isFound: boolean = false;

  type = 'All';
  types = ['Today', 'Yesterday', 'Last Week', 'Last Month', 'All'];

  selectedWifi: boolean = false;

  ngOnInit(): void {
    this.initTimeTab = this.timeTab;
    // console.log(this.mac);

    if (this.rssi !== undefined){
    const txPower = -59 ;
    const ratio = -this.rssi*1.0 / txPower;
    this.accuracy =  ((0.89976)*Math.pow(ratio,7.7095) + 0.111).toFixed(2) + ' meters'; 
    this.selectedWifi = true;
    this.isAccessPoint = false;
    
  }
  let typeOfMac = typeof this.mac;
  
  if (typeOfMac == 'object') 
    this.isAccessPoint = true;
  }

  changeTimeline($event){
    

    if ($event == 'Today'){

      const today = new Date().setHours(0,0,0,0);
      const filterToday = this.initTimeTab.filter(obj => new Date(obj).setHours(0,0,0,0) === today);
      this.timeTab = filterToday;
      // console.log(this.timeTab);
    }else 
    if ($event == 'Yesterday'){

      const yesterday = new Date();
      yesterday.setDate(new Date().getDate() - 1);

      const filterYesterday = this.initTimeTab.filter(obj => new Date(obj).setHours(0,0,0,0) === yesterday.setHours(0,0,0,0));
      this.timeTab = filterYesterday;
      // console.log(filterYesterday);
    }else
    if ($event == 'Last Week'){
      const lastWeek = new Date();
      lastWeek.setDate(new Date().getDate() - 7);

      const filterlastWeek = this.initTimeTab.filter(obj => new Date(obj).setHours(0,0,0,0) >= lastWeek.setHours(0,0,0,0));
      this.timeTab = filterlastWeek;

    }else
    if ($event == 'Last Month'){

      const lastMonth = new Date();
      lastMonth.setDate(new Date().getDate() - 30);

      const filterlastMonth = this.initTimeTab.filter(obj => new Date(obj).setHours(0,0,0,0) >= lastMonth.setHours(0,0,0,0));
      this.timeTab = filterlastMonth;
    }
    
    else{
      this.timeTab = this.initTimeTab;
    }
    
  }

}
