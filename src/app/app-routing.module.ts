import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PageNoFoundComponent } from './shared/page-no-found/page-no-found.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [

  //ESTE CHILDRE ROUTE SE MOVIO AL PAGES.ROUTES.TS
//   {path: '', 
//   component: PagesComponent,
//   children:[
//     {path: 'dashboard', component: DashboardComponent},
//     {path: 'progress', component: ProgressComponent},
//     {path: 'graficas1', component: Graficas1Component},
//     {path: '', redirectTo:'/dashboard', pathMatch:'full'},
//   ]
// },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNoFoundComponent},
];

//solo tengo que exportar este modulo al app.module.ts como se hace luego de los comentarios
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const APP_ROUTES = RouterModule.forRoot(routes)
