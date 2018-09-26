import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderCartComponent } from './header/header-cart/header-cart.component';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent
  ],
  declarations: [HeaderComponent, HeaderSearchComponent, HeaderCartComponent, ProfileDropdownComponent,FooterComponent, CategoriesComponent]
})
export class LayoutModule { }
