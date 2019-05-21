import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finishideas',
  templateUrl: './finishideas.component.html',
  styleUrls: ['./finishideas.component.scss']
})
export class FinishideasComponent implements OnInit {

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
