import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CalendarService} from '../../../service/calendar.service';
import * as moment from 'moment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  data: any;

  dateTime = new Date();
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startDate: new FormControl(new Date(), []),
    startTime: new FormControl(null, []),
    endDate: new FormControl(null, []),
    endTime: new FormControl(null, [])
  });

  constructor(private calendarServive: CalendarService) { }

  ngOnInit() {
    console.log(this.data);
  }

  save() {
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.calendarServive.createEvent(this.form.value);
  }


  onChangeHour(event) {
    this.dateTime = moment(event, 'DD/MM/YYYY hh:mm').toDate();

  }
}
