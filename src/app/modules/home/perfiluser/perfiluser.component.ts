import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var $:any;

@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.scss']
})
export class PerfiluserComponent implements OnInit {

  // Subir imagen de perfil del usuario
  imgSrc: string = '/assets/img/users/user.svg';
  fileUpload: File = null;

  // Menu de navegacion
  menuComponents: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // Menu de navegacion
  showMenuNav() {
    this.menuComponents = ! this.menuComponents;
  }

  // Subir imagen de perfil del usuario.
  selectImg(file: FileList) {
    this.fileUpload = file.item(0);

    // Upload image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgSrc = event.target.result;
    };
    reader.readAsDataURL(this.fileUpload);

  }
}
$( () => {
  $('[data-toggle="tooltip"]').tooltip();
});
