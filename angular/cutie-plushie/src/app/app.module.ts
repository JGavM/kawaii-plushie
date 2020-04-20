import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginConfigModule } from './login-config/login-config.module';
import { RouterModule } from '@angular/router';
import { CategoriesPagesComponent } from './pages/categories-pages/categories-pages.component';
import { HomeComponent } from './pages/home/home.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SalesCuponsComponent } from './pages/sales-cupons/sales-cupons.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesPagesComponent,
    HomeComponent,
    UserInfoComponent,
    ProductInfoComponent,
    ShoppingCartComponent,
    PaymentComponent,
    AboutUsComponent,
    FaqPageComponent,
    SalesCuponsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LoginConfigModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports:[
    LoginConfigModule
  ]
})
export class AppModule { }
