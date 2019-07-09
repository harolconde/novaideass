import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardComponent as AuthGuard} from './modules/login/authGuard/authguard/authguard.component'
import { from } from 'rxjs';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
    },
    {
        path: 'administrator',
        loadChildren: './modules/administrator/administrator.module#AdministratorModule'
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule { }
