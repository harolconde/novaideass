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
  // Nombre controlador en el servicio
  public nameController:string = 'dashboard1'

  constructor(private http: HttpClient) { }

  getTopParticipationUsers(): Observable<any>{
    return this.http.get(`${environment.endpoint}/${this.nameController}?fechaInic=20190517&fechaFinc=20190518`)
  }
}
