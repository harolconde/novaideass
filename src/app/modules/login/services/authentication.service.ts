import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { authModel } from '../models/authentication'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticationIdea(authen: authModel ){
    const auth = new authModel()
    auth.usuario = authen.usuario
    auth.paswword = authen.paswword
    console.log(auth)
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this.http.post<any>('http://172.65.10.170:8050/UserLoginAPI/api/Login',auth,{
      headers : headers,
      observe : 'response'
    }).subscribe((resp) => {
      console.log(resp)
    })
  }
}
