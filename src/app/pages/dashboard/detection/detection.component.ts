import { AfterViewInit, Component, OnDestroy, Renderer2 } from '@angular/core';


import { Contacts, RecentUsers, UserData } from '../../../@core/data/devices';
import { IamService } from 'app/@core/mock/grpc/iam.service';
import { DataQueryService } from 'app/@core/mock/grpc/data-query.service';
import { grpc } from '@improbable-eng/grpc-web';
import { Stream } from 'stream';
import { NbDialogService } from '@nebular/theme';
import { DetectionLookUpComponent } from './detection-look-up/detection-look-up.component';

@Component({
  selector: 'ngx-detection',
  styleUrls: ['./detection.component.scss'],
  templateUrl: './detection.component.html',
})
export class DetectionComponent implements OnDestroy, AfterViewInit {

  private alive = true;



  authjwt:any;

  btDevices: any[];
  wfDevices: any[];
  accessPoints: any[];
  allDevices: any[] = [];
  recent: any[];
  nBTdevice: number;
  nWFdevices: number;
  nAccessPoints: number;

  constructor(private userService: UserData, private dialogService: NbDialogService,
    private iamService: IamService, private daraQueryService: DataQueryService,
    private renderer: Renderer2) {

      this.logIn();

    // forkJoin([character, characterHomeworld]).subscribe(results => {
    //   // results[0] is our character
    //   // results[1] is our character homeworld
    //   results[0].homeworld = results[1];
    //   this.loadedCharacter = results[0];
    // });
    this.allDevices.concat(this.wfDevices).concat(this.btDevices);
    
    // forkJoin(
    //   [this.userService.getContacts(),
    //   this.userService.getRecentUsers()]
    // )
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
    //     // this.contacts = contacts;
    //     // this.recent = recent;
    //   });

      
  }
  getInputType(){}

  open(mac, time, rssi) {
    this.dialogService.open(DetectionLookUpComponent, { 

      dialogClass: 'modal-full',
      closeOnBackdropClick:true,
      
      context: {
       // title: 'Enter template name',
        timeTab: time,
        mac: mac,
        rssi: rssi

      },  });
      // .onClose.subscribe(name => name && this.names.push(name));
  }
ngAfterViewInit(){
  // let loader = this.renderer.selectRootElement('#loader');
  //   this.renderer.setStyle(loader, 'display', 'none');
  
  
}

  logIn(): any{
  
    const auth = new grpc.Metadata();
    auth.headersMap ["Authorization"] = ['Basic c2Vuc2U6R01HZ3BHZz0='];

     this.iamService.authenticate(auth).then(response => {

       this.authjwt = response;
      // this.GetDeviceInfo();
      this.fetchBTItems();
      this.fetchWiFiItems();
      this.fetchAPItems();
      this.fetchAP();
      
      
      
   
    });
  }

  fetchAPItems(){
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.daraQueryService.fetchAPItems(auth).then(resp => {
        console.log(resp);
        
      });
       // console.log(response);
       // this.deviceInfo = response;
  }

  fetchWiFiItems(){
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.daraQueryService.fetchWiFiItems(auth).then(resp =>{
        // console.log(resp);
        this.wfDevices = resp;
        // this.accessPoints = resp;
        this.nWFdevices = this.wfDevices.length;
        
      });
  }

  fetchBTItems(){
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.daraQueryService.fetchBTItems(auth).then(resp =>{
        // console.log(resp);
        this.btDevices = resp;
        // this.allDevices.concat(this.btDevices);
        this.nBTdevice = this.btDevices.length;
      });
  }

  fetchAP(){
  
    const auth = new grpc.Metadata();
      auth.headersMap ["Authorization"] = ['Bearer '+this.authjwt];
      this.daraQueryService.fetchAP(auth).then(resp =>{
        // console.log(resp);
        this.accessPoints = resp;
        this.nAccessPoints = this.accessPoints.length;
        // this.allDevices.concat(this.btDevices);
        // this.nBTdevice = this.btDevices.length;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
