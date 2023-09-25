import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  }
];

export default routeConfig;
