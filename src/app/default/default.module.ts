import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { ProductsComponent } from './products/products.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [DefaultComponent, ProductsComponent, LeftSidebarComponent, RegisterationComponent, LoginComponent, TopBarComponent, AboutUsComponent, ContactUsComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }
