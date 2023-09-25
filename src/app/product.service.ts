import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products: Product[] = [{
    id: 1,
    name: 'Samsung Galaxy S23',
    description: 'A large phone with one of the best screens',
    price: 750,
    imageUrl: 'https://image-us.samsung.com/us/smartphones/galaxy-s23/images/gallery/phantom-black/01-DM1-PhantomBlack-PDP-1600x1200.jpg?$product-details-jpg$',
    category: 'Phone',
    stockQuantity: 10,
    isAvailable: true,
    ratings: 4,
    reviews: ['Good', 'Nice', 'Awesome']
  },
  {
    id: 2,
    name: 'iPhone 13',
    description: 'A great phone with one of the best cameras',
    price: 100,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1631713938000',
    category: 'Phone',
    stockQuantity: 10,
    isAvailable: true,
    ratings: 4,
    reviews: ['Good', 'Nice', 'Awesome']
  },
  {
    id: 3,
    name: 'iPhone 13 Pro',
    description: 'A great phone with one of the best cameras',
    price: 100,
    imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-blue-select?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1631713938000',
    category: 'Phone',
    stockQuantity: 10,
    isAvailable: true,
    ratings: 4,
    reviews: ['Good', 'Nice', 'Awesome']
  }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

}
