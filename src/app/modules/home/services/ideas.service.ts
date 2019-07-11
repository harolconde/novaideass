import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of, from } from 'rxjs';
import { IdeasModel } from '../models/modelIdea';
import { IdeasResponseModel } from '../models/modelResponseIdea'
import { modelComments } from '../models/modelComments'
import { votesModel } from '../models/modelVotes'
//import { environment } from 'src/environments/environment';

// interface myIdea{
//   obj: Object
// }

@Injectable({
    providedIn: 'root'
})
export class IdeasService {
    ideas:any[] 
    private ArrayG: Array<IdeasResponseModel>

    constructor(private http: HttpClient) {
        
    }

    // Peticiones Get
    public idIdeas : any 
    // fechas
    date: any = new Date()
    year: any = this.date.getFullYear()
    month: any = this.date.getMonth()+1
    day: any = this.date.getDate()
    fechatFin: any = this.year+this.month+this.day

    // Todas las ideas
    getIdeas() : Observable<any>{
        return this.http.get(` api/dashboard1?opcionc=1&estadoc=1&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas
    getIdeasLast() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=1&tipoc=1&fechaInic=20190517&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    // Ultimas catro ideas en debate
    getIdeasLastDebate() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=3&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    getIdeasAllDebate() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=3&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas aprovadas
    getIdeasLastApproved() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=2&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Todas las ideas aprovadas
    getIdeasAllApproved() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=2&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas finalizadas
    getIdeasLastFinish() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=7&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Todas las ideas finalizadas
    getIdeasAllFinish() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=7&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Ultimas cuatro ideas muertas
    getIdeasLastDead(): Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard1?opcionc=1&estadoc=5&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    // Ultimas cuatro ideas mas votadas
    getIdeasMoreVotes(): Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard4?opcionc=4&estadoc=0&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    getDataIdeas(){
        return this.ideas
    }
    getOneIdea(id: number): Observable<IdeasModel>{
        return 
    }
    getIdIdeas(id){
        return this.idIdeas[id]
    }
    // Todos los comentarios por idea
    getAllComents() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/IdeasGeneralAPI/api/dashboard3?opcionc=3&estadoc=0&tipoc=0&fechaInic=20180101&fechaFinc=20180101&rownumberc=${this.idIdeas}`)
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
        this.http.post(`http://172.65.10.170:8050/IdeasGeneralAPI/api/tallerIdeas`, dataIdea,{
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
        this.http.post(`http://172.65.10.170:8050/IdeasGeneralAPI/api/tallerComents`, dataComment, {
            headers : headersHttp,
            observe : 'response'
        }).subscribe(resp => {
            console.log(resp)
        })
    }

    // Peticion post votos
    postSendVote(voting: votesModel){
        const vote = new votesModel()
        vote.opcion = voting.opcion
        vote.idVote = voting.idVote
        vote.idIdea = voting.idIdea
        vote.idUser = voting.idUser
        vote.voteType = voting.voteType

        let headersHttp = new HttpHeaders().set('Content-Type','application/json')
        return this.http.post<any>(`http://172.65.10.170:8050/api/tallerVotes`, vote, {
            headers : headersHttp,
            observe : 'response'
        }).subscribe((resp) => {
            console.log(resp)
        })
    }
}
