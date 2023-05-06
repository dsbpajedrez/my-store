import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Product, UpdateProductDTO, createProductDTO } from '../models/product.model';
import { catchError, retry, throwError, map } from 'rxjs';
import { checkTime } from '../interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = 'https://young-sands-07814.herokuapp.com/api/products'
  constructor(
    private http : HttpClient
  ) { }

  getAllProducts(limit:number, offset:number) {    
    return this.http.get<Product[]>( this.API_URL, { params:{limit, offset}, context: checkTime() })
          .pipe(
            //intenta el llamado de la api 3 veces
            retry(3),
            map(products => products.map(item => {
              return {
                ...item,
                taxes : 0.19 * item.price
              }
            }))
          )
  }

  getProduct(id : number) {
    return this.http.get<Product>(this.API_URL + '/' + id)
        .pipe(
          catchError((error : HttpErrorResponse)=>{
            if(error.status == 500){
              return throwError('Servidor en mantenimiento')
            }
            if(error.status == 404){
              return throwError('El producto no existe')
            }
            return throwError('Ups algo salio mal')
          })
        );
  }

  create(dto : createProductDTO) {
    return this.http.post<Product>(this.API_URL, dto);
  }

  update(id : number, dto : UpdateProductDTO) {
     return this.http.put<Product>( `${this.API_URL}/${id}`, dto);
  }
  delete(id : number) {
    return this.http.delete<boolean>( `${this.API_URL}/${id}`)
  }

}
