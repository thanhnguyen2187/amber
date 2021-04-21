import { Component, Input, OnInit } from '@angular/core';
import {
  TableCell,
  TableRow,
} from './table-data.model';
import { TableStaticService } from './table-static.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  constructor(
    public tableStaticService: TableStaticService,
  ) { }

  ngOnInit(): void {
  }

}
