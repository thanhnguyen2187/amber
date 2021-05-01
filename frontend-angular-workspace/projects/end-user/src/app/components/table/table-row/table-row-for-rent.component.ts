import { Component, Input, OnInit } from '@angular/core';
import { TableRowForRent } from '../table-data.model';
import { CalendarDynamicService } from '../../calendar/calendar-dynamic.service';
import { ItemStoreService, ItemStoreName } from '../../item-grid/item-store.service';

@Component({
  selector: 'app-table-row-for-rent',
  templateUrl: './table-row-for-rent.component.html',
  styleUrls: ['./table-row-for-rent.component.scss']
})
export class TableRowForRentComponent implements OnInit {

  @Input() row: TableRowForRent = new TableRowForRent(
    '',
    '',
    '',
    0,
    1,
    new Date(),
    new Date(),
  );
  @Input() itemStoreName: ItemStoreName = ItemStoreName.bikeRentalsDailyInsideCity;
  @Input() index = 0;

  constructor(
    public calendarDynamicService: CalendarDynamicService,
    public itemStoreService: ItemStoreService,
  ) { }

  updateAmount(): void {
    this.itemStoreService.changeAmount(
      {
        storeItemName: this.itemStoreName,
        index: this.index,
        newAmountValue: this.row.amount,
      }
    );
  }

  toggleCalendar($event: MouseEvent): void {
    this.calendarDynamicService.resetCalendarBox(
      {
        defaultSelectedDate: 'none',
        dateStart: this.row.dateStart,
        dateEnd: this.row.dateEnd,
        action: () => {
          let dateStart: Date = new Date();
          let dateEnd: Date = new Date();
          switch (this.calendarDynamicService.selectedDates.length) {
            case 0:
              break;
            case 1:
              dateStart = this.calendarDynamicService.selectedDates[0];
              dateEnd = this.calendarDynamicService.selectedDates[0];
              this.itemStoreService.changeDate(
                {
                  itemStoreName: this.itemStoreName,
                  index: this.index,
                  dateStart,
                  dateEnd,
                }
              );
              break;
            case 2:
              dateStart = this.calendarDynamicService.selectedDates[0];
              dateEnd = this.calendarDynamicService.selectedDates[1];
              this.itemStoreService.changeDate(
                {
                  itemStoreName: this.itemStoreName,
                  index: this.index,
                  dateStart,
                  dateEnd,
                }
              );
              break;
          }
        },
      }
    );
    this.calendarDynamicService.toggleCalendar($event);
  }

  ngOnInit(): void {
  }

}
