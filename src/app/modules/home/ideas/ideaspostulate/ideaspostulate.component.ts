import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ideaspostulate',
  templateUrl: './ideaspostulate.component.html',
  styleUrls: ['./ideaspostulate.component.scss']
})
export class IdeaspostulateComponent implements OnInit {

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[] = []
  ideasPostulatesForUser:any []

  // Redireccion Ideas por Id
  idRedir:any

  // Paginacion
  @Input() id: string;
  @Input() maxSize: number = 7
  @Output() pageChange: EventEmitter<number>;

  constructor(private _service:IdeasService, private _route:ActivatedRoute ) { }

  ngOnInit() {
    
    // Iniciacilazion EventEmiter
    this.pageChange = new EventEmitter(true)

    // Trael detalle de idea
    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
      console.log(this.idRedir)
    })

    // Todas las ideas generales
    this.getAllIdeas()
    // Todas las ideas por usuario
    this.getAllMyIdeas()
  }
 
  getAllIdeas(){
    this._service.getIdeas().subscribe((data)=>{
      this.ideas = data
    })
  }

  // Get todas mis ideas postuladas
  getAllMyIdeas(){
    this._service.getIdeasAllForUser().subscribe((data) => {
      this.ideasPostulatesForUser = data
      console.log(data)
    })
  }

  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

}
