import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FilterGroup, FilterGroupService, FilterItem } from '../filter/filter-group.service';
import { Item, ItemService } from '../item-grid/item.service';
import { PrefixedHttpClientService } from '../../services/prefixed-http-client.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.scss']
})
export class ItemMasterComponent implements OnInit, AfterContentInit {

  filterGroups: FilterGroup[] = [];
  items: Item[] = [];
  currentPageNumber = 1;
  numberOfPages = 1;
  pageSize = 12;

  checkedTags: Set<string> = new Set<string>();

  constructor(
    private filterGroupService: FilterGroupService,
    private itemService: ItemService,
  ) {
  }

  ngAfterContentInit(): void {
    this.updateItems(true);
  }

  ngOnInit(): void {
    this
    .filterGroupService
    .getFilterGroups()
    .subscribe(
      (filterGroups) => this.filterGroups = filterGroups
    );
    // this
    // .itemService
    // .getItems()
    // .subscribe(
    //   (items) => this.items = items
    // );
  }

  updateItems(resetCurrentPage: boolean): void {
    if (resetCurrentPage) {
      this.currentPageNumber = 1;
    }
    this.itemService.getItems(
      [...this.checkedTags],
      this.currentPageNumber,
      this.pageSize,
    ).pipe(
    ).subscribe(
      bikeModelReturnResult => {
        this.items = bikeModelReturnResult.bikeModels;
        this.numberOfPages = Math.ceil(
          bikeModelReturnResult.total / bikeModelReturnResult.size
        );
        // console.log(this.numberOfPages);
        // this.numberOfPages = 10;
      }
    );
  }

}
