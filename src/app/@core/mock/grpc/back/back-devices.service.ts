import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'https://sense-v-0-2.herokuapp.com/api/device/';




@Injectable({
  providedIn: 'root'
})
export class BackDevicesService {

  constructor(private httpClient: HttpClient) { }

  getAllDevices( auth : String) {
    // console.log(auth);
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      })
    };
    return this.httpClient.get(AUTH_API + 'all' , httpOptions);

  }

  addDevice( auth : String , {ip, password}) {

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      })
    };

    return this.httpClient.post(AUTH_API + 'create' , {
      dIp: ip,
      dPassword: password
    } , httpOptions);

  }

}
