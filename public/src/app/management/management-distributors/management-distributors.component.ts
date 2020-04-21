import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DistributorDialogFormComponent } from './distributor-dialog-form/distributor-dialog-form.component';

export interface Distributor {
  distributorId: string,
  distributorName: string,
  distributorContactName: string,
  distributorPhoneNumber: string,
  distributorMail: string,
  active: boolean
}

@Component({
  selector: 'app-management-distributors',
  templateUrl: './management-distributors.component.html',
  styleUrls: ['./management-distributors.component.css']
})
export class ManagementDistributorsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = [
    'distributorId',
    'distributorName',
    'distributorContactName',
    'distributorPhoneNumber',
    'distributorMail',
    'actions'
  ];
  distributors: Distributor[] = [ ];
  isAdmin = this.userIsAdmin();
  dataSource: MatTableDataSource<Distributor>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) { 
    if(!this.userIsAdmin){
      alert("Usted no cuenta con permisos para ver esta página");
      this.router.navigate(['management/home']);
    }
    this.displayDistributors();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.distributors);
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



  // Related to back-end distributor management

  async displayDistributors() {
    let res = await this.getDistributors();
    if(res.status == 200) {
      let body = <Distributor[]>res.body
      for(let distributor of body){
        console.log(distributor);
        let distributorJson: Distributor = JSON.parse(JSON.stringify(distributor));
        console.log(distributorJson);
        this.distributors.push(distributorJson);
      }
      this.dataSource = new MatTableDataSource(this.distributors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } 
  }

  public getDistributors(): Promise<HttpResponse<Object>> {
    let token = localStorage.getItem('cutie-plushie-token')
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.get(
      '/api/v1/management/distributors/',
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  createDistributor() {
    const dialogRef = this.dialog.open(DistributorDialogFormComponent, {
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

  async deleteDistributor(distributor: Distributor) {
    let confirmation = confirm("Está seguro de que desea eliminar al distribuidor? Esta operación no se puede deshacer.");
    if(!confirmation){
      return;
    }

    let res = await this.distributorDelete(distributor);
    if(res.status == 200) {
      alert('El distribuidor se ha eliminado con éxito!');
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

  distributorDelete(distributor: Distributor): Promise<HttpResponse<Object>> { 
    let token = localStorage.getItem('cutie-plushie-token');

    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.put(
      '/api/v1/management/distributors/' + distributor.distributorId, 
      {
        'distributorName' : distributor.distributorName, 
        'distributorContactName' : distributor.distributorContactName,
        'distributorPhoneNumber' : distributor.distributorPhoneNumber,
        'distributorMail': distributor.distributorMail,
        'active' : 'false'
      }, 
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  editDistributor(distributor: Distributor) {
    const dialogRef = this.dialog.open(DistributorDialogFormComponent, {
      width: '800px',
      height: '480px',
      data: distributor
    });

    dialogRef.afterClosed().subscribe(function(result){
      if(result.status == 'DONE'){
        window.location.reload();
      }
    });
  }

}