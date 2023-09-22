import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule, MatExpansionModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productInput!: Product;
  panelOpenState = false;
}
