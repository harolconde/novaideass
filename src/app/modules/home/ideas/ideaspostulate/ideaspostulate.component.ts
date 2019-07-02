import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-ideaspostulate',
  templateUrl: './ideaspostulate.component.html',
  styleUrls: ['./ideaspostulate.component.scss']
})
export class IdeaspostulateComponent implements OnInit {

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[] = []

  constructor(private _service:IdeasService ) { }

  ngOnInit() {
    this.getAllIdeas()
  }

  getAllIdeas(){
    this._service.getIdeas().subscribe((data)=>{
      this.ideas = data
    })
  }

  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

}
