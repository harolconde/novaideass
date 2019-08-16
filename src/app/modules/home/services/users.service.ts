import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment'
import { AuthenticationService } from '../../login/services/authentication.service'
import { CookieService } from 'ngx-cookie-service'
import { UserModel } from '../models/userModel'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  idUser:any
  user:any[]
  public usersId:any
  // Nombre controlador en el servicio
  public nameController:string = 'dashboard1'
  messageService: any;

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

  getUser(id: number): Observable<any>{
    return this.http.get(`${environment.endpoint}/Users?opcion=4&idUsers=${id}`)
  }
  // Traer todos los datos de todos los usuarios
  getDatesAllUsers(){
    return this.http.get(`${environment.endpoint}/Users?opcion=4`)
  }

  // *************************************** //
  // *********** PETICIONES PUT *********** //
  // ************************************** //

  // atuualizar datos del usuario
  updDatesUser(userDates: UserModel){
    this.idUser = this.cookieService.get('session')
    const user = new UserModel()
    user.IdUsers = userDates.IdUsers
    user.UserNickName = userDates.UserNickName
    user.UserTypé = userDates.UserTypé
    user.UserStatus = userDates.UserStatus
    let headersUser = new HttpHeaders().set('Content-Type','application/json')

    return this.http.put(`${environment.endpoint}/Users/${this.idUser}?opcion=2`,user,{
      headers : headersUser,
      observe : 'response'
    }).subscribe((response) => {
      console.log(response)
    })
  }

}
