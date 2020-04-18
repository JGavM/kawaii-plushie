import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('cutie-plushie-token');
    if(token != null){
      this.router.navigate(['management/home']);
    } else {
      this.router.navigate(['management/login']);
    }
  }

}
