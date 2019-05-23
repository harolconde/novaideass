import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
    selector: 'app-administrator',
    templateUrl: './administrator.component.html',
    styleUrls: ['./administrator.component.scss']
})

export class AdministratorComponent {
    // Menu
    menuUser:boolean = false;
    menuNavBar:boolean = false;

    showMenuUser(){
        this.menuUser =! this.menuUser
    }

    showMenuNavBar(){
        this.menuNavBar = ! this.menuNavBar
    }

}
