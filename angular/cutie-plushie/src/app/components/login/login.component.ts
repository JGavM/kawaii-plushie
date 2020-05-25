import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
      let token = localStorage.getItem('cutie-plushie-token')
      if(token != null){
        this.router.navigate(['home']);
      }

      this.loginForm = this.formBuilder.group({
        user: new FormControl('', [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"),
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
      //alert("Por favor introduzca su correo y contraseña para poder ingresar.");}
      
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
      this.router.navigate(['home']);
    } else if(res.status == 401){
      window.alert("Usuario y/o contraseña incorrectos.");
    }
  }

  public validate(key: string, password: string): Promise<HttpResponse<Object>> {
    password = btoa(password);
    return this.http.post(
      'http://cutieplushie.azurewebsites.net/api/v1/web/login', 
      {'key' : key, 'pwd' : password}, 
      {observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

}
