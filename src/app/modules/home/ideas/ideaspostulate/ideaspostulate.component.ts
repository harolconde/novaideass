import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideaspostulate',
  templateUrl: './ideaspostulate.component.html',
  styleUrls: ['./ideaspostulate.component.scss']
})
export class IdeaspostulateComponent implements OnInit {

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[] = []

  constructor() { }

  ngOnInit() {
  }

  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

}
