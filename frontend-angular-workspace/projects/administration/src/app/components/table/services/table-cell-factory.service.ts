import { Injectable } from '@angular/core';
import { TableCell } from '../models/table-cell';

@Injectable({
  providedIn: 'root'
})
export class TableCellFactoryService {

  // TODO: move the variable to somewhere else?
  customCell: TableCell = {
    type: 'custom',
    display: '',
  };

  createHeaderCell(label: string): TableCell {
    return {
      type: 'header',
      display: label,
    };
  }

  constructor() { }
}
