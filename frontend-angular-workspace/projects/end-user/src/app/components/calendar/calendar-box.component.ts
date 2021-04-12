import { Component, Input, OnInit } from '@angular/core';
import { CalendarCell, CalendarCellType } from './calendar-cell.model';
import { CalendarStaticService } from './calendar-static.service';
import { CalendarDynamicService } from './calendar-dynamic.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar-box',
  templateUrl: './calendar-box.component.html',
  styleUrls: ['./calendar-box.component.scss']
})
export class CalendarBoxComponent implements OnInit {

  @Input() date: Date = new Date();
  view: 'week' | 'month' = 'week';
  titleCell: CalendarCell = {
    // tslint:disable-next-line:no-bitwise
    type: CalendarCellType.default | CalendarCellType.display,
    value: '',
    action: () => {},
    date: new Date(),
  };
  dayOfWeekCells: CalendarCell[] = [];
  dayOfMonthCells: CalendarCell[] = [];
  monthCells: CalendarCell[] = [];

  mapTitleCellAction(cell: CalendarCell): CalendarCell {
    return {
      ...cell,
      action: () => {
        this.calendarDynamicService.cycleCalendarMode();
      }
    };
  }

  mapMonthCellsAction(cells: CalendarCell[]): CalendarCell[] {
    // map an action that change the display date to the clicked month
    return cells.map(
      (cell) => {
        return {
          ...cell,
          action: () => {
            this
              .calendarDynamicService
              .calendarMode = 'month';
            this
              .calendarDynamicService
              .moveAnchorSpecificDate(
                cell.date,
              );
          },
        };
      }
    );
  }

  mapDayOfMonthCellsAction(cells: CalendarCell[]): CalendarCell[] {
    return cells.map(
      (cell) => {
        let type = cell.type;
        // (() => {
          // use a Immediately Invoked Function to avoid
        if (
          this
            .calendarDynamicService
            .isBetweenSelectedDate(cell.date)
        ) {
          // tslint:disable-next-line:no-bitwise
          type |= CalendarCellType.selected;
        }
        // })();
        return {
          ...cell,
          type,
          action: () => {
            this
              .calendarDynamicService
              .selectDate(cell.date);
          },
        };
      }
    );
  }

  constructor(
    // private calendarService: CalendarService,
    public calendarStaticService: CalendarStaticService,
    public calendarDynamicService: CalendarDynamicService,
  ) {
    this.dayOfWeekCells = calendarStaticService.dayOfWeekCells();
    this
      .calendarDynamicService
      .titleCell$
      .pipe(
        map(this.mapTitleCellAction),
      )
      .subscribe(
        (cell) => this.titleCell = cell
      );
    this
      .calendarDynamicService
      .monthCells$
      .pipe(
        map(this.mapMonthCellsAction),
      )
      .subscribe(
        (cells) =>
          this.monthCells = cells
      )
    ;
    this
      .calendarDynamicService
      .dayOfMonthCells$
      .pipe(
        // use a closure to avoid
        // 'cannot read property isBetweenSelectedDate of undefined'
        map((cells) => this.mapDayOfMonthCellsAction(cells)),
      )
      .subscribe(
        (cells) =>
          this.dayOfMonthCells = cells
      );
    this.calendarDynamicService.updateSubjects();
  }

  next(): void {
    if (this.calendarDynamicService.calendarMode === 'month') {
      this.calendarDynamicService.moveAnchorNextMonth();
    } else if (this.calendarDynamicService.calendarMode === 'quarter') {
      this.calendarDynamicService.moveAnchorNextYear();
    }
  }
  previous(): void {
    if (this.calendarDynamicService.calendarMode === 'month') {
      this.calendarDynamicService.moveAnchorPreviousMonth();
    } else if (this.calendarDynamicService.calendarMode === 'quarter') {
      this.calendarDynamicService.moveAnchorPreviousYear();
    }
  }

  ngOnInit(): void {
  }

}
