import { dayOfWeekLabels } from './day-of-week.labels';
import { RangePickerCellData } from '../models/range-picker-cell-data.interface';
import { RangePickerCellDataType } from '../models/range-picker-cell-data.type';

export const dayOfWeekCellData: RangePickerCellData[] = dayOfWeekLabels.map(
  label => {
    return {
      label,
      // tslint:disable-next-line:no-bitwise
      type: RangePickerCellDataType.Display | RangePickerCellDataType.Default,
      date: new Date(),
    };
  }
);
