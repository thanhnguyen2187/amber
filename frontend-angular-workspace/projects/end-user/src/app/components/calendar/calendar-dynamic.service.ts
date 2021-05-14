import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarCell, CalendarCellType, CalendarMode } from './calendar-cell.model';
import { CalendarStaticService } from './calendar-static.service';
import {
  addDays, addMonths,
  compareAsc,
  endOfYear,
  isAfter,
  isBefore,
  isSameDay,
  lastDayOfMonth,
  startOfDay,
  startOfMonth,
  startOfYear,
  subDays
} from 'date-fns';

export interface CalendarPosition {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarDynamicService {

  position$: Subject<CalendarPosition> = new Subject<CalendarPosition>();

  anchor: Date = new Date();
  calendarMode: CalendarMode = 'month';
  selectedDates: Date[] = [];
  monthCells$: Subject<CalendarCell[]> = new Subject<CalendarCell[]>();
  dayOfMonthCells$: Subject<CalendarCell[]> = new Subject<CalendarCell[]>();
  daySelectTitle$: Subject<string> = new Subject<string>();
  monthSelectTitle$: Subject<string> = new Subject<string>();
  titleCell$: Subject<CalendarCell> = new Subject<CalendarCell>();

  message = '';
  action = () => {};
  allowAction = (): boolean => {
    return true;
  }

  allowDaily(): boolean {
    switch (this.selectedDates.length) {
      case 0:
        this.message = 'Please select a date range or at least 1 day.';
        return false;
      case 1:
      case 2:
        this.message = '';
        return true;
      default:
        return false;
    }
  }

  // I am sure that I will hate myself for this,
  // but I will also pat myself in the shoulder
  // for thinking of such a convoluted and messy way to solve the problem
  allowMonthly(): boolean {
    switch (this.selectedDates.length) {
      case 0:
      case 1:
        this.message = 'Please select a date range of at least 30 days.';
        return false;
      case 2:
        if (
          this.calendarStaticService.dayCount(
            this.selectedDates[0],
            this.selectedDates[1],
          ) >= 30
        ) {
          this.message = '';
          return true;
        } else {
          this.message = 'Please select a date range of at least 30 days.';
          return false;
        }
      default:
        return false;
    }
  }

  // getAllowAction(
  //   rentalType: number
  // ): () => boolean {
  // }

  updateSubjects(): void {
    // TODO: split the function
    this.titleCell$.next(
      this
        .calendarStaticService
        .titleCell(this.anchor, this.calendarMode)
    );
    this.monthCells$.next(
      this
        .calendarStaticService
        .monthCells(this.anchor)
    );
    this.dayOfMonthCells$.next(
      this
        .calendarStaticService
        .dayOfMonthCells(
          this.anchor,
          this
            .calendarStaticService
            .dayOfMonthDates(this.anchor),
      )
    );
    this.daySelectTitle$.next(
      this
        .calendarStaticService
        .formatTitleMonth(this.anchor)
    );
    this.monthSelectTitle$.next(
      this
        .calendarStaticService
        .formatTitleQuarter(this.anchor)
    );
  }

  moveAnchorNextMonth(): void {
    this.anchor = (
      addDays(
        lastDayOfMonth(this.anchor),
        1
      )
    );
    this.updateSubjects();
  }

  moveAnchorPreviousMonth(): void {
    this.anchor = (
      subDays(
        startOfMonth(this.anchor),
        1,
      )
    );
    this.updateSubjects();
  }

  moveAnchorNextYear(): void {
    this.anchor = (
      addDays(
        endOfYear(this.anchor),
        1,
      )
    );
    this.updateSubjects();
  }

  moveAnchorPreviousYear(): void {
    this.anchor = (
      subDays(
        startOfYear(this.anchor),
        1,
      )
    );
    this.updateSubjects();
  }

  moveAnchorSpecificDate(date: Date): void {
    this.anchor = date;
    this.updateSubjects();
  }

  cycleCalendarMode(): void {
    if (this.calendarMode === 'month') {
      this.calendarMode = 'quarter';
    } else if (this.calendarMode === 'quarter') {
      this.calendarMode = 'month';
    }
    this.updateSubjects();
  }

  toggleCalendar($event: MouseEvent): void {
    this.position$.next({
      x: $event.pageX,
      y: $event.pageY,
    });
  }

  selectDate(date: Date): void {
    if (
      compareAsc(
        date,
        startOfDay(new Date()),
      ) >= 0
    ) {
      switch (this.selectedDates.length) {
        case 0:
          this.selectedDates.push(date);
          break;
        case 1:
          if (
            this
            .calendarStaticService
            .isSameDay(this.selectedDates[0], date)
          ) {
            this.selectedDates = [];
          } else if (
            isBefore(this.selectedDates[0], date)
          ) {
            this.selectedDates.push(date);
          } else {
            this.selectedDates[0] = date;
          }
          break;
        case 2:
          if (
            this
            .calendarStaticService
            .isSameDay(this.selectedDates[1], date)
          ) {
            this.selectedDates = [];
          } else if (
            isBefore(this.selectedDates[0], date)
          ) {
            this.selectedDates[1] = date;
          } else {
            this.selectedDates = [date];
          }
          break;
      }
    }
  }

  getCellType(date: Date): CalendarCellType {
    if (
      compareAsc(
        date,
        startOfDay(new Date()),
      ) === -1
    ) {
      // tslint:disable-next-line:no-bitwise
      return CalendarCellType.display | CalendarCellType.disabled;
    }
    switch (this.selectedDates.length) {
      case 0:
        return CalendarCellType.none;
      case 1:
        if (isSameDay(date, this.selectedDates[0])) {
          return CalendarCellType.selectedOnly;
        } else {
          return CalendarCellType.none;
        }
      case 2:
        if (
          isSameDay(date, this.selectedDates[0]) &&
          isSameDay(date, this.selectedDates[1])
        ) {
          return CalendarCellType.selectedOnly;
        } else if (isSameDay(date, this.selectedDates[0])) {
          return CalendarCellType.selectedFirst;
        } else if (this.isBetweenSelectedDate(date)) {
          return CalendarCellType.selectedBetween;
        } else if (isSameDay(date, this.selectedDates[1])) {
          return CalendarCellType.selectedSecond;
        } else {
          return CalendarCellType.none;
        }
      default:
        return CalendarCellType.none;
    }
  }

  isBetweenSelectedDate(date: Date): boolean {
    switch (this.selectedDates.length) {
      case 0:
      case 1:
        return false;
      case 2:
        return (
          isAfter(
            date,
            this.selectedDates[0],
          ) &&
          isBefore(
            date,
            this.selectedDates[1],
          )
        );
      default:
        return false;
    }
  }

  resetCalendarBox(
    {
      defaultSelectedDate,
      dateStart,
      dateEnd,
      action,
      allowAction,
    }: {
      defaultSelectedDate:
        'none'
        | '3-days'
        | '7-days'
        | '30-days'
      ,
      dateStart?: Date,
      dateEnd?: Date,
      action?: () => void,
      allowAction?: () => boolean,
    }
  ): void {
    this.action = action ?? (() => {});
    this.allowAction = allowAction ?? (() => true);
    this.message = '';
    this.anchor = new Date();
    const today = startOfDay(new Date());
    switch (defaultSelectedDate) {
      case 'none':
        if (dateStart && dateEnd) {
          this.selectedDates = [
            dateStart,
            dateEnd,
          ];
        } else {
          this.selectedDates = [];
        }
        break;
      case '3-days':
        this.selectedDates = [
          today,
          addDays(today, 2),
        ];
        break;
      case '7-days':
        this.selectedDates = [
          today,
          addDays(today, 6),
        ];
        break;
      case '30-days':
        this.selectedDates = [
          today,
          addDays(today, 29),
        ];
        break;
    }
    this.updateSubjects();
  }

  constructor(
    private calendarStaticService: CalendarStaticService,
  ) {
  }
}
