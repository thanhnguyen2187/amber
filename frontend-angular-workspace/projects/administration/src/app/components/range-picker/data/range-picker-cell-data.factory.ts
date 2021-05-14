import { RangePickerCellData } from '../models/range-picker-cell-data.interface';
import { RangePickerCellDataType } from '../models/range-picker-cell-data.type';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek
} from 'date-fns';
import { weekStartsOn } from './week-starts-on';
import { RangePickerBoxModeType } from '../models/range-picker-box-mode.type';

export class RangePickerCellDataFactory {

  static createDefault(
    {
      label,
    }: {
      label: string,
    }
  ): RangePickerCellData {
    return {
      label,
      type: RangePickerCellDataType.Default,
      date: new Date(),
    };
  }

  static createHeader(
    {
      anchor,
      mode,
    }: {
      anchor: Date,
      mode: RangePickerBoxModeType,
    }
  ): RangePickerCellData {
    // TODO: prettify
    switch (mode) {
      case 'range':
        return {
          label: format(
            anchor,
            'MMMM',
          ),
          type: RangePickerCellDataType.Default,
          date: new Date(),
        };
      case 'month':
        return {
          label: format(
            anchor,
            'yyyy',
          ),
          type: RangePickerCellDataType.Default,
          date: new Date(),
        };
      default:
        return this.createDefault({label: 'Default'});
    }
  }

  static createMonthDates(
    {
      anchor,
      pickedDates,
    }: {
      anchor: Date,
      pickedDates: Date[],
    }
  ): RangePickerCellData[] {
    return eachDayOfInterval(
      {
        start: startOfWeek(
          startOfMonth(anchor),
          {weekStartsOn},
        ),
        end: endOfWeek(
          endOfMonth(anchor),
          {weekStartsOn},
        ),
      }
    ).map(
      date => {
        /* tslint:disable:no-bitwise */
        const label = date.getDate().toString();
        let type = RangePickerCellDataType.Default;
        switch (pickedDates.length) {
          case 0:
            break;
          case 1:
            if (isSameDay(date, pickedDates[0])) {
              type |= RangePickerCellDataType.PickedOnly;
            }
            break;
          case 2:
            if (
              isSameDay(pickedDates[0], date) &&
              isSameDay(pickedDates[1], date)
            ) {
              type |= RangePickerCellDataType.PickedOnly;
            } else if (isSameDay(date, pickedDates[0])) {
              type |= RangePickerCellDataType.PickedFirst;
            } else if (isSameDay(date, pickedDates[1])) {
              type |= RangePickerCellDataType.PickedSecond;
            } else if (
              isBefore(pickedDates[0], date) &&
              isBefore(date, pickedDates[1])
            ) {
              type |= RangePickerCellDataType.PickedBetween;
            }
            break;
        }
        if (isToday(date)) {
          type |= RangePickerCellDataType.CurrentDate;
        } else if (isPast(date)) {
          type |= RangePickerCellDataType.NotAllowed | RangePickerCellDataType.PastDay;
        }
        if (!isSameMonth(date, anchor)) {
          type |= RangePickerCellDataType.DifferentMonth;
        }
        return {
          label,
          type,
          date,
        };
        /* tslint:enable:no-bitwise */
      }
    );
  }
}
