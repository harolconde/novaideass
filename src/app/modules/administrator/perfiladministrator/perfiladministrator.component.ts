import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-perfiladministrator',
  templateUrl: './perfiladministrator.component.html',
  styleUrls: ['./perfiladministrator.component.scss']
})
export class PerfiladministratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
