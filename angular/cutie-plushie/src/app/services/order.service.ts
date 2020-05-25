import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products: ProductResponseModel[] = [];
  SERVER_URL = "cutieplushie.azurewebsites.net/api/v1/web/";

  constructor(private http: HttpClient) {
  }


  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>('${this.SERVER_URL}products/${products}').toPromise();
  }
}

interface ProductResponseModel {
  id: Number;
  title: String;
  description: String;
  price: Number;
  quantityOrdered: Number;
  image: String;
}
