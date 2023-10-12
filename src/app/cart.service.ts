import { Injectable, inject } from '@angular/core';
import { Cart } from './cart';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private cartItems: Cart[] = [];
  url='https://localhost:7174/api/Cart'
  constructor() {}

  addToCart(product: Cart) {
    this.cartItems.push(product);
  }

  async getItems(): Promise<Cart[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
