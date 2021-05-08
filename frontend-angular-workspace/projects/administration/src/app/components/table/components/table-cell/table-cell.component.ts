import { Component, Input, OnInit } from '@angular/core';
import { TableCell } from '../../models/table-cell';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit {

  @Input() tableCell: TableCell = {
    type: 'text',
    display: '',
  };
  @Input() extendedClasses: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
