import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackDevicesService } from 'app/@core/mock/grpc/back/back-devices.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ToolTipRowComponent } from '../tool-tip-row/tool-tip-row.component';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit{

  jwToken;


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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
    },

    // type: 'custom',
    // renderComponent: ToolTipRowComponent,


  };
  data = [];
  source: LocalDataSource = new LocalDataSource();
  toolTip;

  constructor(private backDevService: BackDevicesService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.jwToken = localStorage.getItem('access_token');

    let tabIpPass;
    this.backDevService.getAllDevices(this.jwToken)
    .subscribe( data => {
      console.log(data);
      for(let dev in data) {
        let child = data[dev];
        tabIpPass = {deviceNumber:'0',deviceId: child.dId,deviceLat: child.coordinates.lat, deviceLng: child.coordinates.lng,deviceIp: child.dIp, devicePswd: child.dPassword};
        this.data.push( tabIpPass );
      }
      this.source.load(this.data);
    });

  }

  ngOnInit(){

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event): void {
    console.log(event);
    let deviceIp = event.data.deviceIp;
    console.log(deviceIp);

    // this.router.navigate(['sense-dahboard']);
    this.router.navigate(['pages/sense-dashboard',deviceIp]);
}

onUserRowHover(event): void {
  // let $:any;
  // $("#myModal").modal("show");
}
onCustomAction(event): void {

}

}
