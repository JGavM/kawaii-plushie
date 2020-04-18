import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './management/auth-guard.service';

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
      { path: '',   redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: ManagementLoginComponent},
      { path: 'home', component: ManagementHomeComponent, canActivate : [AuthGuardService] },
      { path: 'register', component: ManagementRegisterComponent, canActivate : [AuthGuardService] },
      { path: 'suppliers', component: ManagementSuppliersComponent, canActivate : [AuthGuardService] },
      { path: 'distributors', component: ManagementDistributorsComponent, canActivate : [AuthGuardService] },
      { path: 'sales', component: ManagementSalesComponent, canActivate : [AuthGuardService] },
      { path: 'products', component: ManagementProductsComponent, canActivate : [AuthGuardService] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }