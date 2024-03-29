import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { grpc } from '@improbable-eng/grpc-web';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { BackDevicesService } from 'app/@core/mock/grpc/back/back-devices.service';
import { DeviceSettingsService } from 'app/@core/mock/grpc/device-settings.service';
import { IamService } from 'app/@core/mock/grpc/iam.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ToolTipRowComponent } from '../tool-tip-row/tool-tip-row.component';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit, OnDestroy{

  jwToken;
  tabIpPass: any;
  authjwt: string;


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      deviceNumber: {
        title: 'Device Number',
        type: 'number',
      },
      deviceId: {
        title: 'Device ID',
        type: 'string',
      },
      deviceIp: {
        title: 'Device IP',
        type: 'string',
      },
      deviceLat: {
        title: 'Device Lat',
        type: 'string',
      },
      deviceLng: {
        title: 'Device Lng',
        type: 'string',
      },
      devicePswd: {
        title: 'Device Password',
        type: 'string',
      },
      deviceStatus: {
        title: 'Status',
        filter: false,
        type: 'custom',
        renderComponent: ToolTipRowComponent  ,
        onComponentInitFunction(instance) {
          instance.save.subscribe((row: any) => {
            // console.log(instance.rowData.deviceIp);

            if (instance.rowData.deviceStatus == false) alert(`Device ${instance.rowData.deviceIp} is Unreachable!`);
            else alert(`Device ${instance.rowData.deviceIp} is Active!
            Redirecting ...`);
          });
        }
      },
    },

  };

  data = [];
  source: LocalDataSource = new LocalDataSource();

  getAllSub;

  isActiveDevice: boolean;

  constructor(private backDevService: BackDevicesService, private router: Router, private iamService: IamService,
    private deviceSettingsService : DeviceSettingsService, private toastrService: NbToastrService ){

    this.jwToken = localStorage.getItem('access_token');

  }

  ngOnInit(){

    // this.getAllSub =
    this.backDevService.getAllDevices(this.jwToken).subscribe( data => {

      for(let dev in data) {
        let child = data[dev];

        this.tabIpPass = {deviceIp: child.dIp, devicePswd: child.dPassword, device_ID: child._id};

        this.logIn(child.dIp, child.dPassword);
        let tokenSense = localStorage.getItem('token_sense' + child.dIp);


        if ( tokenSense !==  null){

          this.isActiveDevice = true;
          this.tabIpPass.deviceStatus = true;

          const auth = new grpc.Metadata();
          auth.headersMap ["Authorization"] = ['Bearer ' + tokenSense];


          this.deviceConfig(auth, child.dIp, dev);
          this.getDeviceInfo(auth, child.dIp, dev);
        }
        else{
          this.isActiveDevice = false;
          this.tabIpPass.deviceStatus = false;
          localStorage.removeItem('token_sense' + child.dIp);

          this.showToast('danger', child.dIp );// show toaster notification => device unreachable
        }
        this.data.push( this.tabIpPass );
        // console.log(this.data);
        this.source.load(this.data);
      }
    });
  }


  showToast(status: NbComponentStatus, ip) {
    this.toastrService.show(
      ip + ' is Unreachable!',
      'Sense Inactive',
      {limit: 3, status });
  }

  logIn(ip: string, pass: string): void{

    var basic = btoa('sense:' + pass); // base64 Encoding

    // pass = 'c2Vuc2U6R01HZ3BHZz0='; // sense:GMGgpGg=
    // pass = 'c2Vuc2U6cjNaQ0I4az0='; // sense:r3ZCB8k=

    const auth = new grpc.Metadata();
    auth.headersMap ["Authorization"] = ['Basic ' + basic];

     this.iamService.authenticate(auth, ip).then(response => {

      if ( response.includes('ey') ) {
        this.authjwt = response;
        localStorage.setItem('token_sense' + ip, this.authjwt);
        this.isActiveDevice = true;
      }
      else {
        this.isActiveDevice = false;
        localStorage.removeItem('token_sense' + ip);

      }

    }).catch(err => {
      console.log(JSON.stringify(err));
      console.log('Can not connect to IP: ', ip);



    });

  }

  //Get The Coordianates
  deviceConfig( auth, ip: string, dev ): void{

      this.deviceSettingsService.deviceConfig(auth, ip).then(response => {

        this.data[dev]['deviceLng'] = response.deviceLocationConfig.longitude;
        this.data[dev]['deviceLat'] = response.deviceLocationConfig.latitude;

      });
  }
//Get The Device Id
  getDeviceInfo( auth, ip: string, dev ): void{

      this.deviceSettingsService.getDeviceInfo(auth, ip).then(response => {
        this.data[dev]['deviceId'] = response.getDeviceid();
        //Load The table
        this.source.load(this.data);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event);

      this.deleteDevice(this.jwToken, event.data.device_ID);
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event): void {

    let deviceIp = event.data.deviceIp;
    console.log(event);
    if (event.data.deviceStatus){
    this.router.navigate(['pages/sense-dashboard',deviceIp]);
  }
}


deleteDevice(auth: string, id: string){

  this.backDevService.deleteDevice(auth, id).subscribe( response => {

    console.log(response);

  });
}
onCreateConfirm(event): void{
  if (window.confirm('Are you sure you want to add this device?')) {
    let newDevIp = event.newData.deviceIp;
    let newDevPass = event.newData.devicePswd;
    // console.log(newDevIp);
    this.addDevice(this.jwToken, newDevIp, newDevPass);

  } else {
    event.confirm.reject();
  }

}

addDevice(bearer: String, ip: String, password: String){

  this.backDevService.addDevice(bearer, {ip, password}).subscribe( data => {

    if (data['message'].includes('saved')) console.log(data['message']);

    });

}

ngOnDestroy(){

  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    if( key.includes('token_sense') ){
      localStorage.removeItem(key);
    }
  }


}

}
