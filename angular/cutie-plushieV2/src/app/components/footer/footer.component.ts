import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MaterialModule
  ]
})

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
