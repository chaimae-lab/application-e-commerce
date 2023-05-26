import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
// import { environment } from "../environments/environment";
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

// import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './service/user.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './service/auth.service';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { UsersComponent } from './components/admin/users/users.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ManageproductComponent } from './components/admin/manageproduct/manageproduct.component';
import { CategoriesService } from './service/categories.service';
import { environment } from '../environments/environment';
import { CostomerListComponent } from './costomer-list/costomer-list.component';
import { CostomerService } from './shared/costomer.service';
import { CostomerComponent } from './ costomer/costomer.component';
import { ProductsComponent } from './products/products.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { DesignComponent } from './design/design.component';
import { TLoginComponent } from './t-login/t-login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardGuard } from "./guards/auth-guard.guard";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    AccountComponent,
    
    NotFoundComponent,
    NavbarComponent,
    CartComponent,
    CartItemComponent,

    MyOrdersComponent,
  
    OrderSuccessComponent,
  
    OrdersComponent,
  
    UsersComponent,
  
    CheckOutComponent,
  
    ManageproductComponent,
  
    
    CostomerListComponent,
    CostomerComponent,
    ProductsComponent,
    ProductCartComponent,
    DesignComponent,
    TLoginComponent,
    RegisterComponent,
    ContactComponent,
    FooterComponent,
    ShoppingCartComponent ,
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule,
    
    
  
    HttpClientModule,
    AngularFireModule.initializeApp(environment.config)
    // AngularFirestoreModule
    // AngularFireDatabaseModule
    
    // AngularFirestoreModule // imports firebase/firestore, only needed for database features
  
  ],
  providers: [
    CategoriesService,
    AuthService,
    CostomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
