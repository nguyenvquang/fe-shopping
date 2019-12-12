import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ShareServiceModule} from '../service/share-service.module';
import {ICanactive} from '../sercurity/i-canactive';
import {ShareImportModule} from '../share-import/share-import.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareServiceModule,
    ShareImportModule
  ],
  providers: [
    ICanactive
  ]
})
export class AdminModule { }
