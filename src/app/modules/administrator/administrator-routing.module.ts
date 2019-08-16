import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './administrator.component';
import { PerfiladministratorComponent } from './perfiladministrator/perfiladministrator.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';
import { ShowUserDetailComponent } from '../administrator/show-user-detail/show-user-detail.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: AdministratorComponent,
    children: [
      {
        path: 'perfil-administrador',
        component: PerfiladministratorComponent
      },
      {
        path: 'administracion-usuarios',
        component: AllUsersComponent
      },
      {
        path: 'administracion-ideas',
        component: AllIdeasComponent
      },
      {
        path: 'usuario-ver/:id',
        component: ShowUserDetailComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
