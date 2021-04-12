import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell, CellType, PaginationBarCellService, } from './pagination-bar-cell.service';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss']
})
export class PaginationBarComponent implements OnInit {

  cells: Cell[] = [];
  // tslint:disable-next-line:variable-name
  _numberOfPages = 1;
  @Input() get numberOfPages(): number {
    return this._numberOfPages;
  }
  set numberOfPages(value: number) {
    this._numberOfPages =
      value >= 1
        ? value
        : 1;
    this.updateCells();
  }
  @Input() currentPageNumber = 1;
  @Output() currentPageNumberChange: EventEmitter<number> = new EventEmitter<number>();

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

  executeCellAction(cell: Cell): void {
    switch (cell.type) {
      case CellType.ellipsis:
        break;
      case CellType.navigate:
        this.setCurrentPageNumber(
          Number(cell.key)
        );
        break;
      case CellType.next:
        this.setCurrentPageNumber(
          Math.min(
            this.numberOfPages,
            this.currentPageNumber + 1,
          )
        );
        break;
      case CellType.previous:
        this.setCurrentPageNumber(
          Math.max(
            1,
            this.currentPageNumber - 1,
          )
        );
        break;
      case CellType.first:
        this.setCurrentPageNumber(1);
        break;
      case CellType.last:
        this.setCurrentPageNumber(this.numberOfPages);
        break;
      case CellType.current:
        break;
      case CellType.disabled:
        break;
      default:
        break;
    }
  }

  setCurrentPageNumber(newPageNumber: number): void {
    this.currentPageNumber = newPageNumber;
    this.currentPageNumberChange.emit(newPageNumber);
    this.updateCells();
  }

  updateCells(): void {
    this.cells = this.itemGridCellService.createCells(
      this.numberOfPages,
      this.currentPageNumber,
    );
  }

  constructor(
    private itemGridCellService: PaginationBarCellService,
  ) { }

  ngOnInit(): void {
    this.cells = this.itemGridCellService.createCells(
      this.numberOfPages,
      this.currentPageNumber,
    );
  }

}
