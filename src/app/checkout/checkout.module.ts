import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { routes } from './checkout-routing.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CartModule
  ],
  declarations: [CartComponent]
})
export class CheckoutModule { }
