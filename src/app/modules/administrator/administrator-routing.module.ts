import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfiladministratorComponent } from './perfiladministrator/perfiladministrator.component'

const routes: Routes = [
  {
    path: '',
    component: PerfiladministratorComponent,
    children: [
      {
        path: 'administrador',
        component: PerfiladministratorComponent
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
