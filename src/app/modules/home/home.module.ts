import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IdeasService } from './services/ideas.service';


import { HomeRoutingModule } from './home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'
import { HomeComponent } from './home.component';
import { ChatComponent } from './chat/chat.component'; 
import { DatesuserComponent } from './datesuser/datesuser.component';
import { BarlateralComponent } from './barlateral/barlateral.component';
import { FooterComponent } from './footer/footer.component';
import { IdeaComponent } from './ideas/idea/idea.component';
import { AllideasComponent } from './ideas/allideas/allideas.component';
import { DeadideasComponent } from './ideas/deadideas/deadideas.component';
import { FinishideasComponent } from './ideas/finishideas/finishideas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfiluserComponent } from './perfiluser/perfiluser.component';
import { IdeaspostulateComponent } from './ideas/ideaspostulate/ideaspostulate.component';
import { ApprovedComponent } from './ideas/approved/approved.component';
import { DebateComponent } from './ideas/debate/debate.component';
import { AllIdeasUserComponent } from './ideas/all-ideas-user/all-ideas-user.component';
import { AllCommentsUserComponent } from './ideas/all-comments-user/all-comments-user.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    HomeComponent,
    ChatComponent, 
    DatesuserComponent, 
    BarlateralComponent,  
    FooterComponent, 
    IdeaComponent, 
    AllideasComponent, 
    DeadideasComponent, 
    FinishideasComponent, 
    DashboardComponent, 
    PerfiluserComponent, 
    IdeaspostulateComponent,
    ApprovedComponent, 
    DebateComponent, 
    AllIdeasUserComponent, AllCommentsUserComponent
  ],
  providers: [
    IdeasService,
    
  ]
})
export class HomeModule { }
