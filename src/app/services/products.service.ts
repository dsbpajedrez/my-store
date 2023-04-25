import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_RRL = 'https://young-sands-07814.herokuapp.com/api/products'
  constructor(
    private http : HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>( this.API_RRL)
  }

  getProduct(id : number) {
    return this.http.get<Product>(this.API_RRL + '/' + id);
  }
}
