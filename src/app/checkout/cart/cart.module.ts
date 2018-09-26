import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { RouterModule } from '@angular/router';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { OrderTotalSummaryComponent } from './order-total-summary/order-total-summary.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[
    EmptyCartComponent,
    CartItemListComponent,
    OrderTotalSummaryComponent
  ],
  declarations: [EmptyCartComponent, CartItemListComponent, OrderTotalSummaryComponent]
})
export class CartModule { }
