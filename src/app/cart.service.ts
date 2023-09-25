import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];
  
  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getItems(){
    return this.cartItems;
  }

  clearCart(){
    this.cartItems = [];
    return this.cartItems;
  }

  constructor() { }
}
