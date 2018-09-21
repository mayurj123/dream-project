import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderCartComponent } from './header/header-cart/header-cart.component';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent, HeaderSearchComponent, HeaderCartComponent, ProfileDropdownComponent]
})
export class LayoutModule { }
