import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  price = JSON.parse(localStorage.getItem('user-details')).price;
  description = JSON.parse(localStorage.getItem('user-details')).description;
  discount = JSON.parse(localStorage.getItem('user-details')).discount;

  
  constructor() { }

  ngOnInit(): void {
  }

}
