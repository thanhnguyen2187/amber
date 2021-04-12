import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterGroup, FilterGroupService, FilterItem } from './filter-group.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterGroups: FilterGroup[] = [];
  checkedTags: Set<string> = new Set<string>();
  @Output() checkedTagsChange = new EventEmitter<Set<string>>();

  invertFilterItem(filterItem: FilterItem): void {
    filterItem.checked = !filterItem.checked;
  }
  correctCheckedTags(filterItem: FilterItem): void {
    if (filterItem.checked) {
      this.checkedTags.add(filterItem.key);
    } else {
      this.checkedTags.delete(filterItem.key);
    }
    this.checkedTagsChange.emit(this.checkedTags);
  }

  constructor(
    private filterGroupService: FilterGroupService,
  ) {
  }

  ngOnInit(): void {
    // this
    // .filterGroupService
    // .getFilterGroups()
    // .subscribe(
    //   (filterGroups) => this.filterGroups = filterGroups
    // );
  }

}
