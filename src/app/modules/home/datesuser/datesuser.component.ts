import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
declare var $:any

@Component({
	selector: 'app-datesuser',
	templateUrl: './datesuser.component.html',
	styleUrls: ['./datesuser.component.scss']
}) 
export class DatesuserComponent implements OnInit {

	menuUser:boolean = false;
	
	constructor() { }

	ngOnInit() {
		var menu = $('.infoPerfil')
		$('.btnDatesUser').mouseenter(function(){
			$(menu).css({
					'display' : 'flex'
				})
				.mouseleave(function(){
					$(this).css({
						'display' : 'none'
					})
				})
		})
		
		
		
	}
	showMenuUser(){
		return this.menuUser =! this.menuUser
	}
	
  
}

