import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import {CustomDateTimePickerComponent} from '../custom-date-time-picker/custom-date-time-picker.component';
import * as moment from 'moment';

@Component({
  selector: 'app-m-date-time-picker',
  templateUrl: './m-date-time-picker.component.html',
  styleUrls: ['./m-date-time-picker.component.css']
})
export class MDateTimePickerComponent implements OnInit {

  @Input()
  private dateTime = new Date();

  @Output()
  private changeDate = new EventEmitter();

  selectDateTime = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showDatePicker() {
    this.openDialog();
  }

  openDialog(): void {
    if (!moment(this.dateTime).isValid()) { this.dateTime = new Date(); }
    const dialogRef = this.dialog.open(CustomDateTimePickerComponent, {
      width: '600px',
      data: {dateTime: this.dateTime}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectDateTime = result || '';
      this.changeDate.emit(result);
    });
  }
}
