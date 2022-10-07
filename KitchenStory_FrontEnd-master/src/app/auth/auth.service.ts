import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8989';
  constructor(private httpClien: HttpClient) {

  }
  Login(user: any): Observable<any>  {
    console.log(user);
    return this.httpClien.post<any>(this.url + '/authenticate', user);
  }

  Register(user:any): Observable<any>{
    return this.httpClien.post<any>(this.url + '/register', user);
  }

  isLoggedIn() {
    if(localStorage.getItem('token')!=null){
      return true;
    }
    else return false;
  }
  GetToken() {
    return localStorage.getItem('token') || '';
  }

  getRole(): any{
    var loggintoken = localStorage.getItem('token') || '';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = Buffer.from(_extractedtoken, 'base64');
    var _finaldata = JSON.parse(_atobdata.toString());
    return _finaldata.sub;
  }
}
