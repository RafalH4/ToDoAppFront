import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConnection } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url = apiConnection.url + "/user";

  register(userData: any) {
    return this.http.post(this.url+"/register", userData)
  }

  login(userData: any) {
    return this.http.post(this.url+"/login", userData)
  }

  logout(userData: any) {
    return this.http.post(this.url+"/login", userData)
  }

}
