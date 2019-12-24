import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarListComponent} from './calendar-list/calendar-list.component';
import {CalendarEditComponent} from './calendar-edit/calendar-edit.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarListComponent, children: [
      {path: 'edit', component: CalendarEditComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
