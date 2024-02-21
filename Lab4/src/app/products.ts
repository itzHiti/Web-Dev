export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  imageUrl: string;
  itemUrl: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro Max 256Gb gray',
    price: 1099,
    description: 'Apple iPhone 15 Pro Max - a titanium flagship with the new A17 Pro chip, advanced camera system, and thoughtful design. ' +
        'Weighing 221 grams. The processor provides 10% greater performance. ' +
        'The 6.7" display with a 120Hz refresh rate and Ceramic Shield protection. ' +
        'The main camera is 48 MP, the ultra-wide module is 12 MP, and the telephoto lens is 12 MP with optical zoom. ' +
        'The front camera is 12 MP with TrueDepth technology. ' +
        'USB Type-C provides transfer speeds of up to 10 Gbps. ' +
        'The battery provides up to 29 hours of video playback and charges 50% in 30 minutes.',
    rating: 5.0,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    itemUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
  },
  {
    id: 2,
    name: 'Apple iPhone 13 mini 512Gb black',
    price: 799,
    description: 'Apple iPhone 13 mini - a compact smartphone with a 5.4" Super Retina XDR display, A15 Bionic chip, and advanced camera system. ' +
        'Weighing 140 grams. The processor provides 15% greater performance. ' +
        'The main camera is 12 MP, the ultra-wide module is 12 MP, and the front camera is 12 MP with TrueDepth technology. ' +
        'The battery provides up to 17 hours of video playback and charges 50% in 30 minutes.',
    rating: 2.52,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h80/63998596349982.jpg?format=gallery-large',
    itemUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-512gb-chernyi-102298511/?c=750000000'
  },
  {
    id: 3,
    name: 'Mouse Defender Pandora GM-502 white',
    price: 10.99,
    description: '\n' +
        'Defender Pandora GM-502 mouse is a stylish gaming mouse features rainbow back-lightning and an ergonomic design for comfortable extended use. ' +
        'Quiet left and right buttons help to minimize unnecessary noise. ' +
        'Additionally, this model includes two additional side buttons, a pleasant soft-touch coating, and Teflon feet for smoother gliding on any surface.',
    rating: 4.35,
    imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h6b/82928063807518.jpg?format=gallery-large',
    itemUrl: 'https://kaspi.kz/shop/p/defender-pandora-gm-502-belyi-112644862/?c=750000000&ref=shared_link'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/