import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-home',
  templateUrl: './management-home.component.html',
  styleUrls: ['./management-home.component.css']
})
export class ManagementHomeComponent implements OnInit {

  userName = JSON.parse(localStorage.getItem('user-details')).userName;

  constructor() { }

  ngOnInit(): void {
  }

}
