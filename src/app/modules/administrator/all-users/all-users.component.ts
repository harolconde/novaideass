import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { UsersService } from '../../home/services/users.service'

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  public users:any = []
  constructor(private _usersAll:UsersService) { }

  ngOnInit() {
    this.getDataAllUsers()
  }
  getImgUser(id){
    return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
  }
  getDataAllUsers(){
    this._usersAll.getDatesAllUsers().subscribe( allData => {
      this.users = allData
      this.users.sort((a, b) => b < a ? 1: -1)
      console.log(allData)
    })
  }
  

}
