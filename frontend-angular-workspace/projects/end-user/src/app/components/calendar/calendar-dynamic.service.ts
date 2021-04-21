import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarCell, CalendarCellType, CalendarMode } from './calendar-cell.model';
import { CalendarStaticService } from './calendar-static.service';
import { addDays, endOfYear, isAfter, isBefore, isSameDay, lastDayOfMonth, startOfMonth, startOfYear, subDays } from 'date-fns';

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
  action = () => {};

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
    // if (!this.visibility) {
    //   this.visibility = true;
    //   this.x = $event.pageX;
    //   this.y = $event.pageY;
    // } else {
    //   this.visibility = false;
    // }
  }

  selectDate(date: Date): void {
    switch (this.selectedDates.length) {
      case 0:
        this.selectedDates.push(date);
        break;
      case 1:
        if (
          this
            .calendarStaticService
            .isSameDay(
              this.selectedDates[0],
              date,
            )
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
        this.selectedDates = [date];
        break;
    }
  }

  getCellType(date: Date): CalendarCellType {
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
        if (isSameDay(date, this.selectedDates[0])) {
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

  resetCalendarBox(): void {
    this.action = () => {};
    this.anchor = new Date();
    this.selectedDates = [];
    this.updateSubjects();
  }

  constructor(
    private calendarStaticService: CalendarStaticService,
  ) {
  }
}
