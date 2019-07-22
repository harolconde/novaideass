import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IdeasService } from './../../services/ideas.service';
import { environment } from '../../../../../environments/environment'
import * as $ from 'jquery'
declare var $:any 

@Component({
  selector: 'app-deadideas',
  templateUrl: './deadideas.component.html',
  styleUrls: ['./deadideas.component.scss']
})
export class DeadideasComponent implements OnInit {

  //Variables mostrar idea completa
  btnShowIdea:any = document.getElementsByClassName('btnSeeMoreMessageIdeasDead')
  
  btnMinus:any = document.getElementsByClassName('iconMoreMinusIdeasDead')
  stateCollapseAllIdea:boolean = false;

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[]
  comments:any[]

  // Pagination ngx
  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;

  constructor(private _service:IdeasService) {
   }

  ngOnInit() {
    this.getIdeasDead()

    // Inicializacion pagination ngx
    this.pageChange = new EventEmitter(true)
  }

  getIdeasDead(): void{
    this._service.getIdeas().subscribe((data) => {
      this.ideas = data;
    })
  }

  getCommentsDead(){
    this._service.getAllComents().subscribe((data) => {
      this.comments = data
      console.log(data)
    })
  }

  // Colapsar idea y mostrar comentario
  collapseIdea(i){
    this.getCommentsDead()
    //let panelCommentsList = document.getElementsByClassName('listGroupHidden')
    let panelReplyDead = document.getElementsByClassName('containerDisplayReplyIdeasDead')
    let btnSeeMoreDead = document.getElementsByClassName('btnSeeMoreMessageIdeasDead')
    let btnForIdea = btnSeeMoreDead[i].id
    let panelComments = panelReplyDead[i].id
    let plusDead = document.getElementsByClassName('iconMoreMinusIdeasDead')
    let iPlusDead = `${plusDead[i].id}`
    console.log(btnForIdea)
    if($('#'+panelComments).is(":visible")){
      $('#'+panelComments).toggle(500,function(){ 
        $(this).hide(500)
        $('#'+iPlusDead).removeClass("fa-minus")
        $('#'+iPlusDead).addClass("fa-plus")
      })
    }
    else{
      $(panelReplyDead).hide()
      $('#'+panelComments).toggle(500,function(){
        $(this).show(500)
        $('#'+iPlusDead).removeClass("fa-plus")
        $('#'+iPlusDead).addClass("fa-minus")
      })
    }
  }

   //Menú navegacion
   showMenuNav(){
    this.menuComponents =! this.menuComponents
  }

  // Obtener imagen usuario
  getImgUser(id){
    return environment.endpoint + `/Image?idUsers=${id}`
  }

  // Obtener id de la idea
  getIdIdea(i){
    const idIdea = document.getElementsByClassName('containerIdeaCredentials')
    let id = idIdea[i].id
    return this._service.idIdeas = id
  }


}
