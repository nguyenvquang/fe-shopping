import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { SlidebarLayoutComponent } from './slidebar-layout/slidebar-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatSidenavModule} from '@angular/material';
import {ShareImportModule} from '../../share-import/share-import.module';


@NgModule({
  declarations: [AdminLayoutComponent, HeaderLayoutComponent, FooterLayoutComponent, SlidebarLayoutComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    ShareImportModule
  ]
})
export class AdminLayoutModule { }
