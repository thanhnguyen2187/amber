import { RangePickerCellDataType } from './range-picker-cell-data.type';

export interface RangePickerCellData {
  label: string;
  type: RangePickerCellDataType;
  date: Date;
}
