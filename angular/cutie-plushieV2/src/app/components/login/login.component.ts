import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private http: HttpClient, 
    private router: Router,private formBuilder: FormBuilder
    ) {  
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.submitted = true;
    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    let res = await this.validate(this.loginForm.controls.user.value, this.loginForm.controls.password.value);
    
    if(res.status == 200){
      let body = res.body;
      let bodyJson = JSON.parse(JSON.stringify(body));
      let user = {
        customerMail: bodyJson.customerMail,
        customerName: bodyJson.customerName,
        customerLastName:  bodyJson.customerLastName,
      }
      let token = bodyJson.token
      localStorage.setItem('cutie-plushie-token',token);
      localStorage.setItem('customer-details',JSON.stringify(user));
	//Navega aquí a tu página de home
      this.router.navigate(['']);
    } else if(res.status == 401){
      alert("Usuario y/o contraseña incorrectos.");
    }
  }

  public validate(key: string, password: string): Promise<HttpResponse<Object>> {
    password = btoa(password);
    return this.http.post(
      '/api/v1/web/login', 
      {'key' : key, 'pwd' : password}, 
      {observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }	

}
