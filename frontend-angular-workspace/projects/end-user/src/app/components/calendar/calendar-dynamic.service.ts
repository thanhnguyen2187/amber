import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CalendarCell, CalendarCellFactory, CalendarMode } from './calendar-cell.model';
import { CalendarStaticService } from './calendar-static.service';
import { addDays, endOfYear, isAfter, isBefore, lastDayOfMonth, startOfMonth, startOfYear, subDays } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CalendarDynamicService {

  visibility = false;
  x = 0;
  y = 0;

  anchor: Date = new Date();
  calendarMode: CalendarMode = 'month';
  selectedDates: Date[] = [];
  monthCells$: Subject<CalendarCell[]> = new Subject<CalendarCell[]>();
  dayOfMonthCells$: Subject<CalendarCell[]> = new Subject<CalendarCell[]>();
  daySelectTitle$: Subject<string> = new Subject<string>();
  monthSelectTitle$: Subject<string> = new Subject<string>();
  titleCell$: Subject<CalendarCell> = new Subject<CalendarCell>();

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
    if (!this.visibility) {
      this.visibility = true;
      this.x = $event.pageX;
      this.y = $event.pageY;
    } else {
      this.visibility = false;
    }
  }

  selectDate(date: Date): void {
    switch (this.selectedDates.length) {
      case 0:
        this.selectedDates.push(date);
        break;
      case 1:
        if (isAfter(this.selectedDates[0], date)) {
          this.selectedDates.push(date);
        } else {
          this.selectedDates[0] = date;
        }
        break;
      case 2:
        this.selectedDates = [];
        this.selectedDates.push(date);
        break;
    }
  }

  isBetweenSelectedDate(date: Date): boolean {
    switch (this.selectedDates.length) {
      case 0:
        return false;
      case 1:
        return (
          this.calendarStaticService.sameDate(
            this.selectedDates[0],
            date,
          )
        );
      case 2:
        return (
          isAfter(
            date,
            this.selectedDates[0],
          ) && isBefore(
            date,
            this.selectedDates[1],
          )
        );
      default:
        return false;
    }
  }

  constructor(
    private calendarStaticService: CalendarStaticService,
  ) {
  }
}
