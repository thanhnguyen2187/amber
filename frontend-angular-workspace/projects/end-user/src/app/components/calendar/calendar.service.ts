import { Injectable } from '@angular/core';
import { CalendarCell, CalendarCellFactory, CalendarCellType } from './calendar-cell.model';
import { range } from 'amber-core';
import { compareAsc, eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek, } from 'date-fns';
import locale from 'date-fns/locale/en-US';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  displayMonthValue = 0;
  displayYearValue = 0;
  selectedDateStart?: Date;
  selectedDateEnd?: Date;

  get displayMonth(): number {
    return this.displayMonthValue;
  }
  set displayMonth(value: number) {
    this.displayMonthValue = value;
  }
  get displayYear(): number {
    return this.displayYearValue;
  }
  set displayYear(value: number) {
    this.displayYearValue = value;
  }
  get today(): Date {
    return new Date();
  }
  get thisMonth(): number {
    return this.today.getMonth() + 1;
  }
  get thisYear(): number {
    return this.today.getFullYear() + 1;
  }

  get daysOfWeek(): string[] {
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  }

  get months(): string[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'October',
      'December',
    ];
  }

  daysOfMonthDisplay(
    year: number,
    month: number,
  ): Date[] {
    return eachDayOfInterval(
      {
        start: startOfWeek(
          startOfMonth(new Date(year, month - 1, 1)),
          // { weekStartsOn: 0, }
        ),
        end: endOfWeek(
          endOfMonth(new Date(year, month - 1, 1)),
          // { weekStartsOn: 0, }
        )
      }
    );
  }

  dayOfMonthCells(): CalendarCell[] {
    return [];
/*    const today = new Date();
    return this.daysOfMonthDisplay().map(
      (day) => {
        const compareResult = compareAsc(day, today);
        let cellType = CalendarCellType.default;
        let action = () => {};

        /!*tslint:disable:no-bitwise*!/
        if (day.getMonth() < today.getMonth()) {
          cellType |= CalendarCellType.inactive;
        } else if (compareResult === 0) {
          cellType |= CalendarCellType.selected;
        } else if (day.getMonth() > today.getMonth()) {
          cellType |= CalendarCellType.inactive;
        }
        /!*tslint:enable:no-bitwise*!/

        return {
          type: cellType,
          value: day.getDate().toString(),
          action,
        };
      }
    );*/
  }
}
