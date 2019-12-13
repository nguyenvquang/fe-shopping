import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ListItemModel} from '../model/list-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns = ['name', 'model', 'quantity', 'price'];
  dataSource = [];
  page: number = 1;
  totalCollections: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.list((data: any[]) => this.loadData(data));
  }

  private loadData(data: any) {
    this.dataSource = data.contents;
    this.totalCollections = data.totalCollections;
  }
}
