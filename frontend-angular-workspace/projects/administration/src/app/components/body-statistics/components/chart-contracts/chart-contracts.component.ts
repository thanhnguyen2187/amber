import { Component, OnInit } from '@angular/core';
import { ChartComponentData } from '../../models/chart-component-data.interface';
import { ChartComponentDataFactory } from '../../data/chart-component-data.factory';
import { ContractsService } from '../../services/contracts.service';

@Component({
  selector: 'app-chart-contracts',
  templateUrl: './chart-contracts.component.html',
  styleUrls: ['./chart-contracts.component.scss']
})
export class ChartContractsComponent implements OnInit {

  contractsData: ChartComponentData = ChartComponentDataFactory.createDefault();

  toggleRangePicker(): void {
    this.contractsData.displayRangePicker = !this.contractsData.displayRangePicker;
    // the action is closing the range picker
    if (!this.contractsData.displayRangePicker) {
      this.contractsService.reload(
        {
          dateStart: this.contractsData.dateStartDisplay,
          dateEnd: this.contractsData.dateEndDisplay,
        }
      );
    }
  }

  constructor(
    private contractsService: ContractsService,
  ) {
    this.contractsService.contractsChartData$.subscribe(
      (data) => this.contractsData.chartData = data
    );
    this.contractsService.reload(
      {
        dateStart: '',
        dateEnd: '',
      }
    );
  }

  ngOnInit(): void {
  }

}
