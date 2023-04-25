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
    category : {
      id : 0,
      name : ''
    },
    description: '',
    price : 0,
    images : [],
    title: ''

  }
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetailProduct = new EventEmitter<number>();
  onAddToCart = () => {
    this.addedProduct.emit(this.product);      
  }

  toggleToShowDetail() {
    this.showDetailProduct.emit(this.product.id);
  }
}
