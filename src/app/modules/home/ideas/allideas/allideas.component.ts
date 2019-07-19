import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../../services/ideas.service';
import { environment } from '../../../../../environments/environment'
import * as $ from 'jquery'
declare var $:any

export interface myIdeaAll{
  obj : Object;
}

@Component({
  selector: 'app-allideas',
  templateUrl: './allideas.component.html',
  styleUrls: ['./allideas.component.scss']
})

export class AllideasComponent implements OnInit {

  //Filtro de busqueda mostrar todas las ideas
  inputFilter:any = document.querySelector('#inputFilterSearch')
  btnSearch:any = document.getElementById('btnFilterSearch')

  //Variables mostrar idea completa
  btnShowIdea:any = document.getElementsByClassName('btnSeeMoreMessageAllIdeas')
  textCollapse:any = document.getElementsByClassName('ideaMessageChatUsersAllIdeas')
  panelReply:any = document.getElementsByClassName('containerDisplayReplyAllIdeas')
  btnMinus:any = document.getElementsByClassName('iconMoreMinusAllIdeas')
  stateCollapseAllIdea:boolean = false;

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[]
  comments:any[]
  constructor(private _service:IdeasService) {

   }
   getDataAllIdeas():void{
     this._service.getIdeas().subscribe((data)=>{
      this.ideas = data;
     })
   }
  ngOnInit() {
    this.getDataAllIdeas()
  }
  filterIdeas(){
    let texto = this.inputFilter.value.toLowerCase()
    let contenido = ''
    console.log(texto)
  }

  // Asignar id de idea a parametro del servicio
  getId(i){
    let idIdeas = document.getElementsByClassName('containerIdeaCredentials')
    let ideaId = idIdeas[i].id
    console.log(ideaId)
    return this._service.idIdeas = ideaId 
    
  }


  // Animacion evntos chat de ideas 
  collapseIdeaAll(i){
    this.getComments();
    const panelReplyAll:any = document.getElementsByClassName('containerDisplayReplyAllIdeas')
    const idIdeaCollapseAll:any = document.getElementById(this.textCollapse[i].id)
    const idPanelAll:any = panelReplyAll[i].id
    let butAll = document.getElementsByClassName('btnSeeMoreMessageAllIdeas')
    let idbutton = butAll[i].id
    let plusAll = document.getElementsByClassName('iconMoreMinusAllIdeas')
    let iPlusAll = `${plusAll[i].id}`
    
    if($('#'+idPanelAll).is(":visible")){
      
      $('#'+idPanelAll).toggle("swing",function(){
        $(this).hide(500)
        $('#'+iPlusAll).removeClass("fa-minus")
        $('#'+iPlusAll).addClass("fa-plus")
      })
    }
    else{
      $(panelReplyAll).hide()
      $('#'+iPlusAll).removeClass("fa-minus")
      $(plusAll).addClass("fa-plus")
      $('#'+idPanelAll).toggle("swing",function(){
        $(this).show(500)
        $('#'+iPlusAll).removeClass("fa-plus")
        $('#'+iPlusAll).addClass("fa-minus")
      })
    }
  }

  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

  // Get imagen de usuario
  getImgUser(id){
    return environment.endpoint + `/Image?idUsers=${id}`
  }

  // Get comentarios ideas
  getComments():void{
    this._service.getAllComents().subscribe((data) =>{
      this.comments = data;
      //console.log(data)
    })
  }
  // Popover votos
  popLikesAll(i){
    const votes: any = document.getElementsByClassName('votosAll')
    let myId: any = votes[i].id
    //console.log(myId)
    $('#'+myId).toggle(500)
  }
}
