import { Component, Input, OnInit } from '@angular/core';
import { TableRowForSale } from '../table-data.model';

@Component({
  selector: 'app-table-row-for-sale',
  templateUrl: './table-row-for-sale.component.html',
  styleUrls: ['./table-row-for-sale.component.scss']
})
export class TableRowForSaleComponent implements OnInit {

  @Input() rows: TableRowForSale[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
