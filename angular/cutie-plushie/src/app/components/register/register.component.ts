import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  permissions = []

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 

    this.registerForm = this.formBuilder.group({
      customerId: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern("^$")
      ]),
      dateofbirth: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.submitted = true;
      
    let value = this.registerForm.controls.confirmPassword.value;
    this.registerForm.removeControl("confirmPassword");
    this.registerForm.addControl("confirmPassword",
      new FormControl(value, [
        Validators.required,
        Validators.pattern("^"+this.registerForm.controls.password.value+"$")
      ])
    )

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let controls = this.registerForm.controls;
    let customerId = controls.user.value;
    let customerName = controls.name.value;
    let customerLastName = controls.lastName.value;
    let customerDateOfBirth = controls.customerDateOfBirth.value;
    let pwd = controls.password.value;

    let res = await this.createNewUser(customerId, customerName, customerLastName,customerDateOfBirth, pwd);
    
    if(res.status == 200) {
      alert('El usuario se ha creado con éxito!');
      this.router.navigate(['/home']);
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['/login']);
    } else if(res.status == 403) {
      alert("INTENTO DE INTRUSIÓN.");
    }
  }

  public createNewUser(customerId: string, customerName: string, customerLastName: string,customerDateOfBirth:string, password: string): Promise<HttpResponse<Object>> {
    let token = localStorage.getItem('cutie-plushie-token');
    let pwd = btoa(password);
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.post(
      'http://cutieplushie.azurewebsites.net/api/v1/web/customers/' + customerId, 
      {
        'customerName' : customerName,
        'customerLastName' : customerLastName,
        'customerDateOfBirth' : customerDateOfBirth,
        'pwd' : pwd
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

}
