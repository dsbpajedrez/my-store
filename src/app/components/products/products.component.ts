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
  product : Product ={
    id : 0,
    category : {
      id: 0,
      name : ''
    },
    description: '',
    price : 0,
    images : [],
    title: ''
  };
  showDetail : boolean=false;
  // detailProductId:number = 0;
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
        },
        error : error => console.log(error)        
      }
      )
  }
  onAddToShoppingCart(producto : Product) {   
    this.storeService.addProduct(producto)  ;
    this.costoTotal =  this.storeService.getTotal();
  }

  showLateralDetail() {
    this.showDetail = !this.showDetail;
  }
  detailIdProduct(id : number){
   
    this.productsService.getProduct(id)
      .subscribe({
        next : data =>{
          this.product = data;
          this.showLateralDetail()
        }
      })
  }

}
