import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShowProductComponent } from './show-product/show-product.component';
import { HomeComponent } from './home/home.component';
import { TokenInterceptService } from './Service/token-intercept.service';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { CurrentAppUserComponent } from './current-app-user/current-app-user.component';
import { UpdateCredentialsComponent } from './update-credentials/update-credentials.component';
import { ProceedToBuyComponent } from './proceed-to-buy/proceed-to-buy.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    AddFoodItemComponent,
    ShowProductComponent,
    HomeComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    CurrentAppUserComponent,
    UpdateCredentialsComponent,
    ProceedToBuyComponent,
    PaymentConfirmationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
