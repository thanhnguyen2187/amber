import { Component, Input, OnInit } from '@angular/core';
import { TableCell, TableCellAmount } from '../table-data.model';

@Component({
  selector: 'app-table-cell-amount',
  templateUrl: './table-cell-amount.component.html',
  styleUrls: ['./table-cell-amount.component.scss']
})
export class TableCellAmountComponent implements OnInit {

  @Input() tableCell: TableCell = new TableCellAmount();
  get tableCellAmount(): TableCellAmount {
    return this.tableCell as TableCellAmount;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
