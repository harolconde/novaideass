import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';

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

  constructor(private _service : IdeasService) {

   }

  getListIdeas(): void{
    this._service.getIdeas().subscribe((data) => {
      this.ideas = data;
      console.log("Vamos !!", data);
    }) 
  }

  ngOnInit() {
    this.getListIdeas();
  }
  
  
  collapseIdea(i){
    if(this.stateCollapseIdea == false){
      this.textCollapse[i].style.whiteSpace = "normal"
      this.textCollapse[i].style.transitionDuration = "0.5s"
      this.panelReply[i].style.display = 'flex'
      this.panelReply[i].style.transition = 'all 500ms linear'
      this.btnShowIdea[i].style.backgroundColor = '#f1f1f1'
      this.btnShowIdea[i].style.fontWeight = '600'
      this.btnShowIdea[i].style.border = '1px solid #ddd'
      this.btnShowIdea[i].style.borderRadius = '22px'
      this.btnShowIdea[i].style.transition = 'all 700ms linear'
      this.btnMinus[i].classList.remove('fa-plus')
      this.btnMinus[i].classList.add('fa-minus')
      this.stateCollapseIdea = true
    }
    else{
      this.textCollapse[i].style.whiteSpace = "nowrap"
      this.textCollapse[i].style.transitionDuration = "0.5s"
      this.panelReply[i].style.display = 'none'
      this.panelReply[i].style.transition = 'all 500ms linear'
      this.btnShowIdea[i].style.backgroundColor = '#fafafa'
      this.btnShowIdea[i].style.fontWeight = '400'
      this.btnShowIdea[i].style.border= '1px solid transparent'
      this.btnShowIdea[i].style.borderRadius = '5px'
      this.btnShowIdea[i].style.transition = 'all 700ms linear'
      this.btnMinus[i].classList.remove('fa-minus')
      this.btnMinus[i].classList.add('fa-plus')
      this.stateCollapseIdea = false
    }
  }

  //Add comments
  addComments(i){
    this.replyButton = ! this.replyButton
  }

  //Popover
  popLikes(i:any){
    const votes: any = document.getElementsByClassName('votos')
    let myId: any = votes[i].id
    const element: any = document.getElementById(myId)
    if(this.popovers == false){
      element.style.display = 'flex'
      this.popovers = ! this.popovers
    }
    else{
      element.style.display = 'none'
      this.popovers = ! this.popovers
    }
  }
  
  // Nuevo comentario
  newIdea(){
    this.generateIdea = ! this.generateIdea
  }


  //Responder a idea
  // replyIdea(i){
  //   this.commentAdd.push(this.textReplyMessage)
  //   console.log(this.commentAdd)
  // }

}
$(function(){
  $('[data-toggle="tooltip"]').tooltip();
})
