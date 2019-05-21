import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginuserComponent } from './../login/loginuser/loginuser.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
