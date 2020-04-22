import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesPagesComponent } from './pages/categories-pages/categories-pages.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { SalesCuponsComponent } from './pages/sales-cupons/sales-cupons.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
    CategoriesPagesComponent,
    ProductInfoComponent,
    UserInfoComponent,
    ShoppingCartComponent,
    PaymentComponent,
    AboutUsComponent,
    FaqPageComponent,
    SalesCuponsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    LoginComponent,
    RecoverPasswordComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
