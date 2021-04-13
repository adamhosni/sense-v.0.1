import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:3000/api/device/all';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class BackDevicesService {

  constructor(private httpClient: HttpClient) { }

  getAllDevices( auth : String) {
    httpOptions.headers.set('Authorization', 'Bearer '+auth);
    // httpOptions.set('Authorization', 'Bearer '+auth);

    return this.httpClient.post(AUTH_API , httpOptions);

  }

}
