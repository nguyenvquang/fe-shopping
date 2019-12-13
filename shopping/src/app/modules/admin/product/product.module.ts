import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ShareImportModule} from '../../share-import/share-import.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProductListComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ShareImportModule,
    NgbPaginationModule
  ]
})
export class ProductModule { }
