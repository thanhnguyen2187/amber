import { Component, Input, OnInit } from '@angular/core';
import { TableRowForSale } from '../table-data.model';
import { TableStaticService } from '../table-static.service';
import { ItemStoreService, ItemStoreName } from '../../item-grid/item-store.service';

@Component({
  selector: 'app-table-master-for-sale',
  templateUrl: './table-master-for-sale.component.html',
  styleUrls: ['./table-master-for-sale.component.scss']
})
export class TableMasterForSaleComponent implements OnInit {

  @Input() title = '';
  @Input() rows: TableRowForSale[] = [];
  @Input() itemStoreName: ItemStoreName = ItemStoreName.bikeSales;

  get total(): number {
    return this.tableStaticService.sumRows(this.rows);
  }

  updateAmount(
    {
      // storeItemName,
      index,
      newAmountValue,
    }: {
      // storeItemName: string,
      index: number,
      newAmountValue: number,
    }
  ): void {
    this.itemStoreService.changeAmount(
      {
        storeItemName: this.itemStoreName,
        index,
        newAmountValue,
      }
    );
  }

  remove(
    index: number
  ): void {
    this.itemStoreService.remove(
      {
        itemStoreName: this.itemStoreName,
        index,
      }
    );
  }

  constructor(
    public tableStaticService: TableStaticService,
    public itemStoreService: ItemStoreService,
  ) {
  }

  ngOnInit(): void {
  }

}
