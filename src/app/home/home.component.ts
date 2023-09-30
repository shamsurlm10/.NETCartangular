import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent,
    MatGridListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: Product[] = [];
  filterProducts: Product[] = [];
  productservice: ProductService = inject(ProductService);

  constructor() {
    this.productservice.getAllProducts().then((products: Product[]) => {
      this.products = products;
      this.filterProducts = products;
    });
  }
  filterResult(text: string) {
    if (text) {
      this.filterProducts = this.products.filter((product) =>
        product?.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    else {
    this.filterProducts = this.products;
  }
  }
}
