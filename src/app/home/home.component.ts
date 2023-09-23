import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ProductComponent, MatGridListModule, MatGridListModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  productservice: ProductService=inject(ProductService);

  constructor() { 
    this.products = this.productservice.getAllProducts();
  }
}
