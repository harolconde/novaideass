import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of, from } from 'rxjs';
import { IdeasModel } from '../models/modelIdea';
import { IdeasResponseModel } from '../models/modelResponseIdea'
import { modelComments } from '../models/modelComments'
import { votesModel } from '../models/modelVotes'
import { internalIdea } from'../models/ideaInterna'
import { environment } from '../../../../environments/environment'
import { modelVotes } from '../models/votesModel'
import { shiftInitState } from '@angular/core/src/view';
import { CookieService } from 'ngx-cookie-service';
import { EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class IdeasService {
    ideas:any[]
    public id:any
    public resp:any = 0
    public respInternas:boolean = false
    public estado:any = 1

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    // Nombre de controladores
    public nameController:string = 'dashboard1'
    public nameController2:string = 'dashboard2'
    public nameController3:string = 'dashboard3'
    public nameController4:string = 'dashboard4'
    private ArrayG: Array<IdeasResponseModel>

    constructor(private http: HttpClient, private cookieService: CookieService) {
        
    }

    // Peticiones Get
    public idIdeas : any 
    public opcionComments:number = 1
    // fechas
    date: any = new Date()
    year: any = this.date.getFullYear()
    month: any = this.date.getMonth()+1
    day: any = this.date.getDate()
    monthFull:any = (this.month < 10) ? '0' + this.month : this.month // Adicionar '0' al mes
    fechatFin: any = `${this.year}${this.monthFull}${this.day}`
    fechaInit: any = `${this.year}${this.monthFull}01`
    

    // Todas las ideas
    getIdeas() : Observable<any>{
        console.log(this.fechaInit)
        console.log(this.fechatFin)
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=1&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas
    getIdeasLast() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=1&tipoc=1&fechaInic=20190517&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    // Ultimas catro ideas en debate
    getIdeasLastDebate() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=3&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    getIdeasAllDebate() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=3&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas aprovadas
    getIdeasLastApproved() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=2&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Todas las ideas aprovadas
    getIdeasAllApproved() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=2&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas finalizadas
    getIdeasLastFinish() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=7&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Todas las ideas finalizadas
    getIdeasAllFinish() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=7&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Ultimas cuatro ideas muertas
    getIdeasLastDead(): Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=5&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    // Ultimas cuatro ideas mas votadas
    getIdeasMoreVotes(): Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController4}?opcionc=4&estadoc=0&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    
    getIdeasAdmin() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController}?opcionc=1&estadoc=${this.estado}&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }

    // Idea en detalle
    getIdeaDetalle(): Observable<any>{
        console.log(this.id)
        return this.http.get(`${environment.endpoint}/dashboard5?opcionc=5&estadoc=0&tipoc=0&fechaInic=20190720&fechaFinc=20190720&rownumberc=${this.id}`)
    }
    // ************************************** //
    // Todas las ideas postuladas por usuario //
    // ************************************** //


    // Todas las ideas postuladas por un usuario
    getIdeasAllForUser(): Observable<any>{
        this.id = this.cookieService.get('session')
        return this.http.get(`${environment.endpoint}/IdeasUsers?ideasIdUser=${this.id}&rowNumber=1`)
    }

    // Ultimas cuatro
    getIdeasUser():Observable<any>{
        this.id = this.cookieService.get('session')
        return this.http.get(`${environment.endpoint}/IdeasUsers?ideasIdUser=${this.id}&rowNumber=4`)
    }
    // Todas
    getIdeasUserAll():Observable<any>{
        this.id = this.cookieService.get('session')
        return this.http.get(`${environment.endpoint}/IdeasUsers?ideasIdUser=${this.id}&rowNumber=0`) 
    }
    // Las cuatro mas votadas
    getIdeasUserMoreVotes():Observable<any>{
        this.id = this.cookieService.get('session')
        return this.http.get(`${environment.endpoint}/IdeasUsersVotes?ideaIdUser=${this.id}`)
    }


    // Ultimas cuatro opiniones
    getCommentsForUser():Observable<any>{
        this.id = this.cookieService.get('session')
        return this.http.get(`${environment.endpoint}/CommentsUsersIdeas?opcion=1&commentsIdUser=${this.id}&rowNumber=4`)
    }
    // Todos los comentarios por usuario
    getCommentsAllForUser():Observable<any>{
        this.id = this.cookieService.get('session')
        console.log(this.opcionComments)
        return this.http.get(`${environment.endpoint}/CommentsUsersIdeas?opcion=${this.opcionComments}&commentsIdUser=${this.id}&rowNumber=0`)
    }
    // Todos los comentarios generales
    getCommentsAllForUserAll():Observable<any>{
        return this.http.get(`${environment.endpoint}/CommentsUsersIdeas?opcion=2&commentsIdUser=0&rowNumber=0`) 
    }

    getDataIdeas(){
        return this.ideas
    }

    getIdIdeas(id){
        return this.idIdeas[id]
    }
    // Todos los comentarios por idea
    getAllComents() : Observable<any>{
        return this.http.get(`${environment.endpoint}/${this.nameController3}?opcionc=3&estadoc=0&tipoc=0&fechaInic=20180101&fechaFinc=20180101&rownumberc=${this.id}`)
    }

    // ***************************************************************** //
    // **************************  Ideas internas ********************** //
    // ***************************************************************** //

    postIdeasInternal(internal:internalIdea){
        const dataInterna = new internalIdea()
        dataInterna.emisor = internal.emisor
        dataInterna.password = internal.password
        dataInterna.mensaje = internal.mensaje
        dataInterna.asunto = internal.asunto
        dataInterna.destinatario = internal.destinatario
        dataInterna.rutaAdjunto = internal.rutaAdjunto
        dataInterna.idUser = internal.idUser
        console.log(dataInterna)
        let headersHTTP = new HttpHeaders().set('Content-Type','application/json')
        this.http.post(`${environment.endpoint}/SendMail`,dataInterna,{
            headers : headersHTTP,
            observe: 'response'
        }).subscribe( resp => { 
            console.log(resp)
            this.respInternas = resp.ok
            this.change.emit(this.respInternas)
        })
    }

    // ***************************************************************** //
    // ********************** Peticiones Post ************************** //
    // ***************************************************************** //

    // Peticion post nueva idea
    postSendIdea(ideam: IdeasModel) {
        const dataIdea = new IdeasModel()
        dataIdea.opcion = ideam.opcion
        dataIdea.idUsuario = ideam.idUsuario       
        dataIdea.id = ideam.id
        dataIdea.ideaText = ideam.ideaText
        dataIdea.ideaType = ideam.ideaType
        dataIdea.status = ideam.status

        
        let headersHttp = new HttpHeaders().set('Content-Type','application/json')
        console.log(dataIdea)
        this.http.post(`${environment.endpoint}/tallerIdeas`, dataIdea,{
            headers : headersHttp,
            observe : 'response' 
        }).subscribe(resp => {
            console.log(resp)
        })  
    }

    // Peticion post nuevo comentario
    postSendComment(myComment: modelComments){
        const dataComment = new modelComments()
        dataComment.opcion = myComment.opcion
        dataComment.idIdea = myComment.idIdea
        dataComment.idUser = myComment.idUser
        dataComment.comentsText = myComment.comentsText
        dataComment.idComents = myComment.idComents
        
        let headersHttp = new HttpHeaders().set('Content-Type','application/json')
        this.http.post(`${environment.endpoint}/tallerComents`, dataComment, {
            headers : headersHttp,
            observe : 'response'
        }).subscribe(resp => {
            console.log(resp)
        })
    }

    // Peticion post votos
    

    // ********************************************************************* //
    // ************************* Peticiones Votos ************************** //
    // ********************************************************************* //

    // Votar
    postSendVote(voting: votesModel){
        const vote = new votesModel()
        vote.opcion = voting.opcion
        vote.idVote = voting.idVote
        vote.idIdea = voting.idIdea
        vote.idUser = voting.idUser
        vote.voteType = voting.voteType
        
        //console.log(vote)
        let headersHttp = new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<any>(`${environment.endpoint}/tallerVotes`, vote, {
            headers : headersHttp,
            observe : 'response' 
        }).subscribe((resp) => {
            console.log(resp)
            this.resp = resp.body
            this.change.emit(this.resp)
            console.log(this.resp)
        })
    }

    // Id voto
    getIdVote(){
        this.id = this.cookieService.get('session')
        return this.http.get(`${environment.endpoint}/GetVotes?idUser=${this.id}&idIdea=${this.idIdeas}`)
    }
    // Update Voto
    putSendVote(votingUpd: votesModel){
        const voteUpd = new votesModel()
        voteUpd.opcion = votingUpd.opcion
        voteUpd.idVote = votingUpd.idVote
        voteUpd.idIdea = votingUpd.idIdea
        voteUpd.idUser = votingUpd.idUser
        voteUpd.voteType = votingUpd.voteType

        let headersHTTP = new HttpHeaders().set('Content-Type','application/json')
        return this.http.put(`${environment.endpoint}/tallerVotes`, voteUpd,{
            headers : headersHTTP,
            observe : 'response'  
        })
    }

    // *************************************** //
    // ************** IMAGENES *************** //
    // *************************************** //

    // GETS
    getImgsIdeasAll(){
        return this.http.get(`${environment.endpoint}/Attachments?opcion=2&ideasIdIdea=${this.idIdeas}`)
    }

    // POSTS

    // Add Images to idea finish
    postImgIidea(ideaId : IdeasModel){
        const dataId = new IdeasModel()
        dataId.id = ideaId.id
        dataId.opcion =ideaId.opcion
        let headersHTTP = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.post(`${environment.endpoint}/Attachments?`, ideaId,{
            headers : headersHTTP,
            observe : 'response'
        }).subscribe(event => {
            console.log(event)
        }) 
    }
}
