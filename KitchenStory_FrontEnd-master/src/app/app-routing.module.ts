import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { ProceedToBuyComponent } from './proceed-to-buy/proceed-to-buy.component';
import { AuthGuard } from './shared/auth.guard';
import { ShowProductComponent } from './show-product/show-product.component';
import { UpdateCredentialsComponent } from './update-credentials/update-credentials.component';

const routes: Routes = [
  { path: '', component: ShowProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'updatePassword', component: UpdateCredentialsComponent },
  { path: 'proceedToBuy', component: ProceedToBuyComponent },
  { path: 'invoice', component: PaymentConfirmationComponent },
  // { path: 'cart', component: CartComponent  ,canActivate: [AuthGuard]}, //when only user is loggedin, can have access
  { path: 'cart', component: CartComponent },
  { path: 'addProduct', component: AddFoodItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
