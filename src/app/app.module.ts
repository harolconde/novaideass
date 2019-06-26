import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IdeasService } from './modules/home/services/ideas.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { AdministratorModule } from './modules/administrator/administrator.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule,
    LoginModule,
    HomeModule,
    UserModule,
    AdministratorModule,
    AppRoutingModule
  ],
  providers: [
    IdeasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
