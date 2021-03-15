import { Component, OnInit } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { DataQueryService } from 'app/@core/mock/grpc/data-query.service';
import { IamService } from 'app/@core/mock/grpc/iam.service';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent implements OnInit {

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

  constructor(
    private iamService: IamService, private daraQueryService: DataQueryService) {

      this.logIn();

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

  logIn(): void{

    const auth = new grpc.Metadata();
    auth.headersMap ["Authorization"] = ['Basic c2Vuc2U6R01HZ3BHZz0='];

     this.iamService.authenticate(auth).then(response => {

      this.authjwt = response;
      // this.GetDeviceInfo();
      // this.fetchBTItems();
      this.fetchWiFiItems();
      // this.fetchAPItems();

    });
  }
  fetchWiFiItems(){

    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.daraQueryService.fetchWiFiItems(auth).then(resp =>{
        this.wfDevices = resp;
        if (this.wfDevices[2] == null) this.wfDevices[2] = 'Unavailable Vendor';
        this.nWFdevices = this.wfDevices.length;

      });
  }
}
