import { Injectable } from '@angular/core';
import { ItemStoreName, ItemStoreV2Service } from '../../item-grid/item-store-v2.service';
import { TableRow } from '../models/table-row';

@Injectable({
  providedIn: 'root'
})
export class TableStaticService {

  headerLabelsForSale: string[] = [
    'Image',
    'Name',
    'Price',
    'Amount',
    'Total',
  ];

  headerLabelsForRent: string[] = [
    'Image',
    'Name',
    'Price',
    'Amount',
    'Date Start',
    'Date End',
    'Day Count',
    'Total',
  ];

  headerLabelsForRentMonthly: string[] = [
    'Image',
    'Name',
    'Price',
    'Amount',
    'Date Start',
    'Date End',
    'Day Count',
    'Month Count',
    'Total',
  ];

  getRows(
    {
      itemStoreName,
    }: {
      itemStoreName: ItemStoreName,
    }
  ): TableRow[] {
    return this.itemStoreV2Service.getItems(
      {itemStoreName}
    ) as TableRow[];
  }

  sumRows(
    {
      rows,
    }: {
      rows: TableRow[],
    }
  ): number {
    let sum = 0;
    rows.forEach(
      row => sum += row.total
    );
    return sum;
  }

  constructor(
    public itemStoreV2Service: ItemStoreV2Service,
  ) { }
}
