import { Product, products } from "./products";

export interface Category {
    name: string;
    products: Product[];
}

export const categories: Category[] = [
    {
        name: 'Electronics',
        products: [
            products[0], // Apple iPhone 15 Pro Max
            products[1], // Apple iPhone 13 mini
            products[2], // Mouse Defender Pandora GM-502
            products[3], // Smartphone Samsung Galaxy S22 Ultra
            products[4], // Sony PlayStation 5
            products[5], // Laptop Apple MacBook Pro 14
            products[6], // Canon EOS R5 Body
            products[7], // DJI Mavic Air 2 Fly More Combo
            products[8], // LG OLED65G3RLA
            products[9],  // Samsung Galaxy Watch 4 Classic
            products[10], // Apple iPhone 13
            products[11], // Apple AirPods 2nd gen
            products[12], // Samsung Galaxy A05
            products[13], // Samsung Galxy Buds2 Pro
            products[14] // TV Samsung UE50AU7100UXCE 127cm
        ]
    },
    {
        name: 'Apple',
        products: [
            products[0], // Apple iPhone 15 Pro Max
            products[1], // Apple iPhone 13 mini
            products[5],  // Laptop Apple MacBook Pro 14
            products[10], // Apple iPhone 13
            products[11], // Apple AirPods 2nd gen
        ]
    },
    {
        name: 'Samsung',
        products: [
            products[3], // Smartphone Samsung Galaxy S22 Ultra
            products[9],  // Samsung Galaxy Watch 4 Classic
            products[12], // Samsung Galaxy A05
            products[13], // Samsung Galxy Buds2 Pro
            products[14] // TV Samsung UE50AU7100UXCE 127cm
        ]
    },
    {
        name: 'Smartphones',
        products: [
            products[0], // Apple iPhone 15 Pro Max
            products[1], // Apple iPhone 13 mini
            products[3], // Smartphone Samsung Galaxy S22 Ultra
            products[10], // Apple iPhone 13
            products[12], // Samsung Galaxy A05
        ]
    }
];