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

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatTabsModule, MatInputModule,MatFormFieldModule,FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  productservice: ProductService=inject(ProductService);
  product:Product|undefined;
  productId=-1;
  constructor(private route: ActivatedRoute){
    this.productId = Number(this.route.snapshot.params['id']);
    this.product = this.productservice.getProductById(this.productId);
  }
}

