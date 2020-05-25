import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CategoriesPagesComponent } from './components/categories-pages/categories-pages.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { SalesCuponsComponent } from './components/sales-cupons/sales-cupons.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserInfoComponent,
    CategoriesPagesComponent,
    ProductInfoComponent,
    ShoppingCartComponent,
    PaymentComponent,
    HomeComponent,
    LoginComponent,
    RecoverPasswordComponent,
    RegisterComponent,
    AboutUsComponent,
    FaqPageComponent,
    SalesCuponsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ReturnPolicyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
