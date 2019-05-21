import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  // Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

  // Boton ver mas
  showDescriptionAdd(){
    this.btnSeeMore = ! this.btnSeeMore
  }
}
