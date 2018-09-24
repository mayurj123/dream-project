import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoute as homeRoute } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './content/product-list/product-list.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    
  ],
  declarations: [ProductListComponent,HomeComponent]
})
export class HomeModule { }
