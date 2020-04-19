import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-management-passwordchange',
  templateUrl: './management-passwordchange.component.html',
  styleUrls: ['./management-passwordchange.component.css']
})
export class ManagementPasswordchangeComponent implements OnInit {
  passwordChangeForm: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.passwordChangeForm = this.formBuilder.group({
        oldPassword: new FormControl('', [
          Validators.required
        ]),
        newPassword: new FormControl('', [
          Validators.required
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern("^$")
        ])
      });
    }

    ngOnInit() {

    }

    async onSubmit() {
      this.submitted = true;
      let value = this.passwordChangeForm.controls.confirmPassword.value;

      this.passwordChangeForm.removeControl("confirmPassword");
      this.passwordChangeForm.addControl("confirmPassword",
        new FormControl(value, [
          Validators.required,
          Validators.pattern("^"+this.passwordChangeForm.controls.newPassword.value+"$")
        ])
      )
      // Stop here if form is invalid
      if (this.passwordChangeForm.invalid) {
        return;
      }
  
      let res = await this.changePassword(this.passwordChangeForm.controls.oldPassword.value, this.passwordChangeForm.controls.newPassword.value);
      
      if(res.status == 200) {
        let body = res.body;
        let bodyJson = JSON.parse(JSON.stringify(body));
        let token = bodyJson.token
        localStorage.setItem('cutie-plushie-token',token);
        alert('Su contraseña se ha cambiado con éxito!');
        this.router.navigate(['management/home']);
      } else if(res.status == 401) {
        alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
        localStorage.removeItem('cutie-plushie-token');
        localStorage.getItem('user-details');
        this.router.navigate(['management/login']);
      } else if(res.status == 403) {
        alert("Su contraseña anterior no coincide con los registros. Por favor intente de nuevo.");
      }
    }
  
    public changePassword(pwdOld: string, pwdNew: string): Promise<HttpResponse<Object>> {
      let user = JSON.parse(localStorage.getItem('user-details')).userKey;
      let token = localStorage.getItem('cutie-plushie-token');

      pwdOld = btoa(pwdOld);
      pwdNew = btoa(pwdNew)

      const headers = new HttpHeaders()
            .set("Authorization", "Bearer " + token);

      return this.http.put(
        '/api/v1/management/users/' + user, 
        {'pwdOld' : pwdOld, 'pwdNew' : pwdNew}, 
        {headers: headers, observe: 'response', responseType: 'json'}
      ).toPromise().then(function(res) {
        return res;
      }).catch(function(err){ 
        return err;
      });
    }

}
