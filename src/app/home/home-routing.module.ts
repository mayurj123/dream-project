import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './content/product-list/product-list.component';
import { HomeComponent } from './home.component';

export const HomeRoute = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomeComponent }
  //{ path: 'product_list', component: ProductListComponent }

];
