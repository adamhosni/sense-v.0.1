import { Component, OnInit } from '@angular/core';
import { BackDevicesService } from 'app/@core/mock/grpc/back/back-devices.service';

@Component({
  selector: 'ngx-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent{

  subAdd;
  subGet;
  jwToken = '';


  constructor(private backDevService: BackDevicesService){

    this.jwToken = localStorage.getItem('access_token');
  }



  getAllDevices(bearer: String){

    this.subGet = this.backDevService.getAllDevices(bearer).subscribe( data => {
        for(let dev in data) {
          let child = data[dev];
          // console.log(child);
        }
    });

  }



  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }



  ngOnDestroy() {
    // this.subAdd.unsubscribe();
    // this.subGet.unsubscribe();
  }
}
