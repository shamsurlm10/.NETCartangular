import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartService: CartService = inject(CartService);
  items = this.cartService.getItems();
  constructor() {
  }
}
