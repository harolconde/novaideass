import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms'

import { from } from 'rxjs';
import { authModel } from '../models/authentication'
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent implements OnInit {

  authenticateUserAll: FormGroup
  authValidation: FormGroup
  submitted = false
  constructor(private _authentic: AuthenticationService, private builder: FormBuilder) { }


  ngOnInit() {
    this.authenticateUserAll = this.builder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })

    
  }
  get name(){
    return this.authenticateUserAll.controls
  }
 
  authenticateUser(){
    const authUser = new authModel()
    authUser.usuario = this.authenticateUserAll.get("username").value
    authUser.paswword = this.authenticateUserAll.get("password").value
    
    this._authentic.authenticationIdea(authUser)
    this.submitted = true
    if(this.authenticateUserAll.invalid){
      return
    }
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.authenticateUserAll.value))
    this.reset()

  }

  reset(){
    this.authenticateUserAll.reset()
  }

}
