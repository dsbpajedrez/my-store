import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToke(token : string) {
    localStorage.setItem('token',token)
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
