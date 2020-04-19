import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Product {
  productId: string,
  productName: string,
  productDescription: string,
  productUnitPriceMXN: number,
  productIcon: string,
  active: string,
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

@Component({
  selector: 'app-management-products',
  templateUrl: './management-products.component.html',
  styleUrls: ['./management-products.component.css']
})
export class ManagementProductsComponent implements OnInit {

  displayedColumns: string[] = ['productId','productName','productDescription','productUnitPriceMXN','productActiveDiscount'];
  products: Product[] = [
    {
      productId: "A",
      productName: "B",
      productDescription: "C",
      productUnitPriceMXN: 5,
      productIcon: "E",
      active: "F",
      productActiveDiscount: 0,
      supplier: {
        supplierId: "G",
        supplierName: "H",
      },
      category: {
        categoryId: "I",
        categoryName: "J",
      }
    },
    {
      productId: "A",
      productName: "AB",
      productDescription: "AA",
      productUnitPriceMXN: 15
      
      ,
      productIcon: "A",
      active: "A",
      productActiveDiscount: 0,
      supplier: {
        supplierId: "GA",
        supplierName: "HA",
      },
      category: {
        categoryId: "IA",
        categoryName: "JA",
      }
    }
  ];
  dataSource = new MatTableDataSource(this.products);

  

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getProducts(userId: string, userName: string, userLastName: string, userGroup: string, password: string): Promise<HttpResponse<Object>> {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


