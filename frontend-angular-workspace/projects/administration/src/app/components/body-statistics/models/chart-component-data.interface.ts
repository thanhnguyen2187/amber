import { SingleSeries } from './single-series.interface';

export interface ChartComponentData {
  chartData: SingleSeries[];
  displayRangePicker: boolean;
  dateRange: Date[];
  dateStartDisplay: string;
  dateEndDisplay: string;
}
