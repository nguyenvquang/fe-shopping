import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {CalendarService} from '../../../service/calendar.service';
import {RowFunctionModel} from '../../../share-component/model/row-function.model';
import {MatDialog} from '@angular/material';
import {EventComponent} from '../event/event.component';
import {DialogComponent} from '../../../share-component/dialog/dialog.component';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {

  displayedColumns = ['name'];
  dataSource = [];
  page: number = 1;
  totalCollections: number = 0;

  functions = [new RowFunctionModel('fa fa-edit', 'Edit', 'Edit', (data) => this.editEvent(data)),
    new RowFunctionModel('fa fa-plus', 'Add Event', 'Add Event', (data) => this.addEvent(data)),
  ];

  constructor(private calendarService: CalendarService, private dialog: MatDialog) { }

  ngOnInit() {
    this.calendarService.list((data: any[]) => this.loadData(data));
  }

  private loadData(data: any) {
    this.dataSource = data.contents;
    this.totalCollections = data.totalCollections;
  }

  private editEvent(data: any) {
    console.log(data);
  }

  private addEvent(data: any) {
    console.log(data);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
