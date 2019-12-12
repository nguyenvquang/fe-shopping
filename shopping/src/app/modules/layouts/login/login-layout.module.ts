import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [FooterLayoutComponent, HeaderLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    LoginLayoutRoutingModule
  ]
})
export class LoginLayoutModule { }
