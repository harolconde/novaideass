import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment'
import { AuthenticationService } from '../../login/services/authentication.service'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  idUser:any
  user:any[]
  // Nombre controlador en el servicio
  public nameController:string = 'dashboard1'

  constructor(
      private http: HttpClient,
      private userAuth: AuthenticationService,
      private cookieService: CookieService
    ) { }

  getTopParticipationUsers(): Observable<any>{
    return this.http.get(`${environment.endpoint}/${this.nameController}?fechaInic=20190517&fechaFinc=20190518`)
  }

  // Traer todos los datos del usurio por ID
  getDatesUser(){
    this.idUser = this.cookieService.get('session')
    return this.http.get(`${environment.endpoint}/Users?opcion=4&idUsers=${this.idUser}`)
  }

}
