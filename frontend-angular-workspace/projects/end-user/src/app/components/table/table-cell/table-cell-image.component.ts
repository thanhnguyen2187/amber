import { Component, Input, OnInit } from '@angular/core';
import { TableCell, TableCellImage } from '../table-data.model';

@Component({
  selector: 'app-table-cell-image',
  templateUrl: './table-cell-image.component.html',
  styleUrls: ['./table-cell-image.component.scss']
})
export class TableCellImageComponent implements OnInit {

  @Input() tableCell: TableCell = new TableCellImage('');
  get tableCellImage(): TableCellImage {
    return this.tableCell as TableCellImage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
