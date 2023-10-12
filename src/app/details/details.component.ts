import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {ProductAlertComponent} from '../product-alert/product-alert.component';
import {MatButtonModule} from '@angular/material/button';
import { CartItemService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatTabsModule, MatInputModule,MatFormFieldModule,FormsModule, ProductAlertComponent,MatButtonModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  product:Product|undefined;
  productId=-1;
  http: HttpClient = inject(HttpClient);

  constructor(private route: ActivatedRoute, private productService: ProductService){
    const productId = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(productId).then(product =>{
      this.product=product;
    })
  }
  
  addToCart(product: Product) {
    this.http.post('https://localhost:7174/api/Cart', { cartId: 'someCartId', quantity: 1, dateCreated: new Date(), productId: product.id }).subscribe(
      (response) => {
        window.alert('Your product has been added to the cart!');
      },
      (error) => {
        console.error('Failed to add the product to the cart:', error);
      }
    );
  }
  OnNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}

