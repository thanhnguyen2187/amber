import { Component, Input, OnInit } from '@angular/core';
import { TableRowForRent } from '../table-data.model';
import { TableStaticService } from '../table-static.service';
import { ItemStoreService, ItemStoreName } from '../../item-grid/item-store.service';

@Component({
  selector: 'app-table-master-for-rent',
  templateUrl: './table-master-for-rent.component.html',
  styleUrls: ['./table-master-for-rent.component.scss']
})
export class TableMasterForRentComponent implements OnInit {

  @Input() title = '';
  @Input() rows: TableRowForRent[] = [];
  @Input() itemStoreName: ItemStoreName = ItemStoreName.bikeRentalsDailyInsideCity;

  get total(): number {
    return this.tableStaticService.sumRows(this.rows);
  }

  constructor(
    public tableStaticService: TableStaticService,
    public itemStoreService: ItemStoreService,
  ) { }

  ngOnInit(): void {
  }

}
