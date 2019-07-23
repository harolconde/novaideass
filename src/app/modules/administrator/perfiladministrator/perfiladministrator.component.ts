import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../home/services/ideas.service'
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { internalIdea } from '../../home/models/ideaInterna'
declare var $:any;


@Component({
  selector: 'app-perfiladministrator',
  templateUrl: './perfiladministrator.component.html',
  styleUrls: ['./perfiladministrator.component.scss']
})
export class PerfiladministratorComponent implements OnInit {

  

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

  constructor(private _service: IdeasService, private _route:ActivatedRoute, private _idInternal:FormBuilder) { }

  // Formulario
  formInterna: FormGroup

  ngOnInit() {
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
    internaIdea.idUser = "19"

    this._service.postIdeasInternal(internaIdea)
    this.reset()
  }

  // Reset post
  reset(){
    this.formInterna.reset()
  }

}
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
