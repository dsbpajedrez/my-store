import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDTO, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = 'https://young-sands-07814.herokuapp.com/api/users'
  constructor(
    private http : HttpClient
  ) { }

  create(dto : CreateUserDTO) {
    return this.http.post<User>(this.API_URL, dto)
  }

  get() {
    return this.http.get<User[]>(this.API_URL)
  }

}
