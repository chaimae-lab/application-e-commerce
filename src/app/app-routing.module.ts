import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountComponent } from './components/account/account.component';
import { AuthService } from './service/auth.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { ManageproductComponent } from './components/admin/manageproduct/manageproduct.component';
// import { CostomerComponent } from './costomer/costomer.component';
import { CostomerListComponent } from './costomer-list/costomer-list.component';
import { CostomerComponent } from './ costomer/costomer.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
 {path:'',component:ProductsComponent},
 {path:'cart',component:CartComponent},

 {path:'contact',component:ContactComponent},
 {path:'register',component:RegisterComponent},
 {path:'costomer',component:CostomerComponent},

 {path:'login',component:LoginComponent},
 
 {path:'costomerlist',component:CostomerListComponent},

 {path:'products',component:ProductsComponent},






 {path:'cart',component:CartComponent},
 {path:'account',component:AccountComponent},
 {path:'**',component:NotFoundComponent},
 {path:'shoppingcart',component:ShoppingCartComponent},
 {path:'checkout',component:CheckOutComponent},
 {path:'myorders',component:MyOrdersComponent},
 {path:'orders',component:OrdersComponent},
 {path:'manageproduct',component:ManageproductComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
