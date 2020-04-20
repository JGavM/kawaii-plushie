import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginConfigRoutingModule } from './login-config-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    LoginConfigRoutingModule
  ],

  exports:[
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent
  ]
})
export class LoginConfigModule { }
