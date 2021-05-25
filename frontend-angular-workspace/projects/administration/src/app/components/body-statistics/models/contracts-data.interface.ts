import { SingleSeries } from './single-series.interface';

export interface ContractsData {
  chartData: SingleSeries[];
  displayRangePicker: boolean;
  dateRange: Date[];
  dateStartDisplay: string;
  dateEndDisplay: string;
}
