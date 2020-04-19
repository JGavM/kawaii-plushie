import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-management-login',
  templateUrl: './management-login.component.html',
  styleUrls: ['./management-login.component.css']
})
export class ManagementLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
      let token = localStorage.getItem('cutie-plushie-token')
      if(token != null){
        this.router.navigate(['management/home']);
      }

      this.loginForm = this.formBuilder.group({
        user: new FormControl('', [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9)
        ]),
        password: new FormControl('', [
          Validators.required
        ])
      });
    }

  ngOnInit(): void {
      
  }

  async onSubmit() {
    this.submitted = true;
    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      //alert("Por favor introduzca su usuario y contraseña para poder ingresar.");}
      
      return;
    }

    let res = await this.validate(this.loginForm.controls.user.value, this.loginForm.controls.password.value);
    if(res.status == 200){
      let body = res.body;
      let bodyJson = JSON.parse(JSON.stringify(body));
      let user = {
        userKey: bodyJson.userKey,
        userName: bodyJson.userName,
        userLastName: bodyJson.userLastName,
        userGroup: bodyJson.userGroup
      }
      let token = bodyJson.token
      localStorage.setItem('cutie-plushie-token',token);
      localStorage.setItem('user-details',JSON.stringify(user));
      this.router.navigate(['management/home']);
    } else if(res.status == 401){
      alert("Usuario y/o contraseña incorrectos.");
    }
  }

  public validate(key: string, password: string): Promise<HttpResponse<any>> {
    password = btoa(password);
    return this.http.post(
      '/api/v1/management/login', 
      {'key' : key, 'pwd' : password}, 
      {observe: 'response', responseType: 'json'}
    ).toPromise()
  }
}
