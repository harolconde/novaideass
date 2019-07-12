import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
import { environment } from '../../../../../environments/environment'
import * as $ from 'jquery'
declare var $:any 

@Component({
  selector: 'app-debate',
  templateUrl: './debate.component.html',
  styleUrls: ['./debate.component.scss']
})
export class DebateComponent implements OnInit {

  // Menu navegacion
  menuComponents:boolean = false
  // Boton ver mas
  public btnSeeMore:boolean = false

  ideas:any[] = []
  comments:any[] = []
  constructor(private _service: IdeasService) { }

  ngOnInit() {
    this.getAllIdeasDebate()
  }

  // Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

  // Traer todas las ideas en debate
  getAllIdeasDebate():void{
    this._service.getIdeasAllDebate().subscribe((data)=>{
      this.ideas = data
    })
  }

  // Get comments

  getIdComment(i){
    let commentClass = document.getElementsByClassName('cardDebate')
    let id = commentClass[i].id
    for(let c = 0; c < commentClass.length; c++){
      console.log(commentClass[c].id)
    }
  
    console.log(id)
    this._service.idIdeas = id
    
  }

  getCommentsDebate(): void{
    this._service.getAllComents().subscribe((data) =>{
      this.comments = data;
      console.log(data)
    })
  }

  // Get imagen Usuario
  getImgUser(id){
    return environment.endpoint + `/Image?idUsers=${id}`
  }

  // Boton ver mas
  showDescriptionAdd(i){
    this.getCommentsDebate()
    let panelComments = document.getElementsByClassName('listGroupHidden')
    let commentForIdea = panelComments[i].id
    if($('#'+commentForIdea).is(":visible")){
      $('#'+commentForIdea).toggle(500,function(){ 
        $(this).hide(500)
      })
    }
    else{
      $(panelComments).hide()
      $('#'+commentForIdea).toggle(500,function(){
        $(this).show(500)
      })
    }
  }
}
