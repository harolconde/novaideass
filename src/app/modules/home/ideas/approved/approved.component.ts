import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {
  @Input() id: string;
  @Input() maxSize: number = 7
  @Output() pageChange: EventEmitter<number>;
  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[] = []
  idRedir: any
  constructor(private _service: IdeasService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.getAllIdeasAproved();
    // Inicializacion de eventEmiter paginatio
    this.pageChange = new EventEmitter(true);

    // Trael detalle de idea
    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
      console.log(this.idRedir)
    })
  }

  //Menú navegacion
  showMenuUser(){
    this.menuComponents =! this.menuComponents
  }

  // Todas las ideas en estado aprovado
  getAllIdeasAproved():void{
    this._service.getIdeasAllApproved().subscribe((data) =>{
      this.ideas = data
      console.log(data)
    })
  }
  // Get imagen de usuario
  getImgUser(id){
    return environment.endpoint + `/Image?idUsers=${id}`
  }
}
