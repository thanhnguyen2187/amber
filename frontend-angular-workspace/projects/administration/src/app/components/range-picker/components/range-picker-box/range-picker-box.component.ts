import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RangePickerBoxModeType } from '../../models/range-picker-box-mode.type';
import { dayOfWeekLabels } from '../../data/day-of-week.labels';
import { dayOfWeekCellData } from '../../data/day-of-week.cell-data';
import { RangePickerCellDataFactory } from '../../data/range-picker-cell-data.factory';
import { RangePickerCellData } from '../../models/range-picker-cell-data.interface';
import { monthOfYearCellData } from '../../data/month-of-year.cell-data';
import {
  addDays,
  addMonths,
  addYears,
  endOfMonth,
  endOfYear, isAfter, isBefore, isPast, isSameDay, isToday,
  nextDay,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears
} from 'date-fns';

@Component({
  selector: 'app-range-picker-box',
  templateUrl: './range-picker-box.component.html',
  styleUrls: ['./range-picker-box.component.scss']
})
export class RangePickerBoxComponent implements OnInit {

  // display
  @Input() get display(): boolean {
    return this.displayValue;
  }
  set display(displayValue: boolean) {
    this.displayValue = displayValue;
    this.displayChange.emit(displayValue);
  }
  displayValue = false;
  @Output() displayChange = new EventEmitter<boolean>();

  @Input() allowPastRange = false;

  // data
  dayOfWeekCellData = dayOfWeekCellData;
  monthOfYearCellData = monthOfYearCellData;

  get headerData(): RangePickerCellData {
    return RangePickerCellDataFactory.createHeader(
      {
        anchor: this.anchor,
        mode: this.mode,
      }
    );
  }

  get monthDatesCellData(): RangePickerCellData[] {
    return RangePickerCellDataFactory.createMonthDates(
      {
        anchor: this.anchor,
        pickedDates: this.pickedDates,
        allowPastRange: this.allowPastRange,
      }
    );
  }

  // anchor
  anchor: Date = new Date();
  mode: RangePickerBoxModeType = 'range';

  moveAnchorBackward(): void {
    switch (this.mode) {
      case 'range':
        this.anchor = subMonths(this.anchor, 1);
        break;
      case 'month':
        this.anchor = subYears(this.anchor, 1);
        break;
    }
  }

  moveAnchorForward(): void {
    switch (this.mode) {
      case 'range':
        this.anchor = addMonths(this.anchor, 1);
        break;
      case 'month':
        this.anchor = addYears(this.anchor, 1);
        break;
    }
  }

  cycleMode(): void {
    switch (this.mode) {
      case 'range':
        this.mode = 'month';
        break;
      case 'month':
        // this.mode = 'year';
        this.mode = 'range';
        break;
      // case 'year':
      //   this.mode = 'range';
      //   break;
    }
  }

  @Input() datePickingMode: 'create' | 'edit' | 'single' = 'create';
  pickedDatesValue: Date[] = [];
  @Input() get pickedDates(): Date[] {
    return this.pickedDatesValue;
  }
  set pickedDates(pickedDates: Date[]) {
    this.pickedDatesValue = pickedDates;
    this.pickedDatesChange.emit(this.pickedDatesValue);
  }
  @Output() pickedDatesChange = new EventEmitter<Date[]>();

  pickDate(date: Date): void {
    // do nothing if past dates are picked
    if (!this.allowPastRange && isPast(date) && !isToday(date)) {
      return;
    }

    switch (this.datePickingMode) {
      case 'create':
        switch (this.pickedDatesValue.length) {
          case 0:
            // this.pickedDatesValue.push(date);
            this.pickedDatesValue = [date, date];
            break;
          case 1:
            if (isSameDay(this.pickedDatesValue[0], date)) {
              this.pickedDatesValue = [];
            } else if (isBefore(this.pickedDatesValue[0], date)) {
              this.pickedDatesValue.push(date);
            } else {
              this.pickedDatesValue = [date];
            }
            break;
          case 2:
            if (
              // click on the start date or end date
              // => the selected range disappear
              isSameDay(this.pickedDatesValue[0], date) ||
              isSameDay(this.pickedDatesValue[1], date)
            ) {
              this.pickedDatesValue = [];
            } else if (isBefore(this.pickedDatesValue[0], date)) {
              // click on dates before or after the end date
              // => the range is shortened or lengthened
              this.pickedDatesValue[1] = date;
            } else {
              // the date is picked as the only one
              this.pickedDatesValue = [date];
            }
            break;
        }
        break;
      case 'edit':
        switch (this.pickedDatesValue.length) {
          case 0:
          case 1:
            break;
          case 2:
            // only allow extension or reduction from the end date
            this.pickedDatesValue[1] = date;
            break;
        }
        break;
      case 'single':
        switch (this.pickedDatesValue.length) {
          case 1:
            if (isSameDay(this.pickedDatesValue[0], date)) {
              this.pickedDatesValue = [];
            }
            else {
              this.pickedDatesValue = [date];
            }
            break;
          default:
            this.pickedDatesValue = [date];
            break;
        }
        break;
    }
    this.pickedDatesChange.emit(this.pickedDates);
  }

  cancel(): void {
    this.display = false;
  }
  @Input() accept(): void {}

  constructor() {
  }

  ngOnInit(): void {
  }

}
