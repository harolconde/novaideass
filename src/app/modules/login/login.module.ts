import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LoginRoutingModule } from './login-routing.module';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AuthenticationService } from './services/authentication.service'
import { from } from 'rxjs';
import { AuthguardComponent } from './authGuard/authguard/authguard.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginuserComponent, AuthguardComponent],
  providers: [
    AuthenticationService
  ] 
})
export class LoginModule { }
