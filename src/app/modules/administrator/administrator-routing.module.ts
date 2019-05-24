import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './administrator.component'
import { PerfiladministratorComponent } from './perfiladministrator/perfiladministrator.component'
import { AllUsersComponent } from './all-users/all-users.component';

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
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
