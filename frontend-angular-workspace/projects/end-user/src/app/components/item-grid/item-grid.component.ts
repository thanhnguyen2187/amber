import { Component, OnInit } from '@angular/core';
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

  currentPageNumber = 1;
  items: Item[] = [];

  setCurrentPageNumber(pageNumber: number): void {
    this.currentPageNumber = pageNumber;
  }

  constructor(
    private itemService: ItemService,
  ) { }

  ngOnInit(): void {
    (
      this
      .itemService
      .getItems()
      .subscribe(
        (items) => this.items = items
      )
    );
  }

}
