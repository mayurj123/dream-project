import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import {LandingRoute as landingRoute} from './landing-routing.module'
import { LandingComponent } from './landing.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductListComponent } from './lp-product-list/product-list.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoute),  
    MDBBootstrapModule.forRoot(),
  ],
    
  declarations: [BannerComponent,LandingComponent, ProductListComponent]
})
export class LandingModule { }
