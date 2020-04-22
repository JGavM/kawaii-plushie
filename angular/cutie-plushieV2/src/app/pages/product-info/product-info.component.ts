import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  panelOpenState = false;
  price = JSON.parse(localStorage.getItem('user-details')).price;
  description = JSON.parse(localStorage.getItem('user-details')).description;
  discount = JSON.parse(localStorage.getItem('user-details')).discount;
  productName = JSON.parse(localStorage.getItem('user-details')).productName;

  constructor() { }

  ngOnInit(): void {
  }

}
