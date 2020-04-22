import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-pages',
  templateUrl: './categories-pages.component.html',
  styleUrls: ['./categories-pages.component.css']
})
export class CategoriesPagesComponent implements OnInit {
  
  price = JSON.parse(localStorage.getItem('user-details')).price;
  description = JSON.parse(localStorage.getItem('user-details')).description;
  discount = JSON.parse(localStorage.getItem('user-details')).discount;

  constructor() { }

  ngOnInit(): void {
  }

}
