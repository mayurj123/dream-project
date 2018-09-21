import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  // { path: 'address', component: AddressComponent },
  // { path: 'payment', component: PaymentComponent },
  // { path: 'order-success', component: OrderSuccessComponent },
  // { path: 'order-failed', component: OrderFailedComponent }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CheckoutRoutingModule { }
