import { Injectable } from '@angular/core';
import { CellData } from '../models/cell-data.interface';
import { CellDataFactory } from '../data/cell-data.factory';
import { CellType } from '../models/cell-data.type';

@Injectable({
  providedIn: 'root'
})
export class PaginatorStaticService {

  createCells(
    total: number,
    current: number,
  ): CellData[] {
    return CellDataFactory.createCells(total, current);
  }

  getCellClasses(type: CellType): string[] {
    switch (type) {
      case CellType.ellipsis:
        return [];
      case CellType.navigate:
        return [];
      case CellType.next:
        return [];
      case CellType.previous:
        return [];
      case CellType.first:
        return [];
      case CellType.last:
        return [];
      case CellType.current:
        return [
          'font-semibold',
        ];
      case CellType.disabled:
        return [
          'cursor-not-allowed',
          'text-gray-300',
          'bg-gray-100',
          'font-bold',
        ];
      default:
        return [];
    }
  }

  constructor() { }
}
