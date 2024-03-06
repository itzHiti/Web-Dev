import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from '../products';
import { trigger, transition, animate, style } from '@angular/animations';
import { categories, Category } from "../categories";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('slideImages', [
      transition(':increment', [
        style({ opacity: 0 }), // start with opacity 0
        animate('1s', style({ opacity: 1 })), // fade in
        animate('3s', style({ opacity: 1 })), // stay visible
        animate('1s', style({ opacity: 0 })) // fade out
      ])
    ])
  ]
})

export class ProductListComponent implements OnInit {
  products = [...products];
  currentIndex = 0;
  currentProduct: any;
  categories: Category[] = categories;
  selectedCategory: Category | null = null;
  isLiked: boolean = false; // to avoid errors

  onSelectCategory(category: Category) {
    this.selectedCategory = category;
  }

  constructor() {}

  ngOnInit() {
    this.slideImages();
  }

  slideImages() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
      if (this.currentIndex === 3) {
        this.currentIndex = 0; // <- to reset index to 0 when it reaches 3 (the last index is 2)
      }
    }, 5000); // 1s = 1000
  }

  share(product: any) {
    this.currentProduct = product;
    const productName = encodeURIComponent(product.name);
    const productUrl = encodeURIComponent(window.location.href);

    const message = `Share ${productName} on Telegram or WhatsApp?`;

    if (window.confirm(message)) {
      const telegramUrl = `https://t.me/share/url?url=${productUrl}&text=${productName}`;

      const whatsappUrl = `whatsapp://send?text=${productName}%20${productUrl}`;

      window.open(telegramUrl);
      window.open(whatsappUrl);
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  redirectToKaspi(url: string) {
    window.location.href = url;
  }

  getStars(product: any) {
    return Array(Math.floor(product.rating)).fill(0);
  }

  onLike(product: Product) {
    // @ts-ignore
    const index = this.selectedCategory.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      if (!(this.isLiked)) {
        this.isLiked = true;
        // to avoid errors
        // @ts-ignore
        this.selectedCategory.products[index].likes++;
      }
      else {
        this.isLiked = false;
        // @ts-ignore
        this.selectedCategory.products[index].likes--;
      }
    }
    // In a real application, you might also want to update the likes in the database
  }

  onRemove(productId: number) {
    // @ts-ignore
    this.selectedCategory.products = this.selectedCategory.products.filter(product => product.id !== productId);
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/