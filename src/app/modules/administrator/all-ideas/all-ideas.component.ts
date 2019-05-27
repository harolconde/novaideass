import { Component, OnInit } from '@angular/core';
import  * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.scss']
})
export class AllIdeasComponent implements OnInit {

  imgIdeasSrc:string ='/assets/img/pics/photo.svg'
  fileUpload: File = null;
  constructor() { }

  ngOnInit() {
  }

  // Subir imagen de perfil del usuario.
  selectImg(file: FileList) {
    this.fileUpload = file.item(0);

    // Upload image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgIdeasSrc = event.target.result;
    };
    reader.readAsDataURL(this.fileUpload);

  }

}
(() => {
  $('[data-toggle="tooltip"]').tooltip()
});
