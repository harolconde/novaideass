import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
  import { from } from 'rxjs';

@Component({
  selector: 'app-finishideas',
  templateUrl: './finishideas.component.html',
  styleUrls: ['./finishideas.component.scss']
})
export class FinishideasComponent implements OnInit { 

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[] = []

  constructor(private _service: IdeasService) { }

  ngOnInit() {
    this.getAllFinishIdeas()
  }
  
  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

  // Todas las ideas finalizadas
  getAllFinishIdeas():void{
    this._service.getIdeasAllFinish().subscribe((data) => {
      this.ideas = data
    })
  }

}
