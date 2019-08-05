import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { UsersService } from '../home/services/users.service'
import { environment } from '../../../environments/environment'
import { CookieService } from 'ngx-cookie-service'


@Component({
    selector: 'app-administrator',
    templateUrl: './administrator.component.html',
    styleUrls: ['./administrator.component.scss']
})

export class AdministratorComponent {
    // Datos de usuario
    idUserAdmon:any
    userDateAdmon:any

    // Menu
    menuUser:boolean = false;
    menuNavBar:boolean = false;

    constructor(
        private _user: UsersService,
        private cookieService: CookieService
    ){

    }
    ngOnInit(){
        this.getDatesAdmon()
    }
    showMenuUser(){
        this.menuUser =! this.menuUser
    }

    showMenuNavBar(){
        this.menuNavBar = ! this.menuNavBar
    }

    // Datos del perfil del administrador
    getDatesAdmon(){
        this._user.getDatesUser().subscribe((data) => {
            this.userDateAdmon = data
            console.log(data)
        },
        (error) => console.log(error)
        
        )
    }

    // Imagen del usuario administrador
    getImgUserAdmon(id){
        return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
    }
}
