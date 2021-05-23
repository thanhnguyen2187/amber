import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { range } from '../../utility-functions/range';
import { PaginatorDynamicService } from './services/paginator-dynamic.service';
import { PaginatorStaticService } from './services/paginator-static.service';
import { CellData } from './models/cell-data.interface';
import { CellType } from './models/cell-data.type';

@Component({
  selector: 'amber-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor(
    private paginatorStaticService: PaginatorStaticService,
    private paginatorDynamicService: PaginatorDynamicService,
  ) { }

  @Input() total = 1;

  currentValue = 1;
  @Input() get current(): number {
    return this.currentValue;
  }
  set current(newValue: number) {
    this.currentValue = newValue;
    this.currentChange.emit(newValue);
  }
  @Output() currentChange: EventEmitter<number> = new EventEmitter<number>();

  get cellsData(): CellData[] {
    return this.paginatorStaticService.createCells(
      this.total,
      this.current,
    ).map(
      cellData => {
        let action: () => void = () => {};
        switch (cellData.type) {
          case CellType.ellipsis:
          case CellType.current:
          case CellType.disabled:
            break;
          case CellType.navigate:
            action = () => {
              this.current = cellData.key as number;
            };
            break;
          case CellType.next:
            action = () => {
              this.current = Math.min(
                this.total, this.currentValue + 1,
              );
            };
            break;
          case CellType.previous:
            action = () => {
              this.current = Math.max(
                1, this.currentValue - 1,
              );
            };
            break;
          case CellType.first:
            action = () => {
              this.current = 1;
            };
            break;
          case CellType.last:
            action = () => {
              this.current = this.total;
            };
            break;
        }
        cellData.action = action;
        return cellData;
      }
    );
  }

  getCellClasses = this.paginatorStaticService.getCellClasses;

  ngOnInit(): void {
  }

}
