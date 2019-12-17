import {Component, Input, OnInit} from '@angular/core';
import {RowFunctionModel} from '../model/row-function.model';

@Component({
  selector: 'app-function-row',
  templateUrl: './function-row.component.html',
  styleUrls: ['./function-row.component.css']
})
export class FunctionRowComponent implements OnInit {

  @Input()
  functions: RowFunctionModel[] = [];

  @Input()
  rowItem: any;

  constructor() { }

  ngOnInit() {
  }

  action(ac: RowFunctionModel) {
    ac.action(this.rowItem);
  }
}
