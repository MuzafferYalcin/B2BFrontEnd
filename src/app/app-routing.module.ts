import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { LayoutsComponent } from './Components/Layouts/layouts.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductImageComponent } from './Components/product/product-image/product-image.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Guards/auth-guard';
import { OrderItemsComponent } from './Components/order/order-items/order-items.component';
import { ProfileComponent } from './Components/profile/profile.component';


const routes: Routes = [
  {
    path:"",
    component:LayoutsComponent,
   // canActivate:[AuthGuard],
    children:[
      {
        path:"product",
        component:ProductComponent
      },
      {
        path:"product/:id",
        component:ProductImageComponent
      },
      {
        path:"customer",
        component:CustomerComponent
      },
      {
        path:"order",
        component:OrderComponent
      },
      {
        path:"",
        component:OrderComponent
      },
      {
        path:"order/order-item/:id",
        component:OrderItemsComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      }

    ]
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
