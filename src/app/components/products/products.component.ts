import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  date : Date;
  myShoppingCart : Product[] = [];
  costoTotal : number = 0;
  products : Product[] = []
  constructor(
    private storeService : StoreService,
    private productsService : ProductsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
    this.date = new Date()
  }
  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe({
        next : data =>{
          this.products = data
          console.log(data);
          
        },
        error : error => console.log(error)
        
      }
      )
  }
  onAddToShoppingCart(producto : Product) {
   
    this.storeService.addProduct(producto)  ;
    this.costoTotal =  this.storeService.getTotal();
  }

}
