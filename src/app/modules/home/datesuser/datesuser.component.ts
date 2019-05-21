import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datesuser',
  templateUrl: './datesuser.component.html',
  styleUrls: ['./datesuser.component.scss']
})
export class DatesuserComponent implements OnInit {

  menuUser:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  showMenuUser(){
    this.menuUser =! this.menuUser
  }

}
