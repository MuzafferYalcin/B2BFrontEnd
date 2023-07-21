import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/Layouts/navbar/navbar.component';
import { FooterComponent } from './Components/Layouts/footer/footer.component';
import { AsideComponent } from './Components/Layouts/aside/aside.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductComponent } from './Components/product/product.component';
import { LayoutsComponent } from './Components/Layouts/layouts.component';
import { ProductImageComponent } from './Components/product/product-image/product-image.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Guards/auth-guard';
import { CustomerPipe } from './Components/customer/customer.pipe';
import { OrderItemsComponent } from './Components/order/order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    CustomerComponent,
    OrderComponent,
    ProductComponent,
    LayoutsComponent,
    ProductImageComponent,
    LoginComponent,
    CustomerPipe,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
