import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CartItemService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Cart[] = []; 

  constructor(private cartService: CartItemService) {}

  ngOnInit() {
    this.cartService.getItems().then((items: Cart[]) => {
      this.items = items;
    });
  }
}