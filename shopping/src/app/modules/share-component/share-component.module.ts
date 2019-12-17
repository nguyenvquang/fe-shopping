import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging/paging.component';
import { NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatIconModule, MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { FunctionRowComponent } from './function-row/function-row.component';
import { DialogComponent } from './dialog/dialog.component';
import { CustomDateTimePickerComponent } from './custom-date-time-picker/custom-date-time-picker.component';
import {MaterialTimePickerModule} from '@candidosales/material-time-picker';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [PagingComponent, TableComponent, FunctionRowComponent, DialogComponent, CustomDateTimePickerComponent],
  exports: [
    PagingComponent,
    TableComponent,
    CustomDateTimePickerComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MaterialTimePickerModule,
    FlexLayoutModule
  ],
  entryComponents: [
    DialogComponent,
  ]
})
export class ShareComponentModule { }
