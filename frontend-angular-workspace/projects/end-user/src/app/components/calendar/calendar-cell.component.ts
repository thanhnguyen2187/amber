import { Component, Input, OnInit } from '@angular/core';
import { CalendarCell, CalendarCellType } from './calendar-cell.model';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss']
})
export class CalendarCellComponent implements OnInit {

  @Input() calendarCell: CalendarCell = {
    type: CalendarCellType.default,
    value: '',
    date: new Date(),
    action: () => {},
  };

  constructor() { }

  get classesByCellType(): string[] {
    const classes: Set<string> = new Set<string>();
    /*tslint:disable:no-bitwise*/
    if (this.calendarCell.type & CalendarCellType.default) {
      [
        'select-none',
        'cursor-pointer',
        'rounded',
        'text-center',
        'hover:ring-1',
        'active:ring-2',
        'px-2',
      ].forEach(
        (value) => classes.add(value)
      );
    }
    if (this.calendarCell.type & CalendarCellType.inactive) {
      [
        'text-gray-300',
      ].forEach(
        (value) => classes.add(value)
      );
    }
    if (this.calendarCell.type & CalendarCellType.current) {
      [
        'font-bold',
      ].forEach(
        (value) => classes.add(value)
      );
    }
    if (this.calendarCell.type & CalendarCellType.selected) {
      [
        'rounded-full',
        'border-2',
        'border-white',
      ].forEach(
        (value) => classes.add(value)
      );
    }
    if (this.calendarCell.type & CalendarCellType.display) {
      [
        'cursor-pointer',
        'hover:ring-1',
        'active:ring-2',
      ].forEach(
        (value) => classes.delete(value)
      );
    }
    /*tslint:enable:no-bitwise*/
    return [...classes];
  }

  ngOnInit(): void {
  }

}
