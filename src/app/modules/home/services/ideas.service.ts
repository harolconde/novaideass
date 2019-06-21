import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';


// interface myIdea{
//   obj: Object
// }

@Injectable({
    providedIn: 'root'
})
export class IdeasService {
    ideas:any[] 

    constructor(private http: HttpClient) {
        
    }

    // Peticiones Get
    idIdeas : any 
    // fechas
    date: any = new Date()
    year: any = this.date.getFullYear()
    month: any = this.date.getMonth()+1
    day: any = this.date.getDate()
    fechatFin: any = this.year+this.month+this.day

    getIdeas() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=1&tipoc=1&fechaInic=20180101&fechaFinc=${this.fechatFin}&rownumberc=0`)
    }
    getIdeasLast() : Observable<any>{
        return this.http.get('http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=1&tipoc=1&fechaInic=20190517&fechaFinc=20190518&rownumberc=4')
    }
    getIdeasLastDebate() : Observable<any>{
        return this.http.get('http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=3&tipoc=1&fechaInic=20180101&fechaFinc=20201010&rownumberc=4')
    }
    getIdeasLastApproved() : Observable<any>{
        return this.http.get('http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=2&tipoc=1&fechaInic=20180101&fechaFinc=20201010&rownumberc=4')
    }
    getIdeasLastFinish() : Observable<any>{
        return this.http.get('http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=7&tipoc=1&fechaInic=20180101&fechaFinc=20201010&rownumberc=4')
    }
    getIdeasLastDead(): Observable<any>{
        return this.http.get('http://172.65.10.170:8050/api/Dbop1?opcionc=1&estadoc=5&tipoc=1&fechaInic=20180101&fechaFinc=20201010&rownumberc=4')
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
    getAllComents() : Observable<any>{
        return this.http.get(`http://172.65.10.170:8050/api/Dbop3?opcionc=3&estadoc=0&tipoc=0&fechaInic=20180101&fechaFinc=20180101&rownumberc=${this.idIdeas}`)
    }
    // Peticiones Post
    postSendIdea() : Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
        return this.http.post('http://172.65.10.170:8050/api/tallerIdeas?', {
            headers : headers
        })
    }
}
