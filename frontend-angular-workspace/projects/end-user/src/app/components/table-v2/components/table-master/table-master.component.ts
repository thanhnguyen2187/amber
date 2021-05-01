import { Component, Input, OnInit } from '@angular/core';
import { TableMasterType } from './table-master.type';
import { TableRow } from '../../models/table-row';
import { ItemStoreName } from '../../../item-grid/item-store-v2.service';
import { TableStaticService } from '../../services/table-static.service';

@Component({
  selector: 'app-table-master',
  templateUrl: './table-master.component.html',
  styleUrls: ['./table-master.component.scss']
})
export class TableMasterComponent implements OnInit {

  @Input() title = '';
  @Input() type: TableMasterType = TableMasterType.ForSale;
  @Input() headerLabels: string[] = [];
  @Input() rows: TableRow[] = [];
  @Input() itemStoreName: ItemStoreName = 'forSale';

  get columnCount(): number {
    return this.headerLabels.length;
  }
  get total(): number {
    return this.tableStaticService.sumRows(
      {rows: this.rows}
    );
  }

  constructor(
    public tableStaticService: TableStaticService,
  ) { }

  ngOnInit(): void {
  }

}
