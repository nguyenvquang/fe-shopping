import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';
import { DatePipe } from './date.pipe';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {ShareServiceModule} from './modules/service/share-service.module';
import {PushNotificationService} from 'ngx-push-notifications';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PasswordDirective } from './password.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatInputModule} from '@angular/material';
import {ICanactive} from './modules/sercurity/i-canactive';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UrlInterceptor} from './modules/interceptor/url.interceptor';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ShareImportModule} from './modules/share-import/share-import.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    PasswordDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    NgbModule,
    NgbPaginationModule
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [PushNotificationService,
    // {provide: APP_BASE_HREF, useValue: '/abc'},
    // {
    //   provide: ICanactive,
    //   useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
    // },
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
