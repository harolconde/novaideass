import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../login/services/authentication.service'
import { Router, ActivatedRoute } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import * as $ from 'jquery'
declare var $:any

@Component({
	selector: 'app-datesuser',
	templateUrl: './datesuser.component.html',
	styleUrls: ['./datesuser.component.scss']
}) 
export class DatesuserComponent implements OnInit {

	
	idUser:any 
	menuUser:boolean = false;
	
	constructor(
		private router: ActivatedRoute,
		private route: Router,
		private _idsession: AuthenticationService,
		private cookieSession: CookieService	
	) { }


	ngOnInit() {
		this.idUser = this.cookieSession.get('session')
		//console.log(this.idUser)
		setTimeout(() =>{
			if(this.idUser == 0){
				this.route.navigate(['/'])
			}
		}, 400)
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
	
	loggoutApp(){
		setTimeout(()=>{
			this.cookieSession.delete('session')
		},100)
		this.route.navigate(['/'])

	}
  
}

