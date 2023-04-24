import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_RRL = 'https://fakestoreapi.com/'
  constructor(
    private http : HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>( this.API_RRL + 'products')
  }
}
