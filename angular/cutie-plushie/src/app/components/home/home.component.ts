import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {CartService} from "../../services/cart.service";

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [ ];

  constructor(private http: HttpClient,private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
  }

  async displayProducts() {
    let res = await this.getProducts();
    if(res.status == 200) {
      let body = <Product[]>res.body
      for(let product of body){
        console.log(product);
        let productJson: Product = JSON.parse(JSON.stringify(product));
        console.log(productJson);
        this.products.push(productJson);
      }
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
      'http://cutieplushie.azurewebsites.net/api/v1/web/products/',
      {headers: headers, observe: 'response', responseType: 'json'}
    ).toPromise().then(function(res) {
      return res;
    }).catch(function(err){ 
      return err;
    });
  }

  AddProduct(id: Number) {
    this.cartService.AddProductToCart(id);
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

}
