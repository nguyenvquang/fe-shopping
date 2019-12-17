import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input()
  page: number = 1;

  @Input()
  totalCollections: number = 0;

  @Input()
  pageSize: number = 10;

  @Output()
  pageSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  chagePage(p: any) {
    console.log(p);
    this.pageSelected.emit(p);
  }

}
