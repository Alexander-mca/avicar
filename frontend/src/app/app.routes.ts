import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RegistroComponent } from './components/pages/admin/registro/registro.component';
import { HomeAdminComponent } from './components/pages/admin/home-admin/home-admin.component';

export const routes: Routes = [
    {
        path: 'login',
        component : LoginComponent
    }, 
    {
        path : '',
        component : HomeComponent
    },
    {
        path: 'admin',
        component : HomeAdminComponent
    },
    {
        path: 'admin/registro',
        component : RegistroComponent
    }
];
