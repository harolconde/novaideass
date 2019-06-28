import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'

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

  // Boton ver mas
  showDescriptionAdd(id:any){
    const list: any = document.getElementsByClassName('listGroupHidden')
    let myId : any = list.id = id
    const elementHidden: any = document.getElementById(myId)
    console.log(elementHidden)
    if(elementHidden.style.display == 'none'){
      elementHidden.style.display = 'flex'
      this.btnSeeMore = ! this.btnSeeMore 
    }
    else{
      elementHidden.style.display = 'none'
      this.btnSeeMore = ! this.btnSeeMore 
    }
  }
}
