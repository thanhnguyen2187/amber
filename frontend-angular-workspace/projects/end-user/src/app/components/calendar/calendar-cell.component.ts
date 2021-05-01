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
    if (this.calendarCell.type & CalendarCellType.selectedOnly) {
      [
        'rounded-full',
        'bg-blue-400',
      ].forEach(
        (value) => classes.add(value)
      );
    }
    if (this.calendarCell.type & CalendarCellType.selectedFirst) {
      [
        'rounded-l-full',
        'bg-blue-400',
      ].forEach(
        (value) => classes.add(value)
      );
    }
    if (this.calendarCell.type & CalendarCellType.selectedBetween) {
      [
        'bg-blue-400',
      ].forEach(
        (value) => classes.add(value)
      );
      [
        'rounded',
      ].forEach(
        value => classes.delete(value)
      );
    }
    if (this.calendarCell.type & CalendarCellType.selectedSecond) {
      [
        'rounded-r-full',
        'bg-blue-400',
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
    if (this.calendarCell.type & CalendarCellType.disabled) {
      [
        'cursor-not-allowed',
      ].forEach(
        (value) => classes.add(value)
      );
      if (!(this.calendarCell.type & CalendarCellType.inactive)) {
        classes.add('text-gray-500');
      }
    }
    /*tslint:enable:no-bitwise*/
    return [...classes];
  }

  ngOnInit(): void {
  }

}
