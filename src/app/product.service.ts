import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  url = 'https://localhost:7174/api/Product';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getProductById(id: number):Promise<Product | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }

}
