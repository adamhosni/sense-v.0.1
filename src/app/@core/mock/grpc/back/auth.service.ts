import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const AUTH_API = 'https://sense-v-0-2.herokuapp.com/api/auth/';
// const AUTH_API = 'http://localhost:3000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {

    constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + 'login', {
      email: username,
      password: password
    }, httpOptions);
  }

  register( email: string, password: string): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signup', {
      // username,
      email,
      password
    }, httpOptions);
  }

}
