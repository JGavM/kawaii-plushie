import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface Sale {
  saleId: string,
  saleDate: string,
  saleAppliedDiscount: string,
  order: {
    orderId: string,
    orderStatus: string,
    customer: {
      customerId: string,
      customerName: string,
      customerLastName: string
    }
  },
  article: {
    articleId: string,
    product: {
      productId: string,
      productName: string,
      productPrice: number,
      category: {
          categoryId: string,
          categoryName: string
      }
    }
  },
  delivery: {
    deliveryId: string,
    deliveryDate: string,
    expectedArrivalDate: string,
    actualArrivalDate: string
  }
}

@Component({
  selector: 'app-management-sales',
  templateUrl: './management-sales.component.html',
  styleUrls: ['./management-sales.component.css']
})
export class ManagementSalesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  sales: Sale[] = [ ];
  dataSource: MatTableDataSource<Sale>;
  displayedColumns: string[] = [
    'saleDate',
    'articleId',
    'productId',
    'productName',
    'productUnitPriceMXN',
    'saleAppliedDiscount',
    'orderId',
    'orderStatus',
    'customerName',
    'deliveryDate',
    'expectedArrivalDate',
    'actualArrivalDate',
  ];

  orderStatusDictionary = {
    'REVIEW': 'En revisión',
    'APPROVED': 'Aprobada',
    'SHIPPED': 'Enviada',
    'COMPLETED': 'Completada',
    'CANCELLED': 'Cancelada'
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.displaySales();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sales);
    // Assign the paginator to our data source
    this.dataSource.paginator = this.paginator;
    // Assign the a sorter to our data source
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    // Apply a filter to the dataSource after user input
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Return to first page after applying a filter
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  nestedFilterCheck(search, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key] + ' ';
    }
    return search;
  }

  // Related to back-end sale management
  async displaySales() {
    let res = await this.getSales();
    if(res.status == 200) {
      let body = <Sale[]>res.body
      for(let sale of body){
        let saleJson: Sale = JSON.parse(JSON.stringify(sale));
        this.sales.push(saleJson);
      }
      this.dataSource = new MatTableDataSource(this.sales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } 
  }

  getSales(): Promise<HttpResponse<Object>> {
    let token = localStorage.getItem('cutie-plushie-token')
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.get(
      '/api/v1/management/sales/?page=1&salesPerPage=1000000',
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  export() {

  }
}