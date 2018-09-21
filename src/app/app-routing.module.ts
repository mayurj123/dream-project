import { Routes } from "@angular/router";


export const routes: Routes = [
    {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule',
      data: { preload: false, delay: false },
    }
]