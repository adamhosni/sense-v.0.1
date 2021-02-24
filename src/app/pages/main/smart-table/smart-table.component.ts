import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

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
        type: 'number',
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
  };

  source: LocalDataSource = new LocalDataSource();

  // constructor(private service: SmartTableData) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}