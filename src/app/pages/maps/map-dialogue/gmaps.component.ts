import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent {

  deviceId: string;
  listWifis;
  map;
  rangesExist: boolean;
  numberDevices: number = 34;

  deleteWifiRanges(listWifis){

    console.log (listWifis);
      this.map.removeLayer(listWifis.wifi100);
      this.map.removeLayer(listWifis.wifi300);
      this.map.removeLayer(listWifis.wifi500);
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
