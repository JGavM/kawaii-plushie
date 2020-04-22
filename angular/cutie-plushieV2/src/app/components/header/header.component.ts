import { Component, OnInit, NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    MaterialModule
  ]
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
