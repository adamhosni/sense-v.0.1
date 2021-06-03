import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./map-dialogue.component.scss'],
  templateUrl: './map-dialogue.component.html',
})
export class MapDialogueComponent implements OnInit {

  authjwt: any;
  wfDevices : any;
  nWFdevices: number;
  rssi: number;
  distance: String;

  deviceId: string;
  listWifis;
  map;
  rangesExist: boolean;
  numberDevices: number = 34;

  constructor() {



  }

  ngOnInit(){

    if (this.rssi !== undefined){
      const txPower = -59 ;
      const ratio = -this.rssi*1.0 / txPower;
      this.distance =  ((0.89976)*Math.pow(ratio,7.7095) + 0.111).toFixed(2) ;
    }

  }

  deleteWifiRanges(listWifis){

    console.log (listWifis);
      this.map.removeLayer(listWifis.wifi100);
      this.map.removeLayer(listWifis.wifi300);
      this.map.removeLayer(listWifis.wifi500);
      this.map.removeLayer(listWifis.pl);
      console.log ('deleted')
      this.rangesExist = true;

  }

  showWifiRanges(listWifis){
    listWifis.wifi100.addTo(this.map);
    listWifis.wifi300.addTo(this.map);
    listWifis.wifi500.addTo(this.map);
    this.rangesExist = false;
  }

  }

