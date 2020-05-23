import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { SupplierDialogFormComponent } from './supplier-dialog-form/supplier-dialog-form.component';

export interface Supplier {
  supplierId: string,
  supplierName: string,
  supplierContactName: string,
  supplierPhoneNumber: string,
  supplierMail: string,
  active: boolean
}

@Component({
  selector: 'app-management-suppliers',
  templateUrl: './management-suppliers.component.html',
  styleUrls: ['./management-suppliers.component.css']
})
export class ManagementSuppliersComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = [
    'supplierId',
    'supplierName',
    'supplierContactName',
    'supplierPhoneNumber',
    'supplierMail',
    'actions'
  ];
  suppliers: Supplier[] = [ ];
  isAdmin = this.userIsAdmin();
  dataSource: MatTableDataSource<Supplier>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) { 
    if(!this.userIsAdmin){
      alert("Usted no cuenta con permisos para ver esta página");
      this.router.navigate(['management/home']);
    }
    this.displaySuppliers();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.suppliers);
    // Assign the paginator to our data source
    this.dataSource.paginator = this.paginator;
    // Assign the a sorter to our data source
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    // Apply a filter to the dataSource after user input
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Return to first page after applying a filter
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  userIsAdmin(): boolean{
    let details = localStorage.getItem('user-details');
    if(details != null){
      let user = JSON.parse(details);
      if(user.userGroup == "ADMIN"){
        return true;
      }
      return false
    }
    return false;
  }



  // Related to back-end supplier management

  async displaySuppliers() {
    let res = await this.getSuppliers();
    if(res.status == 200) {
      let body = <Supplier[]>res.body
      for(let supplier of body){
        console.log(supplier);
        let supplierJson: Supplier = JSON.parse(JSON.stringify(supplier));
        console.log(supplierJson);
        this.suppliers.push(supplierJson);
      }
      this.dataSource = new MatTableDataSource(this.suppliers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } 
  }

  public getSuppliers(): Promise<HttpResponse<Object>> {
    let token = localStorage.getItem('cutie-plushie-token')
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.get(
      '/api/v1/management/suppliers/',
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  createSupplier() {
    const dialogRef = this.dialog.open(SupplierDialogFormComponent, {
      width: '800px',
      height: '480px',
      data: null
    });
    
    dialogRef.afterClosed().subscribe(function(result){
      if(result.status == 'DONE'){
        window.location.reload();
      }
    });
  }

  async deleteSupplier(supplier: Supplier) {
    let confirmation = confirm("Está seguro de que desea eliminar al proveedor? Esta operación no se puede deshacer.");
    if(!confirmation){
      return;
    }

    let res = await this.supplierDelete(supplier);
    if(res.status == 200) {
      alert('El proveedor se ha eliminado con éxito!');
      window.location.reload();
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } else if(res.status == 403) {
      alert("INTENTO DE INTRUSIÓN.");
    }
  }

  supplierDelete(supplier: Supplier): Promise<HttpResponse<Object>> { 
    let token = localStorage.getItem('cutie-plushie-token');

    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.put(
      '/api/v1/management/suppliers/' + supplier.supplierId, 
      {
        'supplierName' : supplier.supplierName, 
        'supplierContactName' : supplier.supplierContactName,
        'supplierPhoneNumber' : supplier.supplierPhoneNumber,
        'supplierMail': supplier.supplierMail,
        'active' : 'false'
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  editSupplier(supplier: Supplier) {
    const dialogRef = this.dialog.open(SupplierDialogFormComponent, {
      width: '800px',
      height: '480px',
      data: supplier
    });

    dialogRef.afterClosed().subscribe(function(result){
      if(result.status == 'DONE'){
        window.location.reload();
      }
    });
  }

}