import { Component, Input, OnInit } from '@angular/core';
import { TableRowForSale } from '../table-data.model';
import { TableStaticService } from '../table-static.service';
import { ItemStoreService, ItemStoreName } from '../../item-grid/item-store.service';

@Component({
  selector: 'app-table-row-for-sale',
  templateUrl: './table-row-for-sale.component.html',
  styleUrls: ['./table-row-for-sale.component.scss']
})
export class TableRowForSaleComponent implements OnInit {

  @Input() row: TableRowForSale = new TableRowForSale(
    '',
    '',
    '',
    0,
    1,
  );
  @Input() index = 0;
  @Input() itemStoreName: ItemStoreName = ItemStoreName.bikeSales;

  confirmState: 'none' | 'confirm' = 'none';
  updateAmount(): void {
    this.itemStoreService.changeAmount(
      {
        storeItemName: this.itemStoreName,
        index: this.index,
        newAmountValue: this.row.amount,
      }
    );
  }

  remove(): void {
    this.itemStoreService.remove(
      {
        itemStoreName: this.itemStoreName,
        index: this.index,
      }
    );
  }

  constructor(
    public tableStaticService: TableStaticService,
    public itemStoreService: ItemStoreService,
  ) { }

  ngOnInit(): void {
  }

}
