import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { ManagementHomeComponent } from './management/management-home/management-home.component';
import { ManagementRegisterComponent } from './management/management-register/management-register.component';
import { ManagementSuppliersComponent } from './management/management-suppliers/management-suppliers.component';
import { ManagementDistributorsComponent } from './management/management-distributors/management-distributors.component';
import { ManagementSalesComponent } from './management/management-sales/management-sales.component';
import { ManagementProductsComponent } from './management/management-products/management-products.component';
import { ManagementLoginComponent } from './management/management-login/management-login.component';
import { ManagementPasswordchangeComponent } from './management/management-passwordchange/management-passwordchange.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    ManagementLoginComponent,
    ManagementHomeComponent,
    ManagementRegisterComponent,
    ManagementSuppliersComponent,
    ManagementDistributorsComponent,
    ManagementSalesComponent,
    ManagementProductsComponent,
    ManagementPasswordchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
