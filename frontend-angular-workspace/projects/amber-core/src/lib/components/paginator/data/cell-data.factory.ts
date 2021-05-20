import { CellData } from '../models/cell-data.interface';
import { CellType } from '../models/cell-data.type';
import { concat, from, Observable, of, range, zip } from 'rxjs';
import { filter, map, mergeAll, skip, toArray } from 'rxjs/operators';

export class CellDataFactory {

  static defaultLeftCells: CellData[] = [
    {
      key: 'first',
      label: '<<',
      type: CellType.first,
      action: () => {},
    },
    {
      key: 'previous',
      label: '<',
      type: CellType.previous,
      action: () => {},
    },
  ];

  static defaultRightCells: CellData[] = [
    {
      key: 'next',
      label: '>',
      type: CellType.next,
      action: () => {},
    },
    {
      key: 'last',
      label: '>>',
      type: CellType.last,
      action: () => {},
    },
  ];

  static createNumericNavigationCell(
    cellPageNumber: number,
    currentPageNumber: number,
  ): CellData {
    return {
      key: cellPageNumber,
      label: cellPageNumber.toString(),
      type: (
        cellPageNumber === currentPageNumber
          ? CellType.current
          : CellType.navigate
      ),
      action: () => {},
    };
  }

  static createEllipsisCell(): CellData {
    return {
      key: '...',
      label: '...',
      type: CellType.ellipsis,
      action: () => {},
    };
  }

  // TODO: find a better name
  static createAppropriateSideCell(
    {
      currentSideCell,
      currentPageNumber,
      numberOfPages,
    }: {
      currentSideCell: CellData,
      currentPageNumber: number,
      numberOfPages: number,
    }
  ): CellData {
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

  static createCells(
    total: number,
    current: number,
  ): CellData[] {
    const pageNumbers$ = range(
      1,
      total,
    ); // a sequence of 1 to 100
    const filteredNumbers = pageNumbers$.pipe(
      filter(
        (value) => (
          // (1 <= value && value <= 3) ||
          (value === 1) ||
          // (numberOfPages - 2 <= value && value <= numberOfPages) ||
          (value === total) ||
          (Math.abs(value - current) <= 2)
        )
      )
    );
    const paddedCells$: Observable<CellData[]> = zip(
      filteredNumbers,
      concat(
        filteredNumbers.pipe(skip(1)),
        of(undefined),
      ),
    ).pipe(
      map(
        ([firstNumber, secondNumber]) => {
          let cells: CellData[] = [];
          const firstNumberCell = this.createNumericNavigationCell(
            firstNumber,
            current,
          );
          // const secondNumberCell = ItemGridCellService.createNumericNavigationCell(secondNumber);
          if (
            !secondNumber ||
            firstNumber === secondNumber - 1
          ) {
            cells = [
              firstNumberCell,
            ];
          } else {
            let paddingCell: CellData;
            if (firstNumber === secondNumber - 2) {
              const middleNumber = firstNumber + 1;
              paddingCell = this.createNumericNavigationCell(
                middleNumber,
                current,
              );
            } else {
              paddingCell = this.createEllipsisCell();
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
    let paddedCells: CellData[] = [];
    paddedCells$.subscribe(
      (cells) => paddedCells = cells
    );

    return [
      ...this.defaultLeftCells.map(
        (leftCell) =>
          this.createAppropriateSideCell(
            {
              currentSideCell: leftCell,
              currentPageNumber: current,
              numberOfPages: total,
            }
          )
      ),
      ...paddedCells,
      ...this.defaultRightCells.map(
        (rightCell) =>
          this.createAppropriateSideCell(
            {
              currentSideCell: rightCell,
              currentPageNumber: current,
              numberOfPages: total,
            }
          )
      ),
    ];
  }

}
