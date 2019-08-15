import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../home/services/ideas.service'
import { UsersService } from '../../home/services/users.service'
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { internalIdea } from '../../home/models/ideaInterna'
import { UserModel } from '../../home/models/userModel'
import { CookieService } from 'ngx-cookie-service'
import { environment } from '../../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'
//import { url } from 'inspector';
declare var $:any;


@Component({
  selector: 'app-perfiladministrator',
  templateUrl: './perfiladministrator.component.html',
  styleUrls: ['./perfiladministrator.component.scss']
})
export class PerfiladministratorComponent implements OnInit {

  // Datos del perfil del usuario
  idUserPerfil:any
  userDatesPerfil:any

  // Imagenes perfil de usuario
  // Subir imagen de perfil del usuario
  imgSrc: string = 'assets/img/users/user.svg';
  fileUpload: File = null;
  mimeType: string = null;

  // Redireccionamiento Id Idea
  idRedir:any

  // ****** Ideas ****** //

  // Ideas con mas votos
  ideasMoreVotes:any []
   // las ultimas cutrao ideas por usuario
  ideasLastFourUser:any []

  // ****** Comentarios ****** //

  // Ultimos cuatro comentarios del usuario
  commentsLastFourUser:any []

  constructor(
    private _service: IdeasService,
    private _user: UsersService, 
    private _route:ActivatedRoute, 
    private _idInternal:FormBuilder,
    private _nickNameUpd: FormBuilder,
    private cookieService: CookieService,
    private http: HttpClient
  ) { }

  // Formulario
  formInterna: FormGroup
  formPerfilUser: FormGroup

  ngOnInit() {
    // Datos del perfil del usuario
    this.getUserDatesPerfil()

    // Ideas con mas votos del usuario
    this.getIdeasMvotes()
    // Ultimas cuatro ideas del usuario
    this.getAllUserIdeas()

    // Ultimos cuatro comentarios del usuario
    this.getAllCommentUser()

    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
      console.log(this.idRedir)
    })

    // Captura de elementos del formulario
    this.formInterna = this._idInternal.group({
      mensaje: ['']
      //asunto: ['']
    })
    this.formPerfilUser = this._nickNameUpd.group({
      nickName: ['']
    })
    
  }

  // Datos del usuario
  getUserDatesPerfil(){
    this._user.getDatesUser().subscribe((data) => {
      this.userDatesPerfil = data
      console.log(this.userDatesPerfil)
    })
  }

  // Traer las ideas mas votadas del administrador
  getIdeasMvotes():void{
    this._service.getIdeasUserMoreVotes().subscribe((data) => {
      this.ideasMoreVotes = data
    })
  }

  // Todas las ideas postuladas por el usuario
  getAllUserIdeas():void{
    this._service.getIdeasUser().subscribe((data) => {
      this.ideasLastFourUser = data
    })
  }

  // Todos los comentarios por usuario
  getAllCommentUser():void{
    this._service.getCommentsForUser().subscribe((data) => {
      this.commentsLastFourUser = data
      console.log(data)
    })
  }

  // *************************************** //
  // *********** PETICIONES POST *********** //
  // ************************************** //

  postInternalIdeas(formValueInternal:any){
    let internaIdea = new internalIdea()
    internaIdea.emisor = "sample string 1"
    internaIdea.password = "sample string 2"
    internaIdea.mensaje = formValueInternal.mensaje
    internaIdea.asunto = "Prueba Envio Correo NovaIdeas"
    internaIdea.destinatario = "sample string 3"
    internaIdea.rutaAdjunto = "sample string 4"
    internaIdea.idUser = this.cookieService.get('session')

    this._service.postIdeasInternal(internaIdea)
    this.reset()
  }

  // Reset post
  reset(){
    this.formInterna.reset()
  }

  // *************************************** //
  // *********** PETICIONES PUT *********** //
  // ************************************** //
  putDatesUser(formValue:any){
    let userData = new UserModel()
    userData.IdUsers = this.cookieService.get('session')
    userData.UserNickName = formValue.nickName
    this._user.updDatesUser(userData)
  }

  //************************************************//
  // ******* Imagenes de perfil del usuario ******* //
  //************************************************//

  // Obtener imagen de perfil
  getImgUser(id){
		return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}` 
	}

  // Capturar imagen del perfil para reemplazar
  captureImg(File: FileList){
    this.fileUpload = File.item(0)
    const reader = new FileReader()
    reader.onload = (event:any) => {
      this.imgSrc = event.target.result;
    }
    reader.readAsDataURL(this.fileUpload)
  }

  // Cambiar imagen de perfil del usuario.
  changeImgPerfil(id){
    const uploadImg = new FormData()
    uploadImg.append('myFile', this.fileUpload, this.fileUpload.name)
    this.http.put(`${environment.endpoint}/ImageUsers?opcion=2&idUsers=${this.cookieService.get('session')}`, uploadImg, {
      reportProgress: true,
      observe: 'events'
    }).subscribe((event) => {
      console.log(event)
    })
    setTimeout(() => {
      this.getUserDatesPerfil()
      this.getImgUser(id)
    },500)
  }

  // Cancelar cambio de imagen
  cancelSelectIdea(){
    return this.imgSrc = 'assets/img/users/user.svg';
  }

}
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
