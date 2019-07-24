import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms'
import { ActivatedRoute,Router} from '@angular/router'
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
  authLDAPresponse:number
  authLDAPmessage:any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _authentic: AuthenticationService,
    private builder: FormBuilder
  ) { }


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
    authUser.user = this.authenticateUserAll.get("username").value
    authUser.password = this.authenticateUserAll.get("password").value
    
    this._authentic.authenticationIdea(authUser);
    setTimeout(()=>{
      this.authLDAPresponse  = this._authentic.responseNumber
      this.authLDAPmessage = this._authentic.response
      console.log(this.authLDAPresponse,this.authLDAPmessage)

      // En caso que la respuesta del LDAP se positiva
      if(this.authLDAPresponse == 1){
        this.submitted = false
        this.router.navigate(['/dashboard'])
      } 
      else{
        this.submitted = true
        this.router.navigate(['/login'])
      }
      this.reset()
    },800); 

    
  }

  reset(){
    this.authenticateUserAll.reset()
  }

}
