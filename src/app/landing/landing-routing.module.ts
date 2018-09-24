import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { LandingComponent } from './landing.component';

export const LandingRoute = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'banner', component: BannerComponent }

];
