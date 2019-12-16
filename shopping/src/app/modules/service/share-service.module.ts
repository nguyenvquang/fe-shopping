import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MessagingService} from './message.service';
import {AuthService} from './auth.service';
import {ToastrModule} from 'ngx-toastr';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {UrlInterceptor} from '../interceptor/url.interceptor';
import {ShareImportModule} from '../share-import/share-import.module';
import {ProductService} from './product.service';
import {CalendarService} from './calendar.service';



@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    ShareImportModule,
    ToastrModule.forRoot()
  ],
  exports: [
  ],
  providers: [
    UserService,
    MessagingService,
    AuthService,
    ProductService,
    CalendarService
  ]
})
export class ShareServiceModule { }
