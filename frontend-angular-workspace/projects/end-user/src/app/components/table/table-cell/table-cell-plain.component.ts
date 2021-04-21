import { Component, Input, OnInit } from '@angular/core';
import { TableCell, TableCellPlain } from '../table-data.model';

@Component({
  selector: 'app-table-cell-plain',
  templateUrl: './table-cell-plain.component.html',
  styleUrls: ['./table-cell-plain.component.scss']
})
export class TableCellPlainComponent implements OnInit {

  @Input() tableCell: TableCell = new TableCell();
  get tableCellPlain(): TableCellPlain {
    return this.tableCell as TableCellPlain;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
