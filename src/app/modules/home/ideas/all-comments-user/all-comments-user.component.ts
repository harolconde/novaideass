import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'
import * as $ from 'jquery'
import { ActivatedRoute } from '@angular/router';
declare var $:any

@Component({
  selector: 'app-all-comments-user',
  templateUrl: './all-comments-user.component.html',
  styleUrls: ['./all-comments-user.component.scss']
})
export class AllCommentsUserComponent implements OnInit {
  @Input() id: string;
  @Input() maxSize: number = 7
  @Output() pageChange: EventEmitter<number>;
  //Comments
  comments:any[] = []
  idRedir:any

  menuComponents:boolean = false;
  constructor(private _service:IdeasService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.getCommentUserAll()
    // Inicializacion de eventEmiter paginatio
    this.pageChange = new EventEmitter(true);

    // Trael detalle de idea
    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
      console.log(this.idRedir)
    })
  }
  showMenuUser(){
    this.menuComponents = ! this.menuComponents 
  }

  // Todos los comentarios por usuario
  getCommentUserAll():void{
    this._service.getCommentsAllForUser().subscribe((data) => {
      this.comments = data
    })
  }
}
$(()=>{
  $('[data-toggle="tooltip"]').tooltip()
})
