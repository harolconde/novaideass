import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[] = []

  constructor(private _service: IdeasService) { }

  ngOnInit() {
    this.getAllIdeasAproved()
  }

  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

  // Todas las ideas en estado aprovado
  getAllIdeasAproved():void{
    this._service.getIdeasAllApproved().subscribe((data) =>{
      this.ideas = data
      console.log(data)
    })
  }
}
