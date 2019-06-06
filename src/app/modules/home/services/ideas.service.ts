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
    getIdeas() : Observable<any>{
        return this.http.get('http://172.65.10.170/IdeasService/api/ConsultaIdeas?opcion=1&estado=1&tipo=1&fechaIni=20190517&fechaFin=20190518&rownumber=0');
    }
    getIdeasLast() : Observable<any>{
        return this.http.get('http://172.65.10.170/IdeasService//api/ConsultaIdeas?opcion=1&estado=1&tipo=1&fechaIni=20190517&fechaFin=20190518&rownumber=4');
    }
    getIdeasLastDebate() : Observable<any>{
        return this.http.get('http://172.65.10.170/IdeasService//api/ConsultaIdeas?opcion=1&estado=3&tipo=1&fechaIni=20190517&fechaFin=20190518&rownumber=4');
    }
    getIdeasLastApproved() : Observable<any>{
        return this.http.get('http://172.65.10.170/IdeasService//api/ConsultaIdeas?opcion=1&estado=2&tipo=1&fechaIni=20190517&fechaFin=20190518&rownumber=4')
    }
    getIdeasLastFinish() : Observable<any>{
        return this.http.get('http://172.65.10.170/IdeasService//api/ConsultaIdeas?opcion=1&estado=7&tipo=1&fechaIni=20190517&fechaFin=20190518&rownumber=4')
    }
    getIdeasLastDead(): Observable<any>{
        return this.http.get('http://172.65.10.170/IdeasService//api/ConsultaIdeas?opcion=1&estado=5&tipo=1&fechaIni=20190517&fechaFin=20190518&rownumber=4')
    }
    getDataIdeas(){
        return this.ideas
    }
    getOneIdea(i){
        return this.ideas[i]
    }
}
