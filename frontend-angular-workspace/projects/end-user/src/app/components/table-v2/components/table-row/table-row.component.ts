import { Component, Input, OnInit } from '@angular/core';
import { TableRow, TableRowForRent, TableRowForRentMonthly } from '../../models/table-row';
import { ItemStoreName, ItemStoreV2Service } from '../../../item-grid/item-store-v2.service';
import { TableDynamicService } from '../../services/table-dynamic.service';
import { TableMasterType } from '../table-master/table-master.type';
import { CalendarDynamicService } from '../../../calendar/calendar-dynamic.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() row: TableRow = new TableRow();
  @Input() index = 0;
  @Input() itemStoreName: ItemStoreName = 'forSale';
  @Input() masterType: TableMasterType = TableMasterType.ForSale;

  get rowForRent(): TableRowForRent {
    return this.row as TableRowForRent;
  }

  get rowForRentMonthly(): TableRowForRentMonthly {
    return this.row as TableRowForRentMonthly;
  }

  confirmState: 'none' | 'confirm' = 'none';

  update(): void {
    this.itemStoreV2Service.updateItem(
      {
        itemStoreName: this.itemStoreName,
        index: this.index,
        item: this.row,
      }
    );
    this.tableDynamicService.updateSubject(
      {
        itemStoreName: this.itemStoreName,
      }
    );
  }

  remove(): void {
    this.itemStoreV2Service.removeItem(
      {
        itemStoreName: this.itemStoreName,
        index: this.index,
      }
    );
    this.tableDynamicService.updateSubject(
      {
        itemStoreName: this.itemStoreName,
      }
    );
  }

  toggleCalendar($event: MouseEvent): void {
    let dateStart = new Date();
    let dateEnd = new Date();
    let allowAction = () => true;
    switch (this.itemStoreName) {
      case 'dailyInsideCity':
        allowAction = this.calendarDynamicService.allowDaily;
        break;
      case 'dailyTraveling':
        allowAction = this.calendarDynamicService.allowDaily;
        break;
      case 'monthly':
        allowAction = this.calendarDynamicService.allowMonthly;
        break;
    }
    this.calendarDynamicService.resetCalendarBox(
      {
        defaultSelectedDate: 'none',
        dateStart: this.rowForRent.dateStart,
        dateEnd: this.rowForRent.dateEnd,
        action: () => {
          switch (this.calendarDynamicService.selectedDates.length) {
            case 0:
              break;
            case 1:
              dateStart = this.calendarDynamicService.selectedDates[0];
              dateEnd = this.calendarDynamicService.selectedDates[0];
              break;
            case 2:
              dateStart = this.calendarDynamicService.selectedDates[0];
              dateEnd = this.calendarDynamicService.selectedDates[1];
              break;
          }

          this.rowForRent.dateStart = dateStart;
          this.rowForRent.dateEnd = dateEnd;
          this.itemStoreV2Service.updateItem({
            itemStoreName: this.itemStoreName,
            index: this.index,
            item: this.row,
          });
          this.tableDynamicService.updateSubject(
            {
              itemStoreName: this.itemStoreName,
            }
          );
        },
        allowAction,
      }
    );
    this.calendarDynamicService.toggleCalendar($event);
  }

  constructor(
    public itemStoreV2Service: ItemStoreV2Service,
    public tableDynamicService: TableDynamicService,
    public calendarDynamicService: CalendarDynamicService,
  ) { }

  ngOnInit(): void {
  }

}
