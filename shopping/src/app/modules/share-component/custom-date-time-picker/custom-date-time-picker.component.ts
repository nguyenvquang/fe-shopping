import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-date-time-picker',
  templateUrl: './custom-date-time-picker.component.html',
  styleUrls: ['./custom-date-time-picker.component.css']
})
export class CustomDateTimePickerComponent implements OnInit {

  selectedDate = new Date('2019/09/26');
  startAt = new Date('2019/09/11');
  minDate = new Date('2019/09/14');
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
  year: any;
  DayAndDate: string;
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  constructor(){
    this.onSelect(this.selectedDate);
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
    const dateString = event.toDateString();
    const dateValue = dateString.split(' ');
    this.year = dateValue[3];
    this.DayAndDate = dateValue[0] + ',' + ' ' + dateValue[1] + ' ' + dateValue[2];
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 ;
  }

  onChangeHour(event) {
    console.log('event', event);
  }

}
