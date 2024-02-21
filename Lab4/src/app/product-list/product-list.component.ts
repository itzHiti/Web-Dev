import { Component } from '@angular/core';
import { products } from '../products';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  currentProduct: any; // Текущий продукт, который будет использоваться для деления ссылкой

  share(product: any) {
    this.currentProduct = product;
    const productName = encodeURIComponent(product.name);
    const productUrl = encodeURIComponent(window.location.href);

    const message = `Share ${productName} on Telegram or WhatsApp?`;

    if (window.confirm(message)) {
      // Формируем ссылку для Telegram
      const telegramUrl = `https://t.me/share/url?url=${productUrl}&text=${productName}`;

      // Формируем ссылку для WhatsApp
      const whatsappUrl = `whatsapp://send?text=${productName}%20${productUrl}`;

      // Открываем новое окно или переходим в новую вкладку для обеих ссылок
      window.open(telegramUrl);
      window.open(whatsappUrl);
    }
  }
onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/