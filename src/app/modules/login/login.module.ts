import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginuserComponent } from './loginuser/loginuser.component';

@NgModule({
  declarations: [LoginuserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule 
  ] 
})
export class LoginModule { }
