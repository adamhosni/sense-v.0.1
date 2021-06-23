import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { DataQueryService } from 'app/@core/mock/grpc/data-query.service';
import { grpc } from '@improbable-eng/grpc-web';
import { NbDatepickerComponent, NbDateService, NbDialogService } from '@nebular/theme';
import { DetectionLookUpComponent } from './detection-look-up/detection-look-up.component';
import { ActivatedRoute } from '@angular/router';
import { ItemQuery, TimeRange } from 'app/@protos/sense_core_datarequest_pb';
import { time } from 'console';


@Component({
  selector: 'ngx-detection',
  styleUrls: ['./detection.component.scss'],
  templateUrl: './detection.component.html',
})
export class DetectionComponent implements OnDestroy, OnInit {

  @ViewChild(NbDatepickerComponent) formpicker: NbDatepickerComponent<Date>;

  private alive = true;

  searchText;
  loading = true;
  deviceIp: string;

  btDevices: any[]; //BTFramePointMsg
  wfDevices: any[]; //WiFiFramePointMsg
  accessPoints: any[];

  nBTdevice: number;
  nWFdevices: number;
  nAccessPoints: number;

  min: Date;
  max: Date;


  constructor(private dialogService: NbDialogService, private daraQueryService: DataQueryService,
    private activatedRoute: ActivatedRoute, protected dateService: NbDateService<Date> ) {

      this.min = this.dateService.addMonth(this.dateService.today(), -1);
      this.max = this.dateService.today();
  }

  onEventStartEndRange(event){
    if (event.end !== undefined){
      // console.log(event);
      let startDate = (event.start).getTime();
      let endDate = (event.end).getTime();
      let tokenSense = localStorage.getItem('token_sense' + this.deviceIp);
      const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+tokenSense];
      // this.fetchBTItemsRange( auth, this.deviceIp, startDate, endDate);
      this.fetchWiFiItemsRange( auth, this.deviceIp, startDate, endDate);
    }
  }

  open(mac, time, rssi) {
    this.dialogService.open(DetectionLookUpComponent, {

      dialogClass: 'modal-full',
      closeOnBackdropClick:true,

      context: {
       // title: 'Enter template name',
        timeTab: time,
        mac: mac,
        rssi: rssi

      },
    });
  }
  ngOnInit(){

    this.deviceIp = this.activatedRoute.snapshot.params.deviceIp;
    let tokenSense = localStorage.getItem('token_sense' + this.deviceIp);
      const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+tokenSense];

      this.fetchBTItems( auth , this.deviceIp );
      this.fetchWiFiItems( auth , this.deviceIp );
      this.fetchAP( auth , this.deviceIp );

      setTimeout(() => this.loading = false, 8000);
      // console.log(this.formpicker);
  }


downloadFile(data: any) {
  console.log('downloadFile Works');

  const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
  const header = Object.keys(data[0]);
  const csv = data.map((row) =>
    header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(',')
  );
  csv.unshift(header.join(','));
  const csvArray = csv.join('\r\n');

  const a = document.createElement('a');
  const blob = new Blob([csvArray], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);

  a.href = url;
  a.download = 'myFile.csv';
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
}



  // fetchAPItems( auth: any ){

  //    this.daraQueryService.fetchAPItems(auth).then(resp => {
  //       // console.log(resp);

  //     });

  // }

  fetchWiFiItems( auth: any, ip: string ){

    this.daraQueryService.fetchWiFiItems(auth, ip).then(resp =>{
        // console.log(resp);
        this.wfDevices = resp;
        this.nWFdevices = this.wfDevices.length;
        localStorage.setItem('sense_nwfd'+ip, '' + this.nWFdevices);
      });
  }
  fetchWiFiItemsRange( auth: any, ip: string, start, end ){

    let timeRange: TimeRange = new TimeRange();
    timeRange.setFromepochms(start);
    timeRange.setToepochms(end);
    // console.log(timeRange);

    this.daraQueryService.fetchWiFiItemsRange(auth, ip, timeRange).then(resp =>{
        console.log(resp);
        this.wfDevices = resp;
        this.nWFdevices = this.wfDevices.length;
        // localStorage.setItem('sense_nwfd'+ip, '' + this.nWFdevices);
      });
  }

  fetchBTItems( auth: any, ip: string ){

      this.daraQueryService.fetchBTItems(auth, ip).then(resp =>{
        this.btDevices = resp;
        this.nBTdevice = this.btDevices.length;
        localStorage.setItem('sense_nbtd'+ip, '' + this.nBTdevice);
      });
  }
  fetchBTItemsRange( auth: any, ip: string , start, end){
    let timeRange: TimeRange = new TimeRange();
    timeRange.setFromepochms(start);
    timeRange.setToepochms(end);
    // console.log(timeRange);


    this.daraQueryService.fetchBTItemsRange(auth, ip, timeRange).then(resp =>{
      this.btDevices = resp;
      this.nBTdevice = this.btDevices.length;
      // localStorage.setItem('sense_nbtd'+ip, '' + this.nBTdevice);
    });
  }


  fetchAP( auth: any, ip: string ){

      this.daraQueryService.fetchAP(auth, ip).then(resp =>{
        // console.log(resp);
        this.accessPoints = resp;
        this.nAccessPoints = this.accessPoints.length;
        localStorage.setItem('sense_napd'+ip, '' + this.nAccessPoints);

      });
  }




  ngOnDestroy() {


    // fetchAPItems( auth: any ){

    //    this.daraQueryService.fetchAPItems(auth).then(resp => {
    //       // console.log(resp);

    //     });

    // }
    this.alive = false;
  }
}
