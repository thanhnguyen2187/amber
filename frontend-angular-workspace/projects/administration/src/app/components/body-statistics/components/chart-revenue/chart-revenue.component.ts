import { Component, OnInit } from '@angular/core';
import { RevenueService } from '../../services/revenue.service';
import { SingleSeries } from '../../models/single-series.interface';
import { ChartComponentData } from '../../models/chart-component-data.interface';
import { ChartComponentDataFactory } from '../../data/chart-component-data.factory';

@Component({
  selector: 'app-chart-revenue',
  templateUrl: './chart-revenue.component.html',
  styleUrls: ['./chart-revenue.component.scss']
})
export class ChartRevenueComponent implements OnInit {

  revenueData: ChartComponentData = ChartComponentDataFactory.createDefault();

  toggleRangePicker(): void {
    this.revenueData.displayRangePicker = !this.revenueData.displayRangePicker;
    // the action is closing the range picker
    if (!this.revenueData.displayRangePicker) {
      this.revenueService.reload(
        {
          dateStart: this.revenueData.dateStartDisplay,
          dateEnd: this.revenueData.dateEndDisplay,
        }
      );
    }
  }

  constructor(
    private revenueService: RevenueService,
  ) {
    revenueService.revenueChartData$.subscribe(
      (data) => this.revenueData.chartData = data
    );
    revenueService.reload(
      {
        dateStart: '',
        dateEnd: '',
      }
    );
  }

  ngOnInit(): void {
  }

}
