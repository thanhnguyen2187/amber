import { Component, Input, OnInit } from '@angular/core';
import {
  Item,
  ItemService,
} from './item.service';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss']
})
export class ItemGridComponent implements OnInit {

  @Input() items: Item[] = [];

  setCurrentPageNumber(pageNumber: number): void {
  }

  constructor(
  ) { }

  ngOnInit(): void {
    // (
    //   this
    //   .itemService
    //   .getItems()
    //   .subscribe(
    //     (items) => this.items = items
    //   )
    // );
  }

}
