import { Injectable } from '@angular/core';
import { ItemStoreName, ItemStoreV2Service } from '../../item-grid/item-store-v2.service';
import { BehaviorSubject } from 'rxjs';
import {
  TableRow,
  TableRowForRent,
  TableRowForRentMonthly,
  TableRowForSale,
} from '../models/table-row';
import { TableStaticService } from './table-static.service';
import { TableRowFactory } from '../models/table-row.factory';

@Injectable({
  providedIn: 'root'
})
export class TableDynamicService {

  rowsForSale$ = new BehaviorSubject<TableRowForSale[]>([]);
  rowsForRentDailyInsideCity$ = new BehaviorSubject<TableRowForRent[]>([]);
  rowsForRentDailyTraveling$ = new BehaviorSubject<TableRowForRent[]>([]);
  rowsForRentMonthly$ = new BehaviorSubject<TableRowForRentMonthly[]>([]);
  subjectMap: {
    [_ in ItemStoreName]: BehaviorSubject<any>
  } = {
    forSale: this.rowsForSale$,
    dailyInsideCity: this.rowsForRentDailyInsideCity$,
    dailyTraveling: this.rowsForRentDailyTraveling$,
    monthly: this.rowsForRentMonthly$,
  };

  updateSubjects(): void {
    for (const [itemStoreName, subject] of Object.entries(this.subjectMap)) {
      subject.next(
        // @ts-ignore
        this.itemStoreV2Service.getItems({itemStoreName}).map(
          (item) => TableRowFactory.createTableRowDynamic({
            // @ts-ignore
            type: itemStoreName,
            data: item,
          })
        )
      );
    }
  }

  updateSubject(
    {
      itemStoreName,
    }: {
      itemStoreName: ItemStoreName,
    }
  ): void {
    this.subjectMap[itemStoreName].next(
      this.tableStaticService.getRows({itemStoreName}).map(
        (item) => TableRowFactory.createTableRowDynamic({
          // @ts-ignore
          type: itemStoreName,
          data: item,
        })
      )
    );
  }

  clearAll(): void {
    this.itemStoreV2Service.clearAll();
    this.updateSubjects();
  }

  constructor(
    public tableStaticService: TableStaticService,
    public itemStoreV2Service: ItemStoreV2Service,
  ) { }
}
