import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../home/services/users.service';
import { environment } from '../../../../environments/environment'
import { Location } from '@angular/common'

@Component({
  selector: 'app-show-user-detail',
  templateUrl: './show-user-detail.component.html',
  styleUrls: ['./show-user-detail.component.scss']
})
export class ShowUserDetailComponent implements OnInit {

  user:any = {}

  constructor(
    private route: ActivatedRoute,
    private userData: UsersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getIdUser()
  }
  getIdUser(){
    const id:any = this.route.snapshot.paramMap.get('id')
    this.userData.getUser(id).subscribe(
      user => {
        console.log(user)
        return this.user = user
      }
    )
  }
  goBack(): void{
    this.location.back()
  }

}
