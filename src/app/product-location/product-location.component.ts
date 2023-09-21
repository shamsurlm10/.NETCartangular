import { Component, Input } from '@angular/core';
import { Productlocation } from '../productlocation';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-product-location',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './product-location.component.html',
  styleUrls: ['./product-location.component.css']
})
export class ProductLocationComponent {
  @Input() productLocationInput!: Productlocation;
}
