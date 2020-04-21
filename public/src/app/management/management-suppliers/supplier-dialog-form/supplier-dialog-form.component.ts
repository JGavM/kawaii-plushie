import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Supplier {
  supplierId: string,
  supplierName: string,
  supplierContactName: string,
  supplierPhoneNumber: string,
  supplierMail: string
  active: boolean
}

@Component({
  selector: 'app-supplier-dialog-form',
  templateUrl: './supplier-dialog-form.component.html',
  styleUrls: ['./supplier-dialog-form.component.css']
})
export class SupplierDialogFormComponent implements OnInit {

  supplier: Supplier;
  submitted: boolean = false;
  supplierForm: FormGroup;
  formType: string;
 
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: Supplier,
    private dialogRef: MatDialogRef<SupplierDialogFormComponent>,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    let userGroup = JSON.parse(localStorage.getItem('user-details')).userGroup;
    if(userGroup != "ADMIN"){
      alert('Acceso denegado. Usted no cuenta con permisos suficientes para efectuar la operación solicitada.');
      this.router.navigate(['management/suppliers']);
    }
    this.supplierForm = this.formBuilder.group({
      supplierName: new FormControl('', [
        Validators.required
      ]),
      supplierContactName: new FormControl('', [
        Validators.required
      ]),
      supplierPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      supplierMail: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });

    this.supplier = data;
    if(this.supplier == null){
      this.formType = "Create";
    } else {
      this.formType = "Update";
      let controls = this.supplierForm.controls;
      controls.supplierName.setValue(this.supplier.supplierName);
      controls.supplierContactName.setValue(this.supplier.supplierContactName);
      controls.supplierPhoneNumber.setValue(this.supplier.supplierPhoneNumber);
      controls.supplierMail.setValue(this.supplier.supplierMail);
    }
  }

  ngOnInit(): void {
    
  }
 
  async createSupplier(){
    this.submitted = true;

    if (this.supplierForm.invalid) {
      return;
    }

    let controls = this.supplierForm.controls;
    this.supplier = {
      supplierId: '',
      supplierName: controls.supplierName.value,
      supplierContactName: controls.supplierContactName.value,
      supplierPhoneNumber: controls.supplierPhoneNumber.value,
      supplierMail: controls.supplierMail.value,
      active: true,
    };

    let res = await this.postSupplier(this.supplier);
    
    if(res.status == 200) {
      alert('El proveedor se ha creado con éxito!');
      this.dialogRef.close({ status: 'DONE' });
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      window.location.reload();
    }
  }

  postSupplier(supplier: Supplier): Promise<HttpResponse<Object>>{
    let token = localStorage.getItem('cutie-plushie-token');
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.post(
      '/api/v1/management/suppliers/', 
      {
        'supplierName' : supplier.supplierName,
        'supplierContactName' : supplier.supplierContactName,
        'supplierPhoneNumber' : supplier.supplierPhoneNumber,
        'supplierMail' : supplier.supplierMail
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  async updateSupplier(){
    this.submitted = true;
    if (this.supplierForm.invalid) {
      return;
    }

    let controls = this.supplierForm.controls;
    this.supplier = {
      supplierId: this.supplier.supplierId,
      supplierName: controls.supplierName.value,
      supplierContactName: controls.supplierContactName.value,
      supplierPhoneNumber: controls.supplierPhoneNumber.value,
      supplierMail: controls.supplierMail.value,
      active: true
    };

    let res = await this.putSupplier(this.supplier);
    
    if(res.status == 200) {
      alert('El proveedor se ha actualizado con éxito!');
      this.dialogRef.close({ status: 'DONE' });
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    }
  }

  putSupplier(supplier: Supplier): Promise<HttpResponse<Object>>{
    let token = localStorage.getItem('cutie-plushie-token');
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.put(
      '/api/v1/management/suppliers/'+ supplier.supplierId, 
      {
        'supplierName' : supplier.supplierName, 
        'supplierContactName' : supplier.supplierContactName,
        'supplierPhoneNumber' : supplier.supplierPhoneNumber,
        'supplierMail': supplier.supplierMail,
        'active' : supplier.active
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
