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
