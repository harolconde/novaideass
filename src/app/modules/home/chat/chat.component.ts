import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';
import { IdeasModel } from '../models/modelIdea'
import { IdeasResponseModel } from '../models/modelResponseIdea'
import { FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms'
import { and } from '@angular/router/src/utils/collection';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { from } from 'rxjs';
import { modelComments } from '../models/modelComments';
import * as $ from 'jquery';

declare var $:any

export interface myIdea{
  obj: Object
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  //Variables mostrar idea completa
  //messageIdea:any =document.getElementsByClassName('ideaMessageChatUsers')
  btnShowIdea:any = document.getElementsByClassName('btnSeeMoreMessage')
  textCollapse:any = document.getElementsByClassName('ideaMessageChatUsers')
  panelReply:any = document.getElementsByClassName('containerDisplayReply')
  btnMinus:any = document.getElementsByClassName('iconMoreMinus')
  stateCollapseIdea:boolean = false;

  //Variables popover
  btnPopober:any = document.getElementsByClassName('imgHeart')
  popovers:boolean = false;

  // Agregar nueva idea
  generateIdea:boolean = false;

  //Replicar idea
  btnReply:any = document.getElementsByClassName('btnAddNewReply')
  layoutReply:any = document.getElementById('replyMessage')
  textReplyMessage:any = document.getElementById('input-reply-idea')
  replyButton:boolean = false;
  
  // Service Ideas

  //ideas:any[] = []
  ideas:any[]
  comments:any[]
  resultado: Array<IdeasResponseModel>

  // Formulario
  formulario: FormGroup
  // Formulario comentarios
  fcomentarios: FormGroup

  constructor(private _service : IdeasService, private fidea: FormBuilder) {
    // const ideap = new IdeasModel()
    // ideap.opcion = 1
    // ideap.idUsuario = 18
    // ideap.id = 141
    // ideap.ideaText = 'Esta es otra idea desde el post quemado.'
    // ideap.ideaType = 1
    // ideap.status = 1

    //this._service.postSendIdea(ideap)

  }

  getListIdeas(): void{
    this._service.getIdeas().subscribe((data) => {
      this.ideas = data;
      console.log("Vamos !!", data);
    }) 
  }
  getId(i){
    let idIdeas = document.getElementsByClassName('containerIdeaCredentials')
    let ideaId = idIdeas[i].id
    console.log(ideaId)
    return this._service.idIdeas = ideaId
  }
  getComments(): void{
    this._service.getAllComents().subscribe((data) =>{
      this.comments = data;
      console.log(data)
    })
  }
  
  ngOnInit() {
    
    this.formulario = this.fidea.group({
      idea: ['']
    })

    this.fcomentarios = this.fidea.group({
      comment: ['']
    })

    this.getListIdeas();

    $(function(){
      $('[data-toggle="tooltip"]').tooltip();
    })

  }

  // Evento submit nueva idea
  onSubmit(formValue:any){

    const ideap = new IdeasModel()
    ideap.opcion = 1
    ideap.idUsuario = 18
    ideap.id = 141
    ideap.ideaText = formValue.idea
    ideap.ideaType = 1
    ideap.status = 1

    this._service.postSendIdea(ideap)
  }
  // Evento submit nuevo comentario
  onSubmiComment(formValueComment:any, i){
    let idIdea = this.getId(i)
    let iddea = parseInt(idIdea)
    console.log(iddea)
    
    const commentp = new modelComments()
    commentp.opcion = 1
    commentp.idIdea = iddea
    commentp.idUser = 18
    commentp.comentsText = formValueComment.comment
    commentp.idComents = 0

    //this._service.postSendComment(commentp)
    
  }

  collapseIdea(i){
    this.getComments();
    const panelReply:any = document.getElementsByClassName('containerDisplayReply')
    const idIdeaCollapse:any = document.getElementById(this.textCollapse[i].id)
    const idPanel:any = panelReply[i].id
    let but = document.getElementsByClassName('btnSeeMoreMessage')
    let idbutton = but[i].id
    let plus = document.getElementsByClassName('iconMoreMinus')
    let iPlus = `${plus[i].id}`
    
    if($('#'+idPanel).is(":visible")){
      
      $('#'+idPanel).toggle("swing",function(){
        $(this).hide(500)
        $('#'+iPlus).removeClass("fa-minus")
        $('#'+iPlus).addClass("fa-plus")
      })
    }
    else{
      $(panelReply).hide()
      $('#'+iPlus).removeClass("fa-minus")
      $(plus).addClass("fa-plus")
      $('#'+idPanel).toggle("swing",function(){
        $(this).show(500)
        $('#'+iPlus).removeClass("fa-plus")
        $('#'+iPlus).addClass("fa-minus")
      })
    }
  }

  //Add comments
  addComments(i){
    let idPanel = document.getElementsByClassName('replyMessage')
    let id = idPanel[i].id
    let textareaInfo = document.getElementById(id)
    $('#'+id).toggle()
  }

  //Popover
  popLikes(i){
    const votes: any = document.getElementsByClassName('votos')
    let myId: any = votes[i].id
    console.log(myId)
    $('#'+myId).toggle(500)
  }
  
  // Nuevo comentario
  newIdea(){
    this.generateIdea = ! this.generateIdea
  }


}

