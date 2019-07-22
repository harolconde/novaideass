import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../home/services/ideas.service'
import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-perfiladministrator',
  templateUrl: './perfiladministrator.component.html',
  styleUrls: ['./perfiladministrator.component.scss']
})
export class PerfiladministratorComponent implements OnInit {

  // ****** Ideas ****** //

  // Ideas con mas votos
  ideasMoreVotes:any []
   // las ultimas cutrao ideas por usuario
  ideasLastFourUser:any []

  // ****** Comentarios ****** //

  // Ultimos cuatro comentarios del usuario
  commentsLastFourUser:any []

  constructor(private _service: IdeasService) { }

  ngOnInit() {
    // Ideas con mas votos del usuario
    this.getIdeasMvotes()
    // Ultimas cuatro ideas del usuario
    this.getAllUserIdeas()

    // Ultimos cuatro comentarios del usuario
    this.getAllCommentUser()
    
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
}
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
