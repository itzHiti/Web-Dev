export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  itemUrl: string;
  imageUrls: string[];
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
    itemUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium']
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
    itemUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-512gb-chernyi-102298511/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h92/h80/63998596349982.jpg?format=gallery-large']
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
    itemUrl: 'https://kaspi.kz/shop/p/defender-pandora-gm-502-belyi-112644862/?c=750000000&ref=shared_link',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h79/h6b/82928063807518.jpg?format=gallery-large']
  },
  {
    id: 4,
    name: 'Smartphone Samsung Galaxy S22 Ultra 12GB/512GB Black',
    price: 1199,
    description: 'Samsung Galaxy S22 Ultra 512GB Phantom Black - Experience the power of the new Exynos 2200 processor and an advanced camera system with a 108MP main sensor, 12MP ultra-wide lens, and 10x optical zoom periscope lens. Enjoy smooth multitasking with 12GB of RAM and a vivid 6.8-inch Dynamic AMOLED 2X display. The large 5000mAh battery provides all-day usage, and fast charging gets you back to full power in no time.',
    rating: 4.8,
    itemUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-512-gb-chernyi-103668336/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h04/h77/64409443794974.jpg?format=gallery-large']
  },
  {
    id: 5,
    name: 'Sony PlayStation 5 white',
    price: 499,
    description: 'Sony PlayStation 5 Console - Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
    rating: 4.9,
    itemUrl: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-large']
  },
  {
    id: 6,
    name: 'Laptop Apple MacBook Pro 14 MKGP3 gray',
    price: 1999,
    description: 'Apple MacBook Pro 14" 512GB M1 Pro Chip - The new MacBook Pro features the powerful M1 Pro chip, delivering groundbreaking performance and incredible battery life. With a stunning 14-inch Liquid Retina XDR display, studio-quality mics, and a new array of ports including HDMI and SDXC, it\'s the ultimate tool for creatives and professionals.',
    rating: 4.7,
    itemUrl: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h9b/64200744763422.jpg?format=gallery-large']
  },
  {
    id: 7,
    name: 'Canon EOS R5 Body',
    price: 3899,
    description: 'Canon EOS R5 Mirrorless Camera Body - Capture stunning images and cinematic 8K video with the Canon EOS R5. Featuring a 45MP full-frame sensor, 8K RAW video recording, and advanced Dual Pixel CMOS AF II, it\'s the ultimate choice for professional photographers and videographers.',
    rating: Infinity,
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h42/h97/64376063229982.jpg?format=gallery-large'],
    itemUrl: 'https://kaspi.kz/shop/p/canon-eos-r5-body-104692263/?c=750000000'
  },
  {
    id: 8,
    name: 'DJI Mavic Air 2 Fly More Combo gray',
    price: 999,
    description: 'DJI Mavic Air 2 Fly More Combo Drone - Experience the ultimate aerial photography and videography with the DJI Mavic Air 2. Featuring a 1/2-inch CMOS sensor, 48MP photos, 4K video at 60fps, and a 34-minute flight time, it\'s the perfect tool for capturing breathtaking moments from above.',
    rating: 4.8,
    itemUrl: 'https://kaspi.kz/shop/p/dji-mavic-air-2-fly-more-combo-seryi-100302906/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h99/63938263679006.jpg?format=gallery-large']
  },
  {
    id: 9,
    name: 'LG OLED65G3RLA 165 cm black',
    price: 2299,
    description: '[16K ULTRA-HYPER HD PICTURE QUALITY BY KASPI.KZ] LG OLED65C1PUB 65" 4K OLED Smart TV - Immerse yourself in stunning picture quality and cinematic sound with the LG OLED65C1PUB. Featuring a 65-inch OLED display, Dolby Vision IQ, Dolby Atmos, and webOS smart platform, it delivers an unparalleled viewing experience for movies, games, and more.',
    rating: 4.9,
    itemUrl: 'https://kaspi.kz/shop/p/lg-oled65g3rla-165-sm-chernyi-112414590/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h03/h16/82632103067678.jpg?format=gallery-large']
  },
  {
    id: 10,
    name: 'Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46mm',
    price: 349,
    description: 'Samsung Galaxy Watch 4 Classic 46mm - Stay connected and stylish with the Samsung Galaxy Watch 4 Classic. Featuring a classic design with a rotating bezel, it offers advanced health monitoring, fitness tracking, and seamless integration with your Samsung Galaxy devices. With up to 5 days of battery life and IP68 water resistance, it\'s the perfect companion for your active lifestyle.',
    rating: 4.7,
    itemUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-large']
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/