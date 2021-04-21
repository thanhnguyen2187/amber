import { Component, Input, OnInit } from '@angular/core';
import { TableCell, TableCellDate } from '../table-data.model';

@Component({
  selector: 'app-table-cell-date',
  templateUrl: './table-cell-date.component.html',
  styleUrls: ['./table-cell-date.component.scss']
})
export class TableCellDateComponent implements OnInit {

  @Input() tableCell: TableCell = new TableCellDate();
  get tableCellDate(): TableCellDate {
    return this.tableCell as TableCellDate;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
