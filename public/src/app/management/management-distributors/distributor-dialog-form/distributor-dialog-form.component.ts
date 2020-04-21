import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Distributor {
  distributorId: string,
  distributorName: string,
  distributorContactName: string,
  distributorPhoneNumber: string,
  distributorMail: string
  active: boolean
}

@Component({
  selector: 'app-distributor-dialog-form',
  templateUrl: './distributor-dialog-form.component.html',
  styleUrls: ['./distributor-dialog-form.component.css']
})
export class DistributorDialogFormComponent implements OnInit {

  distributor: Distributor;
  submitted: boolean = false;
  distributorForm: FormGroup;
  formType: string;
 
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: Distributor,
    private dialogRef: MatDialogRef<DistributorDialogFormComponent>,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    let userGroup = JSON.parse(localStorage.getItem('user-details')).userGroup;
    if(userGroup != "ADMIN"){
      alert('Acceso denegado. Usted no cuenta con permisos suficientes para efectuar la operación solicitada.');
      this.router.navigate(['management/distributors']);
    }
    this.distributorForm = this.formBuilder.group({
      distributorName: new FormControl('', [
        Validators.required
      ]),
      distributorContactName: new FormControl('', [
        Validators.required
      ]),
      distributorPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      distributorMail: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });

    this.distributor = data;
    if(this.distributor == null){
      this.formType = "Create";
    } else {
      this.formType = "Update";
      let controls = this.distributorForm.controls;
      controls.distributorName.setValue(this.distributor.distributorName);
      controls.distributorContactName.setValue(this.distributor.distributorContactName);
      controls.distributorPhoneNumber.setValue(this.distributor.distributorPhoneNumber);
      controls.distributorMail.setValue(this.distributor.distributorMail);
    }
  }

  ngOnInit(): void {
    
  }
 
  async createDistributor(){
    this.submitted = true;

    if (this.distributorForm.invalid) {
      return;
    }

    let controls = this.distributorForm.controls;
    this.distributor = {
      distributorId: '',
      distributorName: controls.distributorName.value,
      distributorContactName: controls.distributorContactName.value,
      distributorPhoneNumber: controls.distributorPhoneNumber.value,
      distributorMail: controls.distributorMail.value,
      active: true,
    };

    let res = await this.postDistributor(this.distributor);
    
    if(res.status == 200) {
      alert('El distribuidor se ha creado con éxito!');
      this.dialogRef.close({ status: 'DONE' });
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      window.location.reload();
    }
  }

  postDistributor(distributor: Distributor): Promise<HttpResponse<Object>>{
    let token = localStorage.getItem('cutie-plushie-token');
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.post(
      '/api/v1/management/distributors/', 
      {
        'distributorName' : distributor.distributorName,
        'distributorContactName' : distributor.distributorContactName,
        'distributorPhoneNumber' : distributor.distributorPhoneNumber,
        'distributorMail' : distributor.distributorMail
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  async updateDistributor(){
    this.submitted = true;
    if (this.distributorForm.invalid) {
      return;
    }

    let controls = this.distributorForm.controls;
    this.distributor = {
      distributorId: this.distributor.distributorId,
      distributorName: controls.distributorName.value,
      distributorContactName: controls.distributorContactName.value,
      distributorPhoneNumber: controls.distributorPhoneNumber.value,
      distributorMail: controls.distributorMail.value,
      active: true
    };

    let res = await this.putDistributor(this.distributor);
    
    if(res.status == 200) {
      alert('El distribuidor se ha actualizado con éxito!');
      this.dialogRef.close({ status: 'DONE' });
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    }
  }

  putDistributor(distributor: Distributor): Promise<HttpResponse<Object>>{
    let token = localStorage.getItem('cutie-plushie-token');
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.put(
      '/api/v1/management/distributors/'+ distributor.distributorId, 
      {
        'distributorName' : distributor.distributorName, 
        'distributorContactName' : distributor.distributorContactName,
        'distributorPhoneNumber' : distributor.distributorPhoneNumber,
        'distributorMail': distributor.distributorMail,
        'active' : distributor.active
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }
 
  closeDialog(){
    this.dialogRef.close({ status: 'CANCEL' });
  }
}
