import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { PerfiladministratorComponent } from './perfiladministrator/perfiladministrator.component';

@NgModule({
  declarations: [PerfiladministratorComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ]
})
export class AdministratorModule { }
