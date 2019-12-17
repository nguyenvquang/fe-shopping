import {NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialog, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatTableModule
} from '@angular/material';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EchartsModule} from '../charts/echarts.module';
import {MaterialTimePickerModule} from '@candidosales/material-time-picker';

@NgModule({
  declarations: [],
  imports: [
    ToastrModule.forRoot(),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    NgxSpinnerModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    EchartsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MaterialTimePickerModule,
  ],
  exports: [
    ToastrModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSliderModule,
    NgxSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    EchartsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MaterialTimePickerModule
  ],
})
export class ShareImportModule {

}
