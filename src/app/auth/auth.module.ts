import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutes as routes } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
