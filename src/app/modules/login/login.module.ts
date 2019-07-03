import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginuserComponent } from './loginuser/loginuser.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule 
  ],
  declarations: [LoginuserComponent] 
})
export class LoginModule { }
