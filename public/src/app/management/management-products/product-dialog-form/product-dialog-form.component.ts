import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 
export interface Product {
  productId: string,
  productName: string,
  productDescription: string,
  productUnitPriceMXN: number,
  productIcon: string,
  active: boolean,
  productActiveDiscount: number,
  supplier: {
    supplierId: string,
    supplierName: string,
  },
  category: {
    categoryId: string,
    categoryName: string,
  }
}

export interface Supplier {
  supplierId: string,
  supplierName: string,
  supplierContactName: string,
  supplierPhoneNumber: string,
  supplierMail: string
}

export interface Category {
  categoryId: string,
  categoryName: string
}
 
@Component({
  selector: 'product-dialog-form',
  templateUrl: './product-dialog-form.component.html',
  styleUrls: ['./product-dialog-form.component.css']
})
export class ProductDialogFormComponent implements OnInit {
 
  product: Product;
  submitted: boolean = false;
  productForm: FormGroup;
  formType: string;

  suppliers: Supplier[] = [];
  categories: Category[] = [];

 
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: Product,
    private dialogRef: MatDialogRef<ProductDialogFormComponent>,
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    let userGroup = JSON.parse(localStorage.getItem('user-details')).userGroup;
    if(userGroup != "ADMIN"){
      alert('Acceso denegado. Usted no cuenta con permisos suficientes para efectuar la operación solicitada.');
      this.router.navigate(['management/products']);
    }
    this.productForm = this.formBuilder.group({
      productName: new FormControl('', [
        Validators.required
      ]),
      productDescription: new FormControl('', [
        Validators.required
      ]),
      productUnitPriceMXN: new FormControl('', [
        Validators.required
      ]),
      productActiveDiscount: new FormControl('0', [
        Validators.required
      ]),
      supplier: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
        Validators.required
      ])
    });

    this.product = data;
    if(this.product == null){
      this.formType = "Create";
    } else {
      this.formType = "Update";
      let controls = this.productForm.controls;
      controls.productName.setValue(this.product.productName);
      controls.productDescription.setValue(this.product.productDescription);
      controls.productUnitPriceMXN.setValue(this.product.productUnitPriceMXN);
      controls.productActiveDiscount.setValue(this.product.productActiveDiscount);
      controls.supplier.setValue(this.product.supplier.supplierId);
      controls.category.setValue(this.product.category.categoryId);
    }
  }

  ngOnInit(): void {
    this.storeSuppliers();
    this.storeCategories();
  }
 
  async createProduct(){
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    let controls = this.productForm.controls;
    this.product = {
      productId: '',
      productName: controls.productName.value,
      productDescription: controls.productDescription.value,
      productUnitPriceMXN: controls.productUnitPriceMXN.value,
      productIcon: '',
      productActiveDiscount: 0,
      active: true,
      supplier: {
        supplierId: controls.supplier.value,
        supplierName: '',
      },
      category: {
        categoryId: controls.category.value,
        categoryName: ''
      }
    };

    let res = await this.postProduct(this.product);
    
    if(res.status == 200) {
      alert('El producto se ha creado con éxito!');
      this.dialogRef.close({ status: 'DONE' });
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    }
  }

  postProduct(product: Product): Promise<HttpResponse<Object>>{
    let token = localStorage.getItem('cutie-plushie-token');
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.post(
      '/api/v1/management/products/', 
      {
        'productName' : product.productName,
        'productDescription' : product.productDescription,
        'productUnitPriceMXN' : product.productUnitPriceMXN,
        'productIcon' : '',
        'supplierId': product.supplier.supplierId,
        'categoryId': product.category.categoryId
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  async updateProduct(){
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }

    let controls = this.productForm.controls;
    this.product = {
      productId: this.product.productId,
      productName: controls.productName.value,
      productDescription: controls.productDescription.value,
      productUnitPriceMXN: controls.productUnitPriceMXN.value,
      productIcon: this.product.productIcon,
      productActiveDiscount: controls.productActiveDiscount.value,
      active: true,
      supplier: {
        supplierId: controls.supplier.value,
        supplierName: '',
      },
      category: {
        categoryId: this.product.category.categoryId,
        categoryName: this.product.category.categoryName
      }
    };

    let res = await this.putProduct(this.product);
    
    if(res.status == 200) {
      alert('El producto se ha actualizado con éxito!');
      this.dialogRef.close({ status: 'DONE' });
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    }
  }

  putProduct(product: Product): Promise<HttpResponse<Object>>{
    let token = localStorage.getItem('cutie-plushie-token');
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.put(
      '/api/v1/management/products/'+ product.productId, 
      {
        'productName' : product.productName, 
        'productDescription' : product.productDescription,
        'productUnitPrice' : product.productUnitPriceMXN,
        'productIcon': product.productIcon,
        'active' : product.active,
        'supplierId': product.supplier.supplierId,
        'productActiveDiscount': product.productActiveDiscount
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  async storeSuppliers() {
    let res = await this.getSuppliers();

    if(res.status == 200) {
      let body = <Supplier[]>res.body
      for(let supplier of body){
        let supplierJson: Supplier = JSON.parse(JSON.stringify(supplier));
        this.suppliers.push(supplierJson);
      }
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } 
  }

  getSuppliers() {
    let token = localStorage.getItem('cutie-plushie-token')
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.get(
      '/api/v1/management/suppliers',
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  async storeCategories() {
    let res = await this.getCategories();

    if(res.status == 200) {
      let body = <Category[]>res.body
      for(let category of body){
        let categoryJson: Category = JSON.parse(JSON.stringify(category));
        this.categories.push(categoryJson);
      }
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    }
  }

  getCategories() {
    let token = localStorage.getItem('cutie-plushie-token')
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.get(
      '/api/v1/management/categories',
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
