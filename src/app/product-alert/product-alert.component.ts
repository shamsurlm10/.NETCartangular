import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-alert',
  standalone: true,
  imports: [MatButtonModule,CommonModule],
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent {
  @Input() productInput!: Product;
  @Output() notify = new EventEmitter();
}
