import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { ChatComponent } from './chat/chat.component';
import { IdeaComponent } from './ideas/idea/idea.component'
import { AllideasComponent  } from './ideas/allideas/allideas.component';
import { DeadideasComponent } from './ideas/deadideas/deadideas.component';
import { FinishideasComponent } from './ideas/finishideas/finishideas.component';
import { PerfiluserComponent } from './perfiluser/perfiluser.component';
import { IdeaspostulateComponent } from './ideas/ideaspostulate/ideaspostulate.component';
import { ApprovedComponent } from './ideas/approved/approved.component';
import { DebateComponent } from './ideas/debate/debate.component';

import { from } from 'rxjs';

const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'idea/:id',
        component: IdeaComponent
      },
      {
        path: 'muertas',
        component: DeadideasComponent
      },
      {
        path: 'finalizadas',
        component: FinishideasComponent 
      },
      {
        path: 'todas',
        component: AllideasComponent
      },
      {
        path: 'postuladas',
        component: IdeaspostulateComponent
      },
      {
        path: 'aprobadas',
        component: ApprovedComponent
      },
      {
        path: 'debate',
        component: DebateComponent
      },
      {
        path: 'perfil-usuario',
        component: PerfiluserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
