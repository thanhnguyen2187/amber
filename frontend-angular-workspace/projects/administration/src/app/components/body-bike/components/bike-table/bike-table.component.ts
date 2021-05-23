import { Component, OnInit } from '@angular/core';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { BikeTableHeaderLabels } from '../../data/bike-table/bike-table-header-labels';
import { BikeSearchService } from '../../services/bike-search.service';
import { CookedBikeModel } from '../../models/cooked-bike-model.interface';
import { BikeTransmissionsMap } from '../../data/bike-transmissions.map';
import { BikePurposesMap } from '../../data/bike-purposes.map';
import { BikeSearchDynamicFormGroups } from '../../data/bike-table/bike-search-dynamic-form-groups';
import { convertDynamicFormGroup } from 'amber-core';
import { CookedBikeModelFactory } from '../../data/cooked-bike-model.factory';

@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.scss']
})
export class BikeTableComponent implements OnInit {

  customCell = this.tableCellFactoryService.customCell;
  headerCells = BikeTableHeaderLabels.map(
    this.tableCellFactoryService.createHeaderCell
  );
  pageValue = 1;
  get page(): number {
    return this.pageValue;
  }
  set page(newValue: number) {
    this.pageValue = newValue;
    this.reload();
  }
  size = 4;
  totalValue = 1;
  get total(): number {
    return Math.ceil(this.totalValue / this.size);
  }
  cookedBikeModels: CookedBikeModel[] = [];

  bikeTypesMap = BikeTransmissionsMap;
  bikePurposesMap = BikePurposesMap;

  displaySearch = false;
  bikeSearchDynamicFormGroups = BikeSearchDynamicFormGroups;

  reload(): void {
    const body = {};
    Object.assign(
      body,
      ...this.bikeSearchDynamicFormGroups.map(
        dynamicFormGroup => convertDynamicFormGroup(dynamicFormGroup)
      )
    );
    this.bikeSearchService.reload(
      {
        page: this.pageValue,
        size: this.size,
        body,
      }
    );
  }

  newCookedBikeModel = CookedBikeModelFactory.createDefault();

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
    private bikeSearchService: BikeSearchService,
  ) {
    this.bikeSearchService.search$.subscribe(
      (response) => {
        this.cookedBikeModels = response.cookedBikeModels;
        this.totalValue = response.total;
      }
    );
    this.reload();
  }

  ngOnInit(): void {
  }

}
