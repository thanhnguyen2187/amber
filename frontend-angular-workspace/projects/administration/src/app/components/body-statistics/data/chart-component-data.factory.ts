import { ChartComponentData } from '../models/chart-component-data.interface';
import { format } from 'date-fns';

export class ChartComponentDataFactory {
  static createDefault(): ChartComponentData {
    return {
      chartData: [],
      displayRangePicker: false,
      dateRange: [],
      get dateStartDisplay(): string {
        switch (this.dateRange.length) {
          case 0:
            return '[unpicked]';
          case 1:
          case 2:
            return this.dateRange[0]
              ? format(this.dateRange[0], 'yyyy-MM-dd')
              : '';
          default:
            return '[unpicked]';
        }
      },
      get dateEndDisplay(): string {
        switch (this.dateRange.length) {
          case 0:
          case 1:
            return '[unpicked]';
          case 2:
            return this.dateRange[1]
              ? format(this.dateRange[1], 'yyyy-MM-dd')
              : '';
          default:
            return '[unpicked]';
        }
      },
    };
  }
}
