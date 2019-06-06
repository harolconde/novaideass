import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
declare var $:any

@Component({
  selector: 'app-all-comments-user',
  templateUrl: './all-comments-user.component.html',
  styleUrls: ['./all-comments-user.component.scss']
})
export class AllCommentsUserComponent implements OnInit {

  menuComponents:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showMenuUser(){
    this.menuComponents = ! this.menuComponents 
  }
}
$(()=>{
  $('[data-toggle="tooltip"]').tooltip()
})
