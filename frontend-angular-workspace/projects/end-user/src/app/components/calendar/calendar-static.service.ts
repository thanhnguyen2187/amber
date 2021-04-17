import { Injectable } from '@angular/core';
import { CalendarCell, CalendarCellType, CalendarMode } from './calendar-cell.model';
import { range } from 'amber-core';
import { enUS } from 'date-fns/esm/locale';
import { eachDayOfInterval, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CalendarStaticService {

  firstDayOfWeek:
    0 | // Sunday
    1 | // Monday
    2 | // Tuesday
    3 | // Wednesday
    4 | // Thursday
    5 | // Friday
    6   // Saturday
    = 1;
  // const firstDayOfWeek = 1; // Monday

  dayOfWeekLabels(): string[] {
    return [
      ...range({
        start: 0,
        stop: 7,
      }).map(
        (index) =>
          enUS.localize?.day(
            (this.firstDayOfWeek + index) % 7,
            // index,
            { width: 'abbreviated' },
          )
      )
    ];
  }

  dayOfMonthDates(anchor: Date): Date[] {
    const year = anchor.getFullYear();
    const month = anchor.getMonth();
    return eachDayOfInterval(
      {
        start: startOfWeek(
          startOfMonth(new Date(year, month, 1)),
          { weekStartsOn: this.firstDayOfWeek, }
        ),
        end: endOfWeek(
          endOfMonth(new Date(year, month, 1)),
          { weekStartsOn: this.firstDayOfWeek, }
        )
      }
    );
  }

  monthLabels(): string[] {
    return [
      ...range({
        start: 0,
        stop: 12,
      }).map(index => {
        return enUS.localize?.month(
          index,
        );
      })
    ];
  }

  isSameDay(firstDate: Date, secondDate: Date): boolean {
    return (
      firstDate.getFullYear() === secondDate.getFullYear() &&
      firstDate.getMonth() === secondDate.getMonth() &&
      firstDate.getDate() === secondDate.getDate()
    );
  }

  dayOfWeekCells(): CalendarCell[] {
    return (
      this
      .dayOfWeekLabels()
      .map(
        (label) => {
          return {
            // tslint:disable-next-line:no-bitwise
            type: CalendarCellType.default | CalendarCellType.display,
            value: label,
            action: () => {},
            date: new Date(),
          };
        }
      )
    );
  }

  monthCells(anchor: Date): CalendarCell[] {
    return (
      this
      .monthLabels()
      .map(
        (label, index) => {
          return {
            type: CalendarCellType.default,
            value: label,
            date: new Date(anchor.getFullYear(), index),
            action: () => {},
          };
        }
      )
    );
  }

  dayOfMonthCells(
    anchor: Date,
    daysOfMonth: Date[],
  ): CalendarCell[] {
    return (
      daysOfMonth
      .map(
        (day) => {
          let cellType = CalendarCellType.default;
          /*tslint:disable:no-bitwise*/
          if (day.getMonth() < anchor.getMonth()) {
            cellType |= CalendarCellType.inactive;
          } else if (this.isSameDay(new Date(), day)) {
            cellType |= CalendarCellType.current;
          } else if (day.getMonth() > anchor.getMonth()) {
            cellType |= CalendarCellType.inactive;
          }
          /*tslint:enable:no-bitwise*/

          return {
            type: cellType,
            value: day.getDate().toString(),
            date: day,
            action: () => {},
          };
        }
      )
    );
  }

  formatTitleMonth(date: Date): string {
    return format(
      date,
      'MMMM yyyy',
      { weekStartsOn: this.firstDayOfWeek, },
    );
  }

  formatTitleQuarter(date: Date): string {
    return format(
      date,
      'yyyy',
      { weekStartsOn: this.firstDayOfWeek, },
    );
  }

  titleCell(
    date: Date,
    type: CalendarMode,
  ): CalendarCell {
    return {
      // tslint:disable-next-line:no-bitwise
      type: CalendarCellType.default,
      value: type === 'month' ? this.formatTitleMonth(date) : this.formatTitleQuarter(date),
      date,
      action: () => {},
    };
  }

  constructor() { }
}
