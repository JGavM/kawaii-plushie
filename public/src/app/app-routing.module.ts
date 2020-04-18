import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management/management.component';
import { ManagementLoginComponent } from './management/management-login/management-login.component';
import { ManagementHomeComponent } from './management/management-home/management-home.component';
import { ManagementRegisterComponent } from './management/management-register/management-register.component';
import { ManagementSuppliersComponent } from './management/management-suppliers/management-suppliers.component';
import { ManagementDistributorsComponent } from './management/management-distributors/management-distributors.component';
import { ManagementSalesComponent } from './management/management-sales/management-sales.component';
import { ManagementProductsComponent } from './management/management-products/management-products.component';


const routes: Routes = [
  { 
    path: 'management', 
    component: ManagementComponent ,
    children: [
      { path: 'login', redirectTo: redirectToHome(), pathMatch: 'full' ,component: ManagementLoginComponent },
      { path: 'home', redirectTo: redirectToLogin(), component: ManagementHomeComponent },
      { path: 'register', redirectTo: redirectToLogin(), component: ManagementRegisterComponent },
      { path: 'suppliers', redirectTo: redirectToLogin(), component: ManagementSuppliersComponent },
      { path: 'distributors', redirectTo: redirectToLogin(), component: ManagementDistributorsComponent },
      { path: 'sales', redirectTo: redirectToLogin(), component: ManagementSalesComponent },
      { path: 'products', redirectTo: redirectToLogin(), component: ManagementProductsComponent }
    ]
  },
  
];

function redirectToLogin(){
  if(localStorage.getItem('cutie-plushie-token') == null){
    return 'login';
  } else {
    return null;
  }
}

function redirectToHome(){
  if(localStorage.getItem('cutie-plushie-token') == null){
    return null;
  } else {
    return 'home';
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }