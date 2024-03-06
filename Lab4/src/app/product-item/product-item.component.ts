import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<number>();
  isLiked: boolean = false;

  increaseLikes() {
    if (!(this.isLiked)) {
      this.isLiked = true;
      this.product.likes++;
    }
    else {
      this.isLiked = false;
      this.product.likes--;
    }
    this.like.emit(this.product);
  }

  removeProduct(product: any) {
    console.log('Remove button clicked'); // log
    this.remove.emit(product.id);
  }
}
