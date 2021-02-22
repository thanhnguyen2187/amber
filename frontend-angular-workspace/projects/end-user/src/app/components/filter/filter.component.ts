import { Component, OnInit } from '@angular/core';
import { FilterGroup, FilterGroupService } from './filter-group.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterGroups: FilterGroup[] = [];

  constructor(
    private filterGroupService: FilterGroupService,
  ) { }

  ngOnInit(): void {
    this
    .filterGroupService
    .getFilterGroups()
    .subscribe(
      (filterGroups) => this.filterGroups = filterGroups
    );
  }

}
