import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

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

import { MatPaginatorIntlEsp } from './management/customPaginatorLabels';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [
    HttpClientModule,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlEsp}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
