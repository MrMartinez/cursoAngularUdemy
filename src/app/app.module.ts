import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesModule } from './pages/pages.module';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    //Los siguientes modulos estan siendo declarados en un modulo personalizado
    // PageNoFoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // PagesComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
