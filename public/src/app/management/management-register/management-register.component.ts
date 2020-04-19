import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-management-register',
  templateUrl: './management-register.component.html',
  styleUrls: ['./management-register.component.css']
})
export class ManagementRegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  permissionsDictionary = {
    "CR": "Relaciones con el cliente",
    "ADMIN": "Administrador"
  };

  permissions = []
  

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 

    let userGroup = JSON.parse(localStorage.getItem('user-details')).userGroup;
    if(userGroup != "ADMIN"){
      alert('Acceso denegado. Usted no cuenta con permisos suficientes para efectuar la operación solicitada.');
      this.router.navigate(['management/home']);
    }

    for(let permission in this.permissionsDictionary){
      this.permissions.push(permission);
    }

    this.registerForm = this.formBuilder.group({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
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
      userGroup: new FormControl('', [
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
    let userId = controls.user.value;
    let userName = controls.name.value;
    let userLastName = controls.lastName.value;
    let userGroup = controls.userGroup.value;
    let pwd = controls.password.value;

    let res = await this.createNewUser(userId, userName, userLastName, userGroup, pwd);
    
    if(res.status == 200) {
      alert('El usuario se ha creado con éxito!');
      this.router.navigate(['management/home']);
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } else if(res.status == 403) {
      alert("INTENTO DE INTRUSIÓN.");
    }
  }

  public createNewUser(userId: string, userName: string, userLastName: string, userGroup: string, password: string): Promise<HttpResponse<Object>> {
    let token = localStorage.getItem('cutie-plushie-token');
    let pwd = btoa(password);
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.post(
      '/api/v1/management/users/' + userId, 
      {
        'userName' : userName,
        'userLastName' : userLastName,
        'userGroup' : userGroup,
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
