import { Component, Input, OnInit} from '@angular/core';
import {RowFunctionModel} from '../model/row-function.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  displayedColumns = [];

  @Input()
  displayedTitles = [];

  @Input()
  dataSource = [];

  @Input()
  page: number = 1;

  @Input()
  totalCollections: number = 0;

  @Input()
  functions: RowFunctionModel[] = [];


  constructor() {

  }

  ngOnInit() {
    if (!this.displayedColumns.includes('position')) {
      this.displayedColumns.splice(0, 0, 'position');
    }
    if (!this.displayedColumns.includes('function')) {
      this.displayedColumns.splice(this.displayedColumns.length, 0, 'function');
    }

    // this.displayedColumns.push('function');
  }

}
