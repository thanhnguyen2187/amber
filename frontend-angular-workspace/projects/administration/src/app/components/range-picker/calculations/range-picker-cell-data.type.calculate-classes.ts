import { RangePickerCellDataType } from '../models/range-picker-cell-data.type';
import { rangePickerCellDataTypeClassesPacks } from '../data/range-picker-cell-data.type.classes-packs';

export function calculateClasses(
  type: number,
): string[] {
  const classes = new Set<string>();
  rangePickerCellDataTypeClassesPacks.forEach(
    classesPack => {
      // tslint:disable-next-line:no-bitwise
      if (type & classesPack.type) {
        classesPack.included.forEach(
          value => classes.add(value)
        );
        classesPack.excluded.forEach(
          value => classes.delete(value)
        );
      }
    }
  );
  return [
    ...classes
  ];
}
