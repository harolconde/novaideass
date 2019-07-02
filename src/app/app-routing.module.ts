import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './modules/login/login.module.ts#LoginModule'
    },
    {
        path: 'home',
        loadChildren: './modules/home/home.module.ts#HomeModule'
    },
    {
        path: 'user',
        loadChildren: './modules/user/user.module.ts#UserModule'
    },
    {
        path: 'administrator',
        loadChildren: './modules/administrator/administrator.module.ts#AdministratorModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule { }
