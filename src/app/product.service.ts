import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  url = 'http://localhost:3000/products';

  async getAllProducts(): Promise<Product[]> {
    debugger;
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getProductById(id: number):Promise<Product | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }

}
