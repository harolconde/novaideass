import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

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
import { AllIdeasUserComponent } from './ideas/all-ideas-user/all-ideas-user.component';
import { AllCommentsUserComponent } from './ideas/all-comments-user/all-comments-user.component';
import { AuthguardComponent } from '../login/authGuard/authguard/authguard.component'


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthguardComponent]
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
        path: 'usuario-todas',
        component: AllIdeasUserComponent
      },
      {
        path: 'usuario-comentarios',
        component: AllCommentsUserComponent
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
