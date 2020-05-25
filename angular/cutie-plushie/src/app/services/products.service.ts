import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  SERVER_URL = "cutieplushie.azurewebsites.net/api/v1/web/";

  constructor(private http: HttpClient ,private route: Router) { }

  showMessage(){
    console.log("Service called")
  }

  //This method gets all the products 
  getAllProducts(limitOfResults=10): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  //This method gets all the products by id
  getSingleProduct(id: Number): Observable<any> {
    return this.http.get<any>(this.SERVER_URL + 'products/' + id);
  }


}
