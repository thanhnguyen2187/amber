import { monthOfYearLabels } from './month-of-year.labels';
import { RangePickerCellData } from '../models/range-picker-cell-data.interface';
import { RangePickerCellDataType } from '../models/range-picker-cell-data.type';

export const monthOfYearCellData: RangePickerCellData[] = monthOfYearLabels.map(
  label => {
    return {
      label,
      type: RangePickerCellDataType.Default,
      date: new Date(),
    };
  }
);
