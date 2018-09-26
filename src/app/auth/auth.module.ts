import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutes as routes } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModalModule
  ],
  declarations: [LoginComponent ]
})
export class AuthModule { }
