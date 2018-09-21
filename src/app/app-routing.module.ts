import { Routes } from "@angular/router";


export const routes: Routes = [
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