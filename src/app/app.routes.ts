import { Routes } from "@angular/router";



export const routes: Routes = [
    {
      path: '',
      loadChildren: './landing/landing.module#LandingModule',
      data: { preload: true, delay: true },
    }
]