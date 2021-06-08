import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableCellFactoryService } from '../../../table/services/table-cell-factory.service';
import { DateWrapper } from '../../models/date-wrapper.interface';
import { DateWrapperFactory } from '../../data/date-wrapper.factory';
import { StateSummarizingService } from '../../services/state-summarizing.service';
import { NumberPlateState } from '../../models/number-plate-state.interface';
import { StateSummarizingRequest } from '../../models/state-summarizing-request.interface';
import { BikeModelTypeWrapperFactory } from '../../data/bike-model-type-wrapper.factory';
import { CookedContract } from '../../models/cooked-contract.interface';
import { FetchContractService } from '../../services/fetch-contract.service';

@Component({
  selector: 'app-table-state-summarizer',
  templateUrl: './table-state-summarizer.component.html',
  styleUrls: ['./table-state-summarizer.component.scss']
})
export class TableStateSummarizerComponent implements OnInit {

  headerLabels = [
    'Free Bikes',
    'Booked Bikes',
    'Taken Bikes',
  ];
  bikeModelTypeWrappers = BikeModelTypeWrapperFactory.createDefaults();
  headerCells = this.headerLabels.map(
    this.tableCellFactoryService.createHeaderCell,
  );
  customCell = this.tableCellFactoryService.customCell;
  dateWrappersPicked: DateWrapper[] = DateWrapperFactory.createDateRange();
  get types(): string[] {
    return this.bikeModelTypeWrappers.filter(
      wrapper => wrapper.checked
    ).map(
      wrapper => wrapper.value
    );
  }
  bikeName = '';
  numberPlate = '';

  datePicked(index: number): Date[] {
    // @ts-ignore
    return [this.dateWrappersPicked[index].value];
  }

  setDatePicked(index: number, datesPicked: Date[]): void {
    this.dateWrappersPicked[index].value = datesPicked[0];
  }

  get request(): StateSummarizingRequest {
    return {
      dateStart: this.dateWrappersPicked[0].value,
      dateEnd: this.dateWrappersPicked[1].value,
      types: this.types,
      numberPlate: this.numberPlate,
      bikeName: this.bikeName,
    };
  }

  numberPlatesGroups: NumberPlateState[][] = [
    [],
    [],
    [],
  ];

  reload(): void {
    this.stateSummarizingService.reload(
      this.request,
    );
  }

  @Output() currentCookedContractChange = new EventEmitter<CookedContract>();
  emitContract(contractId: number): void {
    this.fetchContractService.fetchContract$(contractId).subscribe(
      cookedContract => this.currentCookedContractChange.emit(cookedContract)
    );
  }

  constructor(
    private tableCellFactoryService: TableCellFactoryService,
    private stateSummarizingService: StateSummarizingService,
    private fetchContractService: FetchContractService,
  ) {
    stateSummarizingService.stateSummarizing$.subscribe(
      response => {
        this.numberPlatesGroups = [
          response.numberPlatesFree,
          response.numberPlatesBooked,
          response.numberPlatesTaken,
        ];
      }
    );
  }

  ngOnInit(): void {
    this.reload();
  }

}
