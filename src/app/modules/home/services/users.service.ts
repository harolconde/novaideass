import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any[]

  constructor(private http: HttpClient) { }

  getTopParticipationUsers(): Observable<any>{
    return this.http.get('http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?fechaInic=20190517&fechaFinc=20190518')
  }
}
