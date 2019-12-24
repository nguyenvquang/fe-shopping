import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import {ShareImportModule} from '../../share-import/share-import.module';
import {ShareComponentModule} from '../../share-component/share-component.module';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [CalendarListComponent, CalendarEditComponent, EventComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ShareImportModule,
    ShareComponentModule,
  ],
  entryComponents: [
    EventComponent,
  ]
})
export class CalendarModule { }
