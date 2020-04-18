import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

    public isAuthenticated() : Boolean {
      let token = localStorage.getItem('cutie-plushie-token')
      if(token != null){
        return true;
      }
      return false;
    }
}
