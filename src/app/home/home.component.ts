import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProductLocationComponent } from '../product-location/product-location.component';
import { Productlocation } from '../productlocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ProductLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productLocation: Productlocation = {
    id: 1,
    companyname: 'Amazon',
    city: 'Seattle',
    state: 'WA',
    photo: 'https://m.media-amazon.com/images/I/71+1lOl1Y1L._AC_SL1500_.jpg',
    availableUnits: 100,
    isliquid: false,
    ishazardous: false,
    description: 'Acer 15.6" 10th Gen Intel Core i5'
  };
}
