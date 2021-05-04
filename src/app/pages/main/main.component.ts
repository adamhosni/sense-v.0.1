import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { grpc } from '@improbable-eng/grpc-web';
import { BackDevicesService } from 'app/@core/mock/grpc/back/back-devices.service';

@Component({
  selector: 'ngx-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent{

  sub;
  jwToken = '';


  constructor(private backDevService: BackDevicesService){

    this.jwToken = localStorage.getItem('access_token');
  }

  // ngOnInit(){


    // console.log( this.jwToken );

    // this.getAllDevices(this.jwToken);
    // this.addDevice(this.jwToken, this.ip, this.password);

  // }

  getAllDevices(bearer: String){

    this.sub = this.backDevService.getAllDevices(bearer).subscribe( data => {
        for(let dev in data) {
          let child = data[dev];
          // console.log(child);
        }
    });

  }

  addDevice(bearer: String, ip: String, password: String){


    this.sub = this.backDevService.addDevice(bearer, {ip, password}).subscribe( data => {

      if (data['success']) console.log(data['message']);

      });

  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }



  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
