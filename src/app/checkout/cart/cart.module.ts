import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    EmptyCartComponent
  ],
  declarations: [EmptyCartComponent]
})
export class CartModule { }
