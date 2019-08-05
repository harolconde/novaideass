import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getImgUser(id){
    return environment.endpoint + `ImageUsers?opcion=1&idUsers=${id}`
  }

}
