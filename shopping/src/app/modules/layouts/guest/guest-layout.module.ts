import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestLayoutRoutingModule } from './guest-layout-routing.module';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [HeaderLayoutComponent, FooterLayoutComponent, NavLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    GuestLayoutRoutingModule
  ]
})
export class GuestLayoutModule { }
