import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categoriesPage', component: CategoriesPagesComponent },
  { path: 'productInfo', component: ProductInfoComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'faqPage', component: FaqPageComponent },
  { path: 'salesCupons', component: SalesCuponsComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
  { path: 'termsConditions', component: TermsConditionsComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
