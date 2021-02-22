import { Injectable } from '@angular/core';
import { concat, from, Observable, of, range, zip } from 'rxjs';
import {
  filter,
  map,
  mergeAll,
  skip,
  toArray,
} from 'rxjs/operators';

export enum CellType {
  ellipsis,
  navigate,
  next,
  previous,
  first,
  last,
  current,
  disabled,
}

export interface Cell {
  key: string | number;
  label: string;
  type: CellType;
  // action: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaginationBarCellService {

  defaultLeftCells: Cell[] = [
    {
      key: 'first',
      label: '<<',
      type: CellType.first,
    },
    {
      key: 'previous',
      label: '<',
      type: CellType.previous,
    },
  ];

  defaultRightCells: Cell[] = [
    {
      key: 'next',
      label: '>',
      type: CellType.next,
    },
    {
      key: 'last',
      label: '>>',
      type: CellType.last,
    },
  ];

  static createNumericNavigationCell(
    cellPageNumber: number,
    currentPageNumber: number,
  ): Cell {
    return {
      key: cellPageNumber.toString(),
      label: cellPageNumber.toString(),
      type: (
        cellPageNumber === currentPageNumber
          ? CellType.current
          : CellType.navigate
      ),
    };
  }

  static createEllipsisCell(): Cell {
    return {
      key: '...',
      label: '...',
      type: CellType.ellipsis,
    };
  }

  // TODO: find a better name
  static createAppropriateSideCell(
    {
      currentSideCell,
      currentPageNumber,
      numberOfPages,
    }: {
      currentSideCell: Cell,
      currentPageNumber: number,
      numberOfPages: number,
    }
  ): Cell {
    return {
      ...currentSideCell,
      type: (
        (
          (
            (
              currentSideCell.type === CellType.first ||
              currentSideCell.type === CellType.previous
            ) && currentPageNumber === 1
          ) ||
          (
            (
              currentSideCell.type === CellType.last ||
              currentSideCell.type === CellType.next
            ) && currentPageNumber === numberOfPages
          )
        )
          ? CellType.disabled
          : currentSideCell.type
      ),
    };
  }

  createCells(
    numberOfPages: number,
    currentPageNumber: number,
  ): Cell[] {
    const pageNumbers$ = range(
      1,
      numberOfPages,
    ); // a sequence of 1 to 100
    const filteredPageNumbers$ = pageNumbers$.pipe(
      filter(
        (value) => (
          // (1 <= value && value <= 3) ||
          (value === 1) ||
          // (numberOfPages - 2 <= value && value <= numberOfPages) ||
          (value === numberOfPages) ||
          (Math.abs(value - currentPageNumber) <= 2)
        )
      )
    );
    const paddedCells$: Observable<Cell[]> = zip(
      filteredPageNumbers$,
      concat(
        filteredPageNumbers$.pipe(skip(1)),
        of(undefined),
      ),
    ).pipe(
      map(
        ([firstPageNumber, secondPageNumber]) => {
          let cells: Cell[] = [];
          const firstNumberCell = PaginationBarCellService.createNumericNavigationCell(
            firstPageNumber,
            currentPageNumber,
          );
          // const secondNumberCell = ItemGridCellService.createNumericNavigationCell(secondNumber);
          if (
            !secondPageNumber ||
            firstPageNumber === secondPageNumber - 1
          ) {
            cells = [
              firstNumberCell,
            ];
          } else {
            let paddingCell: Cell;
            if (firstPageNumber === secondPageNumber - 2) {
              const middleNumber = firstPageNumber + 1;
              paddingCell = PaginationBarCellService.createNumericNavigationCell(
                middleNumber,
                currentPageNumber,
              );
            } else {
              paddingCell = PaginationBarCellService.createEllipsisCell();
            }
            cells = [
              firstNumberCell,
              paddingCell,
              // secondNumberCell,
            ];
          }

          return from(cells);
        }
      ),
      mergeAll(),
      toArray(),
    );
    let paddedCells: Cell[] = [];
    paddedCells$.subscribe(
      (cells) => paddedCells = cells
    );

    return [
      ...this.defaultLeftCells.map(
        (leftCell) =>
          PaginationBarCellService.createAppropriateSideCell(
            {
              currentSideCell: leftCell,
              currentPageNumber,
              numberOfPages,
            }
          )
      ),
      ...paddedCells,
      ...this.defaultRightCells.map(
        (rightCell) =>
          PaginationBarCellService.createAppropriateSideCell(
            {
              currentSideCell: rightCell,
              currentPageNumber,
              numberOfPages,
            }
          )
      ),
    ];
  }

  constructor() { }
}
