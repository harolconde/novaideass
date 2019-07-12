import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
  import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-finishideas',
  templateUrl: './finishideas.component.html',
  styleUrls: ['./finishideas.component.scss']
})
export class FinishideasComponent implements OnInit { 

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[] = []
  idRedir:any

  constructor(private _service: IdeasService, private _route:ActivatedRoute) { }

  @Input() id: string;
  @Input() maxSize: number = 7
  @Output() pageChange: EventEmitter<number>;

  ngOnInit() {
    this.getAllFinishIdeas()
    // Inicializar Pagination
    this.pageChange = new EventEmitter(true);

    // Obtner detalle de la idea
    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
      console.log(this.idRedir)
    })
  }
  
  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

  // Todas las ideas finalizadas
  getAllFinishIdeas():void{
    this._service.getIdeasAllFinish().subscribe((data) => {
      this.ideas = data
    })
  }

  // Get imagenes Usuario
  getImgUser(id){
    return environment.endpoint + `/Image?idUsers=${id}`
  }

}
