import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../services/ideas.service';

import * as $ from 'jquery';
import { and } from '@angular/router/src/utils/collection';

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

  constructor(private _service : IdeasService) {

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
    this._service.idIdeas = ideaId
  }
  getComments(): void{
    this._service.getAllComents().subscribe((data) =>{
      this.comments = data;
      console.log(data)
    })
  }

  ngOnInit() {
    this.getListIdeas();
  }
  
  collapseIdea(i){
    this.getComments();
    const idIdeaCollapse:any = document.getElementById(this.textCollapse[i].id)
    const idPanel:any = document.getElementById(this.panelReply[i].id)
    const idBtn:any = document.getElementById(this.btnShowIdea[i].id)
    
    for(let j = 0; j < this.textCollapse.length; j++){
      this.textCollapse[j].style.whiteSpace = "nowrap"
      this.panelReply[j].style.display = "none"
      this.btnShowIdea[j].style.backgroundColor = '#fafafa'
      this.stateCollapseIdea = false;
      if(this.stateCollapseIdea == false)
      {
        idIdeaCollapse.style.whiteSpace = "normal"
        idIdeaCollapse.style.transitionDuration = "0.5s"
        idPanel.style.display = 'flex'
        idPanel.style.transition = 'all 500ms linear'
        idBtn.style.backgroundColor = '#f1f1f1'
        this.btnMinus[i].classList.remove('fa-minus')
        this.btnMinus[i].classList.add('fa-plus')
        console.log(`Idea ${this.btnShowIdea[i]}`)
        this.stateCollapseIdea = true
      }
      else{
        idIdeaCollapse.style.whiteSpace = "nowrap"
        idIdeaCollapse.style.transitionDuration = "0.5s"
        idPanel.style.display = 'none'
        idPanel.style.transition = 'all 500ms linear'
        idBtn.style.backgroundColor = '#fafafa'
        this.btnMinus[i].classList.remove('fa-plus')
        this.btnMinus[i].classList.add('fa-minus')
        this.stateCollapseIdea = false
      }
      
    }
    this.stateCollapseIdea = true;
    console.log(this.stateCollapseIdea)
    // if(this.stateCollapseIdea == false){
    //   this.textCollapse[i].style.whiteSpace = "normal"
    //   this.textCollapse[i].style.transitionDuration = "0.5s"
    //   this.panelReply[i].style.display = 'flex'
    //   this.panelReply[i].style.transition = 'all 500ms linear'
    //   this.btnShowIdea[i].style.backgroundColor = '#f1f1f1'
    //   this.btnShowIdea[i].style.fontWeight = '600'
    //   this.btnShowIdea[i].style.border = '1px solid #ddd'
    //   this.btnShowIdea[i].style.borderRadius = '22px'
    //   this.btnShowIdea[i].style.transition = 'all 700ms linear'
    //   this.btnMinus[i].classList.remove('fa-plus')
    //   this.btnMinus[i].classList.add('fa-minus')
    //   this.stateCollapseIdea = true
    // }
    // else{
    //   this.textCollapse[i].style.whiteSpace = "nowrap"
    //   this.textCollapse[i].style.transitionDuration = "0.5s"
    //   this.panelReply[i].style.display = 'none'
    //   this.panelReply[i].style.transition = 'all 500ms linear'
    //   this.btnShowIdea[i].style.backgroundColor = '#fafafa'
    //   this.btnShowIdea[i].style.fontWeight = '400'
    //   this.btnShowIdea[i].style.border= '1px solid transparent'
    //   this.btnShowIdea[i].style.borderRadius = '5px'
    //   this.btnShowIdea[i].style.transition = 'all 700ms linear'
    //   this.btnMinus[i].classList.remove('fa-minus')
    //   this.btnMinus[i].classList.add('fa-plus')
    //   this.stateCollapseIdea = false
    // }
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
