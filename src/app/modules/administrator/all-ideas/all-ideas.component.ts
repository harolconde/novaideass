import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { IdeasService } from '../../home/services/ideas.service'
import { FormBuilder, Validators } from "@angular/forms"
import  * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.scss']
})
export class AllIdeasComponent implements OnInit {

  // Formulario
  isSubmit: false
  formChecked: FormBuilder
  // Ideas
  ideas:any []

  // Imagen
  imgIdeasSrc:string ='/assets/img/pics/photo.svg'
  fileUpload: File = null;

  @Input() id: string;
  @Input() maxSize: number = 7
  @Output() pageChange: EventEmitter<number>;
  @Output() pageChange2: EventEmitter<number>;

  constructor(
    private _ideas:IdeasService
  ) { }

  ngOnInit() {
    this.getAdminAllIdeas()

    // Pagination ngx
    this.pageChange = new EventEmitter(true);

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

  getAdminAllIdeas(){
    this._ideas.getIdeasAdmin().subscribe((data) => {
      this.ideas = data
      console.log(data)
    })
  }

}
(() => {
  $('[data-toggle="tooltip"]').tooltip()
});
