import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  goHome() {
    this.router.navigate(['management']);
  }

  goTo(event: any) {
    let target = event.target.className;
    target = target.replace('toolbar-options ','');
    target = target.replace(' ng-star-inserted','');
    this.router.navigate(['management/' + target]);
  }

  logout(){
    localStorage.removeItem('cutie-plushie-token');
    localStorage.removeItem('user-details');
    this.router.navigate(['management/login']);
  }

  userIsLoggedIn(): boolean{
    return localStorage.getItem('cutie-plushie-token') != null;
  }

  userIsAdmin(): boolean{
    let details = localStorage.getItem('user-details');
    if(details != null){
      let user = JSON.parse(details);
      if(user.userGroup == "ADMIN"){
        return true;
      }
      return false
    }
    return false;
  }
}
