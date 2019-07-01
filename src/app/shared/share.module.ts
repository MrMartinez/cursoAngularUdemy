import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';



@NgModule({
    declarations:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        FooterComponent,
        PageNoFoundComponent
    ],
    exports:[
       
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        FooterComponent,
        PageNoFoundComponent
    ]
})

export class SharedModule{
    
}