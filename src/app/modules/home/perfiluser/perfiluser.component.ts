import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { isLContainer } from '@angular/core/src/render3/util';
import { IdeasService } from '../services/ideas.service'
import { ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.scss']
})
export class PerfiluserComponent implements OnInit {

  // Subir imagen de perfil del usuario
  imgSrc: string = 'assets/img/users/user.svg';
  fileUpload: File = null;
  mimeType: string = null;
  // Menu de navegacion
  menuComponents: boolean = false;

  ideasForUser:any[] = []
  ideasMoreVotes:any[] = []
  commentsForUser:any[] = []
  idRedir:any
  constructor(private _service:IdeasService, private _route:ActivatedRoute) { }

  ngOnInit() {
    // Todas mis ideas
    this.getUserIdeas()

    // Mis ideas mas votadas
    this.getUserIdeasMoreVotes()
    
    // Ultimos cuatro comentarios
    this.getCommentUser()
    // Obtner detalle de la idea
    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
      console.log(this.idRedir)
    })
  }

  // Menu de navegacion
  showMenuNav() {
    this.menuComponents = ! this.menuComponents;
  }

  // Subir imagen de perfil del usuario.
  selectImg(file: FileList) {
    this.fileUpload = file.item(0);

    // Upload image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgSrc = event.target.result;
    };
    reader.readAsDataURL(this.fileUpload);

    // Obtener mime imagen
    
  }

  // ********************* //
  // Get ideas por usuario //
  // ********************* //

  // Mas votadas
  getUserIdeasMoreVotes():void{
    this._service.getIdeasUserMoreVotes().subscribe((data) => {
      this.ideasMoreVotes = data
      
    })
  }
  // Cuatro mas recientes
  getUserIdeas():void{
    this._service.getIdeasUser().subscribe((data) => {
      this.ideasForUser = data
      console.log(data)
    })
  }
  // Ultimos comentarios por usuario
  getCommentUser():void{
    this._service.getCommentsForUser().subscribe((data) => {
      this.commentsForUser = data
      console.log(data) 
    })
  }
  getMimeType(){
    this.mimeType =  this.fileUpload.name.split('.').pop()
    console.log(this.mimeType)
  }
  cancelSelectIdea(){
    return this.imgSrc = 'assets/img/users/user.svg';
  }

  imgs:any= [
    {id:'01', source:'assets/img/users/05.svg'},
    {id:'02', source:'assets/img/users/03.svg'},
    {id:'03', source:'assets/img/users/04.svg'},
    {id:'04', source:'assets/img/users/01.svg'},
    {id:'05', source:'assets/img/users/02.svg'}
  ]


  getNameImg(id){
    let itemImg:any = document.getElementById(id)
    console.log(itemImg)
    // for(let i = 0; i < this.btnChecked.length; i++){
    //   console.log(this.btnChecked[i])
      
    //   console.log(`${this.img[itemImg].id} : ${this.btnChecked[i].id}`)
    //   console.log(itemImg)
    // } 
  }

}
$( () => {
  $('[data-toggle="tooltip"]').tooltip();
});
