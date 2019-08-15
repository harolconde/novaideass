import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { IdeasService } from '../../home/services/ideas.service'
import { FormBuilder, Validators } from "@angular/forms"
import  * as $ from 'jquery';
import { environment } from '../../../../environments/environment';
import { IdeasModel } from '../../home/models/modelIdea'
import { HttpClient, HttpHeaders } from '@angular/common/http'
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
  idIdea:any

  // Imagen
  imgIdeasSrc:string ='/assets/img/pics/photo.svg'
  fileUpload: File = null;

  public idCarousell:boolean = false
  public imgsList:any

  @Input() id: string;
  @Input() maxSize: number = 7
  @Output() pageChange: EventEmitter<number>;
  @Output() pageChange2: EventEmitter<number>;

  constructor(
    private _ideas : IdeasService,
    private http : HttpClient
  ) { }
  
  ngOnInit() {
    this.getAdminAllIdeas()

    // Pagination ngx
    this.pageChange = new EventEmitter(true);


    ///this.getImgsIdea(this.id)

  }


  getAdminAllIdeas(){
    this._ideas.getIdeasAdmin().subscribe((data) => {
      this.ideas = data
      console.log(data)
    })
  }

  // Imagenes de perfil usuarios
  getImgUser(id){
    return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
  }
  getIdIdea(id){
    this.idIdea = id
    console.log(this.idIdea)
    return this.idIdea
  }
  getListImgsIdeas(id){
    return this.http.get(`${environment.endpoint}/opcion=2&ideasIdIdea=${id}`)
  }
  getImgsIdea(id){
    return this.http.get(`${environment.endpoint}/opcion=2&ideasIdIdea=${id}`).subscribe(data =>{
      
      console.log(data)
      
    })
  }
  // Cancelar subida de imagenes
  cancelUploadImg(){
    this.imgIdeasSrc = '/assets/img/pics/photo.svg'
  }
  // Subir imagen a una idea.
  selectImg(file: FileList) {
    this.fileUpload = file.item(0);

    // Upload image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgIdeasSrc = event.target.result;
    };
    reader.readAsDataURL(this.fileUpload);

  }


  // Post images ideas
  postImgeIdeas(){
    
    //console.log(this.idIdea)
    const uploadImg = new FormData()
    
    uploadImg.append('myFile', this.fileUpload, this.fileUpload.name)
    this.http.post(`${environment.endpoint}/Attachments?opcion=3&idIdea=${this.idIdea}`, uploadImg, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event =>{
      console.log(event)
    })
  }

  showImgListOfIdeas(id){
    let listImgContainer:any = document.getElementById(`carousel-${id}`)
    console.log(id)
    this.http.get(`${environment.endpoint}/Attachments?opcion=2&ideasIdIdea=${id}`).subscribe( data => {
      this.imgsList = data
      console.log(data)
      console.log()
      if(this.imgsList.lenght > 0 ){
        console.log(1)
      }
      else{
        console.log(0)
      }
      
    })
    console.log(listImgContainer.style.display = 'none')
    if(this.idCarousell == false){
      listImgContainer.style.display = 'block'
      this.idCarousell =! this.idCarousell
    }
    else{
      listImgContainer.style.display = 'none'
      this.idCarousell =! this.idCarousell
    }
  }

  hideModalsAll(){
    $('.modal').modal('hide')
  }
}
(() => {
  $('[data-toggle="tooltip"]').tooltip()
});
