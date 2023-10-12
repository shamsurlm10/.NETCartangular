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
import { CartService } from '../cart.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatTabsModule, MatInputModule,MatFormFieldModule,FormsModule, ProductAlertComponent,MatButtonModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  cartService: CartService = inject(CartService);
  productservice: ProductService=inject(ProductService);
  product:Product|undefined;
  productId=-1;
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(private route: ActivatedRoute){
    const productId = Number(this.route.snapshot.params['id']);
    this.productservice.getProductById(productId).then(product =>{
      this.product=product;
    })
  }
  OnNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}

