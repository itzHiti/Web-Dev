export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  itemUrl: string;
  imageUrls: string[];
  likes: number;
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
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'],
    likes: 25
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
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h92/h80/63998596349982.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hff/h45/63998599888926.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h00/hda/63998603231262.jpg?format=gallery-medium'],
    likes: 10
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
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h79/h6b/82928063807518.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h44/h86/82928066002974.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h79/82928067674142.jpg?format=gallery-medium'],
    likes: 53
  },
  {
    id: 4,
    name: 'Smartphone Samsung Galaxy S22 Ultra 12GB/512GB Black',
    price: 1199,
    description: 'Samsung Galaxy S22 Ultra 512GB Phantom Black - Experience the power of the new Exynos 2200 processor and an advanced camera system with a 108MP main sensor, 12MP ultra-wide lens, and 10x optical zoom periscope lens. Enjoy smooth multitasking with 12GB of RAM and a vivid 6.8-inch Dynamic AMOLED 2X display. The large 5000mAh battery provides all-day usage, and fast charging gets you back to full power in no time.',
    rating: 4.8,
    itemUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-512-gb-chernyi-103668336/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h04/h77/64409443794974.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h62/h32/64409446088734.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h96/h7e/64409452642334.jpg?format=gallery-medium'],
    likes: 34
  },
  {
    id: 5,
    name: 'Sony PlayStation 5 white',
    price: 499,
    description: 'Sony PlayStation 5 Console - Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
    rating: 4.9,
    itemUrl: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h00/63948657491998.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h20/h34/63948659589150.jpg?format=gallery-medium'],
    likes: 69
  },
  {
    id: 6,
    name: 'Laptop Apple MacBook Pro 14 MKGP3 gray',
    price: 1999,
    description: 'Apple MacBook Pro 14" 512GB M1 Pro Chip - The new MacBook Pro features the powerful M1 Pro chip, delivering groundbreaking performance and incredible battery life. With a stunning 14-inch Liquid Retina XDR display, studio-quality mics, and a new array of ports including HDMI and SDXC, it\'s the ultimate tool for creatives and professionals.',
    rating: 4.7,
    itemUrl: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h9b/64200744763422.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/he5/h8b/64200747286558.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h3f/64200750301214.jpg?format=gallery-medium'],
    likes: 44
  },
  {
    id: 7,
    name: 'Canon EOS R5 Body',
    price: 3899,
    description: 'Canon EOS R5 Mirrorless Camera Body - Capture stunning images and cinematic 8K video with the Canon EOS R5. Featuring a 45MP full-frame sensor, 8K RAW video recording, and advanced Dual Pixel CMOS AF II, it\'s the ultimate choice for professional photographers and videographers.',
    rating: 2,
    itemUrl: 'https://kaspi.kz/shop/p/canon-eos-r5-body-104692263/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h42/h97/64376063229982.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hec/hc9/79741249028126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h29/79741249552414.jpg?format=gallery-medium'],
    likes: 3
  },
  {
    id: 8,
    name: 'DJI Mavic Air 2 Fly More Combo gray',
    price: 999,
    description: 'DJI Mavic Air 2 Fly More Combo Drone - Experience the ultimate aerial photography and videography with the DJI Mavic Air 2. Featuring a 1/2-inch CMOS sensor, 48MP photos, 4K video at 60fps, and a 34-minute flight time, it\'s the perfect tool for capturing breathtaking moments from above.',
    rating: 4.8,
    itemUrl: 'https://kaspi.kz/shop/p/dji-mavic-air-2-fly-more-combo-seryi-100302906/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/h99/63938263679006.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h75/h5e/63938267217950.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h70/hab/63938272952350.jpg?format=gallery-medium'],
    likes: 23
  },
  {
    id: 9,
    name: 'LG OLED65G3RLA 165 cm black',
    price: 2299,
    description: '[16K ULTRA-HYPER HD PICTURE QUALITY BY KASPI.KZ] LG OLED65C1PUB 65" 4K OLED Smart TV - Immerse yourself in stunning picture quality and cinematic sound with the LG OLED65C1PUB. Featuring a 65-inch OLED display, Dolby Vision IQ, Dolby Atmos, and webOS smart platform, it delivers an unparalleled viewing experience for movies, games, and more.',
    rating: 4.9,
    itemUrl: 'https://kaspi.kz/shop/p/lg-oled65g3rla-165-sm-chernyi-112414590/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h03/h16/82632103067678.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h7b/hdf/82632104116254.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h57/82632105689118.jpg?format=gallery-medium'],
    likes: 78
  },
  {
    id: 10,
    name: 'Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46mm',
    price: 349,
    description: 'Samsung Galaxy Watch 4 Classic 46mm - Stay connected and stylish with the Samsung Galaxy Watch 4 Classic. Featuring a classic design with a rotating bezel, it offers advanced health monitoring, fitness tracking, and seamless integration with your Samsung Galaxy devices. With up to 5 days of battery life and IP68 water resistance, it\'s the perfect companion for your active lifestyle.',
    rating: 4.7,
    itemUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/he7/h54/64342263889950.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hce/hf5/64342269657118.jpg?format=gallery-medium'],
    likes: 23
  },
  {
    id: 11,
    name: 'Apple iPhone 13 128Gb Midnight Black',
    price: 899,
    description: 'Apple iPhone 13 128Gb Midnight Black - The iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and advanced camera system. The main camera is 12 MP, the ultra-wide module is 12 MP, and the front camera is 12 MP with TrueDepth technology. The battery provides up to 19 hours of video playback and charges 50% in 30 minutes.',
    rating: 4.8,
    itemUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
    likes: 109
  },
  {
    id: 12,
    name: 'Apple AirPods 2nd generation white',
    price: 149,
    description: 'Apple AirPods 2nd Generation - Enjoy the freedom of wireless audio with the Apple AirPods. Featuring a new H1 chip for faster connectivity and an optional wireless charging case, they deliver an effortless and magical listening experience.',
    rating: 4.9,
    itemUrl: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/h52/84594232819742.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h83/84594232885278.jpg?format=gallery-medium'],
    likes: 203
  },
  {
    id: 13,
    name: 'Samsung Galaxy A05 4 GB/64 GB silver',
    price: 199,
    description: 'Samsung Galaxy A05 4 GB/64 GB Silver - The Samsung Galaxy A05 features a 6.5-inch Infinity-V display, a 13MP dual camera, and a 5000mAh battery. With 4GB of RAM and 64GB of storage, it\'s the perfect choice for everyday use.',
    rating: 3.5,
    itemUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a05-4-gb-64-gb-serebristyi-114692201/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hd7/h60/84523122360350.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h08/h2e/84523122425886.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8f/hf2/84523122491422.jpg?format=gallery-medium'],
    likes: 5
  },
  {
    id: 14,
    name: 'Samsung Galxy Buds2 Pro (SM-R510NZAACIS) black',
    price: 100,
    description: 'Samsung Galaxy Buds2 Pro - Enjoy premium sound quality and active noise cancellation with the Samsung Galaxy Buds2 Pro. Featuring a comfortable in-ear design, wireless charging, and a long-lasting battery, they\'re the perfect choice for music lovers on the go.',
    rating: 4.5,
    itemUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaacis-chernyi-106128763/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hc2/h75/64421533548574.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h44/h28/64421535842334.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h78/64421538627614.jpg?format=gallery-medium'],
    likes: 123
  },
  {
    id: 15,
    name: 'TV Samsung UE50AU7100UXCE 127cm black',
    price: 499,
    description: 'Samsung UE50AU7100UXCE 50" 4K UHD Smart TV - Enjoy stunning picture quality and immersive sound with the Samsung UE50AU7100UXCE. Featuring a 50-inch Crystal UHD display, HDR10+, and Adaptive Sound, it delivers an unparalleled viewing experience for movies, games, and more.',
    rating: 4.9,
    itemUrl: 'https://kaspi.kz/shop/p/samsung-ue50au7100uxce-127-sm-chernyi-101557919/?c=750000000',
    imageUrls: ['https://resources.cdn-kaspi.kz/img/m/p/hf8/h18/64094813585438.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hed/ha3/64094820139038.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hac/hcf/64094822039582.jpg?format=gallery-medium'],
    likes: 16
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/