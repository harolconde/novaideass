import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { IdeasService } from '../../home/services/ideas.service'
import { FormBuilder, Validators } from "@angular/forms"
import * as $ from 'jquery';
import { environment } from '../../../../environments/environment';
import { IdeasModel } from '../../home/models/modelIdea'
import { HttpClient, HttpHeaders } from '@angular/common/http'
//import { url } from 'inspector';
declare var $: any;

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
    ideas: any[]
    idIdea: any

    // Imagen
    imgIdeasSrc: string = '/assets/img/pics/photo.svg'
    fileUpload: File = null;

    public idCarousell: boolean = false
    public imgsList: any = []
    public idImgIdea: any = []
    public cadena:any = []

    @Input() id: string;
    @Input() maxSize: number = 7
    @Output() pageChange: EventEmitter<number>;
    @Output() pageChange2: EventEmitter<number>;

    constructor(
        private _ideas: IdeasService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.getAdminAllIdeas()

        // Pagination ngx
        this.pageChange = new EventEmitter(true);

        ///this.getImgsIdea(this.id)

    }


    getAdminAllIdeas() {
        this._ideas.getIdeasAdmin().subscribe((data) => {
            this.ideas = data
            console.log(data)
        })
    }

    // Imagenes de perfil usuarios
    getImgUser(id) {
        return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
    }
    getIdIdea(id) {
        this.idIdea = id
        console.log(this.idIdea)
        return this.idIdea
    }
    getListImgsIdeas(id) {
        return this.http.get(`${environment.endpoint}/opcion=2&ideasIdIdea=${id}`)
    }
    getImgsIdea(id) {
        return this.http.get(`${environment.endpoint}/opcion=2&ideasIdIdea=${id}`).subscribe(data => {

            console.log(data)

        })
    }
    // Cancelar subida de imagenes
    cancelUploadImg() {
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
    postImgeIdeas() {

        //console.log(this.idIdea)
        const uploadImg = new FormData()

        uploadImg.append('myFile', this.fileUpload, this.fileUpload.name)
        this.http.post(`${environment.endpoint}/Attachments?opcion=3&idIdea=${this.idIdea}`, uploadImg, {
            reportProgress: true,
            observe: 'events'
        }).subscribe(event => {
            console.log(event)
        })
    }

    // Obtener todas las imagenes de las ideas
    showImgListOfIdeas(id) {
        let listImgContainer: any = document.getElementById(`carousel-${id}`)
        let listImagesIdeas: any = document.getElementsByClassName('carouselContainerImgsIdeas')
        this.http.get(`${environment.endpoint}/Attachments?opcion=2&ideasIdIdea=${id}`).subscribe(data => {
            this.imgsList = data
            console.log(this.imgsList)
            if (this.imgsList[0].IdAttachments > 0) {
                console.log(1)
                this.idImgIdea = this.imgsList[0].IdAttachments
                console.log(this.idImgIdea)
            }
            else {
                console.log(0)
            }
        })
        for (let i = 0; i < listImagesIdeas.length; i++) {
            listImagesIdeas[i].style.display = "none"
            this.idCarousell = false
        }
        if (this.idCarousell == false) {
            listImgContainer.style.display = 'block'
            this.idCarousell = !this.idCarousell
        }
        else {
            //listImagesIdeas[i].style.display = "none"
            listImgContainer.style.display = 'none'
            this.idCarousell = !this.idCarousell
        }
        // Mostrar imagenes retornadas 
        setTimeout(() => {
            this.getTemplateImgsCarousell(id)
        },300)
    }

    // Retornar las imagenes de las ideas
    getImgIdeas(id) {
       //debugger
        let urls : any [];
        
        for(let img of this.imgsList){
            console.log(img)
            urls = img
            this.cadena = environment.endpoint + `/Attachments?opcion=1&idAttachments=${img.IdAttachments}&ideasIdIdea=${id}`
            for(let i of urls){
                console.log(i)
            }
        }
        console.log(this.cadena)
        //console.log(urls)
        return this.cadena;
    }

    // Adicionar clase activa al primer elemento del carrusel de imagenes de las ideas
    getTemplateImgsCarousell(id) {
        let carouselContainer:any = document.getElementById(`imgCarousel-${id}-0`)
        // Adicionar clase activa
        carouselContainer.classList.add('active')
    }

    hideModalsAll() {
        $('.modal').modal('hide')
    }
}
(() => {
    $('[data-toggle="tooltip"]').tooltip()
});
