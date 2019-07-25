import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { authModel } from '../models/authentication'
import { environment } from '../../../../environments/environment'
import { Routes, ActivatedRoute } from '@angular/router'

// Cookie Session del usuario
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public response:any = {}
  public responseNumber: number = 0
  public cookieUserSession: any = 'UNKNOWN'
  public idUserLogged: any

  constructor(
    private http: HttpClient,
    private cookieSession:CookieService
  ) { }

  authenticationIdea(authen: authModel ){
    const auth = new authModel()
    auth.user = authen.user
    auth.password = authen.password
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.endpoint}/Login/Authenticate`,auth,{
        headers : headers,
        observe : 'response',
      }).subscribe((resp) => {
        console.log(resp)
        this.response = resp.body.Message
        this.cookieSession.set('session', resp.body.Response)
        this.cookieUserSession = this.cookieSession.get('session')
        this.idUserLogged = this.cookieUserSession 
        console.log(this.idUserLogged)
      })
  });
  }
}
