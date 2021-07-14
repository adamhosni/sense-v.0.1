import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://sense-v-0-2.herokuapp.com/api/device/';
// const AUTH_API = 'http://localhost:3000/api/device/';




@Injectable({
  providedIn: 'root'
})
export class BackDevicesService {

  constructor(private httpClient: HttpClient) { }

  getAllDevices( auth : String ): Observable<any> {
    // console.log(auth);
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Authorization': `Bearer ${auth}`
      })
    };
    return this.httpClient.get(AUTH_API + 'all' , httpOptions);

  }

  addDevice( auth : String , {ip, password}): Observable<any> {

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

  deleteDevice( auth : String , deviceId: string): Observable<any> {

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`,
      })
    };

    return this.httpClient.delete(AUTH_API + deviceId + '/delete' , httpOptions);

  }

}
