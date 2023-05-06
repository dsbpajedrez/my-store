import { Component, OnInit } from '@angular/core';
import { Product, UpdateProductDTO, createProductDTO } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  date : Date;
  offset !: number ;
  limit !: number ;
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
    title: '',
    
  };
  showDetail : boolean=false;
  statusDetail : 'loading' | 'success' | 'error' | 'init' = 'init'
  constructor(
    private storeService : StoreService,
    private productsService : ProductsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
    this.date = new Date()
    this.offset  = 0;
    this.limit  = 10;
  }
  ngOnInit(): void {
    this.loadMore()
  }
  onAddToShoppingCart(producto : Product) {   
    this.storeService.addProduct(producto)  ;
    this.costoTotal =  this.storeService.getTotal();
  }
  showLateralDetail() {
    this.showDetail = !this.showDetail;
  }
  detailIdProduct(id : number){
    this.statusDetail = 'loading'
    this.productsService.getProduct(id)
      .subscribe({
        next : data =>{
          this.product = data;
          this.showLateralDetail()          
        },
        error : error => {
          alert(error);          
          this.statusDetail = 'error'
        }
      })
  }

  createNewProduct() {
    const newProduct : createProductDTO = {
      title : 'Nuevo',
      description : 'Nueva descripcion',
      images : ['data:image/jpeg;base64,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'],
      price : 1000,
      categoryId: 1
    }
    this.productsService.create(newProduct)
        .subscribe({
          next : data =>{
           this.products.unshift(data)           
          }
        })
  }

  updateProduct (){
    const id = 1;
    const updatedProduct : UpdateProductDTO ={
      title: 'titulo actualizado',
      
    }
    this.productsService.update(id, updatedProduct)
        .subscribe({
          next : data => {
           const productId = this.products.findIndex(item => item.id == this.product.id)
           this.products[productId] = data;   
           this.product = data;         
          }
        })
  }

  deleteProduct() {
    const id = this.product.id;
    this.productsService.delete(id)
      .subscribe({
        next : data =>{
          console.log(data);
          const productId = this.products.findIndex(item => item.id == this.product.id)
          this.products.splice(productId, 1);
          this.showDetail = false;
        }
      })
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
