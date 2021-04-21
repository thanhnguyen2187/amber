import { Component, Input, OnInit } from '@angular/core';
import { TableRowForRent, TableRowForSale } from '../table-data.model';
import { TableStaticService } from '../table-static.service';
import { TableDynamicService } from '../table-dynamic.service';

@Component({
  selector: 'app-table-master-for-sale',
  templateUrl: './table-master-for-sale.component.html',
  styleUrls: ['./table-master-for-sale.component.scss']
})
export class TableMasterForSaleComponent implements OnInit {

  @Input() title = '';
  @Input() rows: TableRowForSale[] = [];
  get total(): number {
    return this.tableStaticService.sumRows(this.rows);
  }

  constructor(
    public tableStaticService: TableStaticService,
  ) {
  }

  ngOnInit(): void {
  }

}
