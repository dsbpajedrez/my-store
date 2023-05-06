import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'https://young-sands-07814.herokuapp.com/api/auth'
  constructor(
    private http : HttpClient,
    private tokenService : TokenService
  ) { }

  login(email:string, password:string) {
    return this.http.post<Auth>(`${this.API_URL}/login`, {
      email,
      password
    })
    .pipe(
      tap(response => this.tokenService.saveToke(response.access_token))
    )
  }
  profile() {
    return this.http.get<User>(`${this.API_URL}/profile`)
  }
}
