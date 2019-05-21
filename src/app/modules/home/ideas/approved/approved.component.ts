import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {

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
