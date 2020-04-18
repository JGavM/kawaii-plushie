import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-login',
  templateUrl: './management-login.component.html',
  styleUrls: ['./management-login.component.css']
})
export class ManagementLoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('cutie-plushie-token')
      if(token != null){
        this.router.navigate(['management/home']);
    }
  }

  public validate(key, password) {
    return this.http.post('/api/v1/management/login', {'username' : key, 'password' : password}).toPromise()
  }
}
