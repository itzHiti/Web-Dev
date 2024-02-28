import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, products} from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<number>();

  increaseLikes() {
    this.product.likes++;
    this.like.emit(this.product);
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}
