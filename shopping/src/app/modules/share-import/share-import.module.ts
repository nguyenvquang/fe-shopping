import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {ToastrModule} from 'ngx-toastr';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatTableModule
} from '@angular/material';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EchartsModule} from '../charts/echarts.module';

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
    EchartsModule
  ],
})
export class ShareImportModule {

}
