import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-custom-date-time-picker',
  templateUrl: './custom-date-time-picker.component.html',
  styleUrls: ['./custom-date-time-picker.component.css']
})
export class CustomDateTimePickerComponent implements OnInit {

  selectedDate = new Date();

  startAt = new Date();

  exportTime = {hour: this.startAt.getHours(), minute: this.startAt.getMinutes(), meriden: this.selectedDate.getHours() > 11 ? 'PM' : 'AM', format: 24};

  constructor(private dialogRef: MatDialogRef<CustomDateTimePickerComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.onSelect(this.selectedDate);
  }

  ngOnInit(): void {
    let dateTime = this.data.dateTime;
    if (!moment(dateTime).isValid()) { dateTime = new Date(); }
    if (dateTime instanceof Date) {
      this.selectedDate = dateTime;
      this.exportTime.hour = dateTime.getHours();
      this.exportTime.minute = dateTime.getMinutes();
      this.exportTime.meriden = dateTime.getHours() > 11 ? 'PM' : 'AM';
    }
  }

  onSelect(event) {
    this.selectedDate = event;
  }

  onChangeHour(event) {
    console.log('event', event);
  }

  onSubmit(event) {
    const data = moment(this.selectedDate).format('DD/MM/YYYY') + ' ' + event.hour.toLocaleString('en-US', {
      useGrouping: false,
      minimumIntegerDigits: 2
    }) + ':' + event.minute.toLocaleString('en-US', {useGrouping: false, minimumIntegerDigits: 2});
    this.dialogRef.close(data);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
