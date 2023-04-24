import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product : Product = {
    id : 0,
    name : '',
    precio : 0,
    image : ''
  }
  @Output() addedProduct = new EventEmitter<Product>();
  onAddToCart = () => {
    this.addedProduct.emit(this.product);   
     
  }
}
