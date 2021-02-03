import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DefaultComponent } from './default.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',component:DefaultComponent,
    children:[
      {
        path:'',component:ProductsComponent
      },
      {
        path:'products',component:ProductsComponent
      },
      {
        path:'about-us',component:AboutUsComponent
      },
      {
        path:'contact-us',component:ContactUsComponent
      },
      {
        path:'login',component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
