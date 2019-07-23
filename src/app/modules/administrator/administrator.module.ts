import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { PerfiladministratorComponent } from './perfiladministrator/perfiladministrator.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';

@NgModule({
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AdministratorComponent,
    PerfiladministratorComponent,
    AllUsersComponent,
    AllIdeasComponent
  ]
})
export class AdministratorModule { }
