import { Routes } from "@angular/router";


export const routes: Routes = [
  {
    path: '',
    loadChildren: './landing/landing.module#LandingModule',
    data: { preload: true, delay: true },
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true, delay: true },
  },
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule',
      data: { preload: false, delay: false },
    },
    {
      path: 'checkout',
      loadChildren: './checkout/checkout.module#CheckoutModule',
      data: { preload: true, delay: true },
    }
]