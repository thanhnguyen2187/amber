import { Component, Input, OnInit } from '@angular/core';
import { CalendarDynamicService } from '../calendar/calendar-dynamic.service';
import { ItemStoreService } from './item-store.service';
import { Item } from './item.service';
import { BikeSale } from '../table/table-data.model';
import { NotificationService } from '../notification/notification.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-item-card-row',
  templateUrl: './item-card-row.component.html',
  styleUrls: ['./item-card-row.component.scss']
})
export class ItemCardRowComponent implements OnInit {

  constructor(
    public itemStoreService: ItemStoreService,
    public notificationService: NotificationService,
    public calendarDynamicService: CalendarDynamicService,
  ) { }

  @Input() label = '';
  @Input() value = '';
  @Input() icon: 'cart' | 'calendar' = 'cart';
  @Input() item: Item = {
    name: '',
    imageReference: '',
  };

  addBikeSale(): void {
    this.itemStoreService.addBikeSale(
      new BikeSale(
        this.item.imageReference,
        this.item.name,
        this.item.priceForSale ?? 0,
        this.item.priceForSaleDisplay ?? '',
        1,
      )
    );
    this.notificationService.notify(
      'Success',
      'Bike was added to cart successfully!',
    );
  }

  toggleCalendar($event: MouseEvent): void {
    this.calendarDynamicService.resetCalendarBox();
    this.calendarDynamicService.action = () => {
      console.log('Do something!');
    };
    this.calendarDynamicService.toggleCalendar($event);
  }

  ngOnInit(): void {
  }
}
