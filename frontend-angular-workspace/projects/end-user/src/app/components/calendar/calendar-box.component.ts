import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  visibility = false;
  x = 0;
  y = 0;
  @ViewChild('mainBox') mainBox!: ElementRef;
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
        // tslint:disable-next-line:no-bitwise
        const type = cell.type | this.calendarDynamicService.getCellType(cell.date);
        return {
          ...cell,
          type,
          action: () => {
            this
              .calendarDynamicService
              .selectDate(cell.date);
            this
              .calendarDynamicService
              .updateSubjects();
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
        // use a closure to avoid
        // 'cannot read property ... of undefined'
        map((cell) => this.mapTitleCellAction(cell)),
      )
      .subscribe(
        (cell) => this.titleCell = cell
      );
    this
      .calendarDynamicService
      .monthCells$
      .pipe(
        // use a closure to avoid
        // 'cannot read property ... of undefined'
        map((cells) => this.mapMonthCellsAction(cells)),
      )
      .subscribe(
        (cells) => this.monthCells = cells
      )
    ;
    this
      .calendarDynamicService
      .dayOfMonthCells$
      .pipe(
        // use a closure to avoid
        // 'cannot read property ... of undefined'
        map((cells) => this.mapDayOfMonthCellsAction(cells)),
      )
      .subscribe(
        (cells) =>
          this.dayOfMonthCells = cells
      );
    this
      .calendarDynamicService
      .position$
      .subscribe(
        (position) => {
          this.visibility = true;
          const availableWidth = document.body.scrollWidth - position.x;
          const availableHeight = document.body.scrollHeight - position.y;
          const width = this.mainBox.nativeElement.getBoundingClientRect().width;
          const height = this.mainBox.nativeElement.getBoundingClientRect().height;
          if (availableWidth > width) {
            this.x = position.x;
          } else {
            this.x = position.x - width;
          }
          if (availableHeight > height) {
            this.y = position.y;
          } else {
            this.y = position.y - height;
          }
          if (this.visibility) {
            setTimeout(() => {
              this.mainBox.nativeElement.focus();
            }, 0);
          }
        },
      )
    ;
    // this.calendarDynamicService.updateSubjects();
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

  accept(): void {
  }

  cancel(): void {
    this.visibility = false;
  }

  ngOnInit(): void {
  }

}
