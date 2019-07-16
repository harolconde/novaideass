import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
declare var $:any

@Component({
  selector: 'app-all-ideas-user',
  templateUrl: './all-ideas-user.component.html',
  styleUrls: ['./all-ideas-user.component.scss']
})
export class AllIdeasUserComponent implements OnInit {

  // Ideas de usuario
  ideasUser:any[]

  // Redireccionamiento
  idRedir:any

  @Input() id: string;
  @Input() maxSize: number = 7
  @Output() pageChange: EventEmitter<number>;

  constructor(private _service:IdeasService, private _route:ActivatedRoute) { }

  ngOnInit() {
    // Todas las ideas por usuario
    this.getIdeasUser() 
    // Trael detalle de idea
    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
    console.log(this.idRedir)
    // Inicializacion de eventEmiter paginatio
    this.pageChange = new EventEmitter(true);
   })
  }

  // Mostrar todas las ideas del usuario
  getIdeasUser(){
    this._service.getIdeasUserAll().subscribe((data) => {
      this.ideasUser = data
      console.log(data)
    })
  }

  // Mostrar imagen de usuario
  getImgUser(id){
    return environment.endpoint + `/Image?idUsers=${id}`
  }


}
