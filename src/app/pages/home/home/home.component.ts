import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  offset !: number ;
  limit !: number ;
  products : Product[] = []
  product : Product ={
    id : 0,
    category : {
      id: 0,
      name : ''
    },
    description: '',
    price : 0,
    images : [],
    title: '',
    
  };
  constructor(
    private productsService : ProductsService
  ){
    this.offset  = 0;
    this.limit  = 10;
  }
  ngOnInit(): void {
    this.loadMore()
  }
  loadMore() {
    this.productsService.getAllProducts(this.limit, this.offset)
      .subscribe({
        next : data => {
          this.products = this.products.concat(data);         
          this.offset += this.limit;
        }
      })
  }
}
