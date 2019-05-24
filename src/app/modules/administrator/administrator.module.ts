import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { PerfiladministratorComponent } from './perfiladministrator/perfiladministrator.component';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  declarations: [
    AdministratorComponent,
    PerfiladministratorComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ]
})
export class AdministratorModule { }
