import { Component, Input, OnInit } from '@angular/core';
import { TableCell, TableCellAmount, TableCellDate, TableCellImage, TableCellPlain } from './table-data.model';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit {

  // @ts-ignore
  @Input() tableCell: TableCell = {};
  // plainCell
  get isPlainCell(): boolean {
    return this.tableCell instanceof TableCellPlain;
  }
  get tableCellPlain(): TableCellPlain {
    return this.tableCell as TableCellPlain;
  }
  // amountCell
  get isAmountCell(): boolean {
    console.log('Check');
    return this.tableCell instanceof TableCellAmount;
  }
  get tableCellAmount(): TableCellAmount {
    return this.tableCell as TableCellAmount;
  }
  // imageCell
  get isImageCell(): boolean {
    return this.tableCell instanceof TableCellImage;
  }
  get tableCellImage(): TableCellImage {
    return this.tableCell as TableCellImage;
  }
  //
  get isDateCell(): boolean {
    return this.tableCell instanceof TableCellDate;
  }
  get tableCellDate(): TableCellDate {
    return this.tableCell as TableCellDate;
  }
  // tableCellPlain = (this.tableCell as TableCellPlain);

  constructor() { }

  ngOnInit(): void {
  }

}
