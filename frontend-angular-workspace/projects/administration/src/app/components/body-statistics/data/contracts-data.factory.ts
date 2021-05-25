import { ContractsData } from '../models/contracts-data.interface';
import { format } from 'date-fns';

export class ContractsDataFactory {
  static createDefault(): ContractsData {
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
            return format(this.dateRange[0], 'yyyy-MM-dd');
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
            return format(this.dateRange[1], 'yyyy-MM-dd');
          default:
            return '[unpicked]';
        }
      },
    };
  }
}
