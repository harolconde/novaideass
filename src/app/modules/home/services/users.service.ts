import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any[]

  constructor(private http: HttpClient) { }

  getTopParticipationUsers(): Observable<any>{
    return this.http.get(`${environment.endpoint}/dashboard1?fechaInic=20190517&fechaFinc=20190518`)
  }
}
