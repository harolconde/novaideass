import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of, from } from 'rxjs';
import { IdeasModel } from '../models/modelIdea';
import { IdeasResponseModel } from '../models/modelResponseIdea'

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
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=1&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas
    getIdeasLast() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=1&tipoc=1&fechaInic=20190517&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    // Ultimas catro ideas en debate
    getIdeasLastDebate() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=3&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    getIdeasAllDebate() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=3&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas aprovadas
    getIdeasLastApproved() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=2&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Todas las ideas aprovadas
    getIdeasAllApproved() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=2&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    // Ultimas cuatro ideas finalizadas
    getIdeasLastFinish() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=7&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Todas las ideas finalizadas
    getIdeasAllFinish() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=7&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    // Ultimas cuatro ideas muertas
    getIdeasLastDead(): Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=5&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }
    // Ultimas cuatro ideas mas votadas
    getIdeasMoreVotes(): Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop4?opcionc=4&estadoc=0&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=4`)
    }

    getDataIdeas(){
        return this.ideas
    }
    getOneIdea(i){
        return this.ideas[i]
    }
    getIdIdeas(id){
        return this.idIdeas[id]
    }
    // Todos los comentarios por idea
    getAllComents() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop3?opcionc=3&estadoc=0&tipoc=0&fechaInic=20180101&fechaFinc=20180101&rownumberc=${this.idIdeas}`)
    }

    // ***************************************************************** //
    // ********************** Peticiones Post ************************** //
    // ***************************************************************** //
    postSendIdea(ideam: IdeasModel) : Observable<any> {
        console.log(this.ArrayG)
        const dataIdea = new IdeasModel()
        dataIdea.Opcion = ideam.Opcion
        dataIdea.IdUsuario = ideam.IdUsuario       
        dataIdea.Id = ideam.Id
        dataIdea.IdeaText = ideam.IdeaText
        dataIdea.IdeaType = ideam.IdeaType
        dataIdea.Status = ideam.Status

        let json = JSON.stringify(dataIdea)
        let params = "json="+json
        let headersHttp = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
        console.log(dataIdea)
        return this.http.post<any>(`http://172.65.10.170:8050/api/tallerIdeas`, params,{
            headers : headersHttp,
            observe : 'response'
        })
        
        
    }
}
