import { Injectable } from '@angular/core';
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
// interface myIdea{
//   obj: Object
// }

@Injectable({
    providedIn: 'root'
})
export class IdeasService {
    ideas:any[]
    public id:any
    resp:any
    
    // Nombre de controladores
    public nameController:string = 'dashboard1'
    public nameController2:string = 'dashboard2'
    public nameController3:string = 'dashboard3'
    public nameController4:string = 'dashboard4'
    private ArrayG: Array<IdeasResponseModel>

    constructor(private http: HttpClient) {
        
    }

    // Peticiones Get
    public idIdeas : any 
    public opcionComments:number = 1
    // fechas
    date: any = new Date()
    year: any = this.date.getFullYear()
    month: any = this.date.getMonth()+1
    day: any = this.date.getDate()
    fechatFin: any = this.year+this.month+this.day

    // Todas las ideas
    getIdeas() : Observable<any>{
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
        return this.http.get(`${environment.endpoint}/IdeasUsers?ideasIdUser=19&rowNumber=0`)
    }

    // Ultimas cuatro
    getIdeasUser():Observable<any>{
        return this.http.get(`${environment.endpoint}/IdeasUsers?ideasIdUser=19&rowNumber=4`)
    }
    // Todas
    getIdeasUserAll():Observable<any>{
        return this.http.get(`${environment.endpoint}/IdeasUsers?ideasIdUser=19&rowNumber=0`) 
    }
    // Las cuatro mas votadas
    getIdeasUserMoreVotes():Observable<any>{
        return this.http.get(`${environment.endpoint}/IdeasUsersVotes?ideaIdUser=19`)
    }


    // Ultimas cuatro opiniones
    getCommentsForUser():Observable<any>{
        return this.http.get(`${environment.endpoint}/CommentsUsersIdeas?opcion=1&commentsIdUser=19&rowNumber=4`)
    }
    // Todos los comentarios por usuario
    getCommentsAllForUser():Observable<any>{
        console.log(this.opcionComments)
        return this.http.get(`${environment.endpoint}/CommentsUsersIdeas?opcion=${this.opcionComments}&commentsIdUser=19&rowNumber=0`)
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
        return this.http.get(`${environment.endpoint}/${this.nameController3}?opcionc=3&estadoc=0&tipoc=0&fechaInic=20180101&fechaFinc=20180101&rownumberc=${this.idIdeas}`)
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
        this.http.post(`h${environment.endpoint}/SendMail`,dataInterna,{
            headers : headersHTTP,
            observe: 'response'
        }).subscribe( resp => {
            console.log(resp) 
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
        
        console.log(vote)
        let headersHttp = new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<any>(`${environment.endpoint}/tallerVotes`, vote, {
            headers : headersHttp,
            observe : 'response'
        }).subscribe((resp) => {
            console.log(resp)
            return this.resp = resp.body
        })
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
}
