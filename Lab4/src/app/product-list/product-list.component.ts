import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { trigger, transition, animate, style } from '@angular/animations';

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

  constructor() {}

  ngOnInit() {
    this.slideImages();
  }

  slideImages() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
      if (this.currentIndex === 2) {
        this.currentIndex = 0; // Reset index to 0 when it reaches 2
      }
    }, 6000); // Adjust the interval as needed
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
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/