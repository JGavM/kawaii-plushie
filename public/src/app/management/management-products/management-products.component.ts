import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

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

@Component({
  selector: 'app-management-products',
  templateUrl: './management-products.component.html',
  styleUrls: ['./management-products.component.css']
})
export class ManagementProductsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['productId','productName','productDescription','productUnitPriceMXN','productActiveDiscount', 'actions'];
  products: Product[] = [ ];
  dataSource = new MatTableDataSource(this.products);
  isAdmin = this.userIsAdmin();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.displayProducts();
  }

  ngOnInit(): void {
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



  // Related to back-end product management

  async displayProducts() {
    let res = await this.getProducts();
    if(res.status == 200) {
      this.dataSource.data = [];
      let body = <Product[]>res.body
      for(let product of body){
        console.log(product);
        let productJson: Product = JSON.parse(JSON.stringify(product));
        console.log(productJson);
        this.products.push(productJson);
      }
      this.dataSource.data = this.products;     
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } 
  }

  public getProducts(): Promise<HttpResponse<Object>> {
    let token = localStorage.getItem('cutie-plushie-token')
    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.get(
      '/api/v1/management/products/?page=1&productsPerPage=10000',
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  createProduct() {
    
  }

  async deleteProduct(product: Product) {
    let confirmation = confirm("Está seguro de que desea eliminar el producto? Esta operación no se puede deshacer.");
    if(!confirmation){
      return;
    }

    let res = await this.productDelete(product);
    if(res.status == 200) {
      alert('El producto se ha eliminado con éxito!');
      this.displayProducts();
    } else if(res.status == 401) {
      alert('Sus credenciales han expirado. Por favor inicie sesión de nuevo.');
      localStorage.removeItem('cutie-plushie-token');
      localStorage.removeItem('user-details');
      this.router.navigate(['management/login']);
    } else if(res.status == 403) {
      alert("INTENTO DE INTRUSIÓN.");
    }
  }

  productDelete(product: Product): Promise<HttpResponse<Object>> { 
    let token = localStorage.getItem('cutie-plushie-token');

    const headers = new HttpHeaders()
          .set("Authorization", "Bearer " + token);

    return this.http.put(
      '/api/v1/management/products/' + product.productId, 
      {
        'productName' : product.productName, 
        'productDescription' : product.productDescription,
        'productUnitPrice' : product.productUnitPriceMXN,
        'productIcon': product.productIcon,
        'active' : 'false',
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

  editProduct(product: Product) {
    console.log(product.productName);
  }

}


