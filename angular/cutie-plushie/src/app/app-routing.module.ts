import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CategoriesPagesComponent } from './components/categories-pages/categories-pages.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { SalesCuponsComponent } from './components/sales-cupons/sales-cupons.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent },
  {path: 'product/:id',component: ProductInfoComponent},
  {path: 'shopping-cart',component: ShoppingCartComponent},
  {path: 'payment',component: PaymentComponent},
  {path: 'user-info',component: UserInfoComponent},
  {path: 'categories-page',component: CategoriesPagesComponent},
  {path: 'recover-password',component: RecoverPasswordComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'about-us',component: AboutUsComponent },
  {path: 'faq-page',component: FaqPageComponent},
  {path: 'sales-cupons',component: SalesCuponsComponent },
  {path: 'privacy-policy',component: PrivacyPolicyComponent },
  {path: 'return-policy',component: ReturnPolicyComponent },
  {path: 'terms-conditions',component: TermsConditionsComponent },
  { path: '**', pathMatch   : 'full', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
