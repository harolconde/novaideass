import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { authModel } from '../models/authentication'
import { environment } from '../../../../environments/environment'
import { Routes, ActivatedRoute } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public response:any = {}
  public responseNumber: number = 0
  
  constructor(private http: HttpClient) { }

  authenticationIdea(authen: authModel ){
    const auth = new authModel()
    auth.user = authen.user
    auth.password = authen.password
    let headers = new HttpHeaders().set('Content-Type','application/json')

    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.endpoint}/Login/Authenticate`,auth,{
        headers : headers,
        observe : 'response'
      }).subscribe((resp) => {
        console.log(resp)
        this.response = resp.body.Message
        return this.responseNumber = resp.body.Response 
        //console.log(this.response, this.responseNumber)
      })
  });
  }
}
