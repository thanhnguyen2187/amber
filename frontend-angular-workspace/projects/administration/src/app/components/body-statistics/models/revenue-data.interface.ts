import { SingleSeries } from './single-series.interface';

export interface RevenueData {
  chartData: SingleSeries[];
  displayRangePicker: boolean;
  dateRange: Date[];
  dateStartDisplay: string;
}
