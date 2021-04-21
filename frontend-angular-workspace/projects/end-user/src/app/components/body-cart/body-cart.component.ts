import { Component, OnInit } from '@angular/core';
import { TableStaticService } from '../table/table-static.service';
import { TableDynamicService } from '../table/table-dynamic.service';
import { TableCell, TableCellPlain, TableRowForSale } from '../table/table-data.model';
import { ItemStoreService } from '../item-grid/item-store.service';

@Component({
  selector: 'app-body-cart',
  templateUrl: './body-cart.component.html',
  styleUrls: ['./body-cart.component.scss']
})
export class BodyCartComponent implements OnInit {

  constructor(
    public tableStaticService: TableStaticService,
    public tableDynamicService: TableDynamicService,
    public itemStoreService: ItemStoreService,
  ) {
  }

  rowsForSale: TableRowForSale[] = [];

  ngOnInit(): void {
    this.tableDynamicService.saleRows$.subscribe(
      (rows) => this.rowsForSale = rows
    );
    this.itemStoreService.update();
  }

}
