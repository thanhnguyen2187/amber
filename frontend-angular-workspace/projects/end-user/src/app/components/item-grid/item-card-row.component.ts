import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CalendarDynamicService } from '../calendar/calendar-dynamic.service';
// import { ItemStoreName, ItemStoreService } from './item-store.service';
import { Item } from './item.service';
import { BikeRental, BikeSale } from '../table/table-data.model';
import { NotificationService } from '../notification/notification.service';
import { startOfDay } from 'date-fns';
import { ItemStoreName, ItemStoreV2Service } from './item-store-v2.service';
import { TableRowFactory } from '../table-v2/models/table-row.factory';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-item-card-row',
  templateUrl: './item-card-row.component.html',
  styleUrls: ['./item-card-row.component.scss']
})
export class ItemCardRowComponent implements OnInit {

  constructor(
    public itemStoreService: ItemStoreV2Service,
    public notificationService: NotificationService,
    public calendarDynamicService: CalendarDynamicService,
  ) { }

  @Input() label = '';
  @Input() value = '';
  @Input() itemStoreName: ItemStoreName = 'forSale';
  // TODO: remove the icon type
  @Input() icon: 'cart' | 'calendar' = 'cart';
  @Input() item: Item = {
    id: 0,
    name: '',
    images: [],
    imageReference: '',
    capacity: 100,
    typeDisplay: 'Manual',
    description: 'Description',
  };

  addBikeSale(): void {
    this.itemStoreService.addItem({
      itemStoreName: 'forSale',
      item: TableRowFactory.createTableRowForSale({
        imageUrl: this.item.imageReference,
        bikeName: this.item.name,
        priceDisplay: this.item.priceForSaleDisplay ?? '',
        priceValue: this.item.priceForSale ?? 0,
        amountValue: 1,
      }),
    });
    this.notificationService.notify(
      'Success',
      `${this.item.name} was added to sale cart successfully!`,
    );
  }

  addBikeRental(): void {
    let dateStart = startOfDay(new Date());
    let dateEnd = startOfDay(new Date());

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

    switch (this.itemStoreName) {
      case 'forSale':
        break;
      case 'dailyInsideCity':
        this.itemStoreService.addItem(
          {
            itemStoreName: this.itemStoreName,
            item: TableRowFactory.createTableRowForRent(
              {
                imageUrl: this.item.imageReference,
                bikeName: this.item.name,
                priceDisplay: this.item.priceForRentInsideCityDisplay ?? '',
                priceValue: this.item.priceForRentInsideCity ?? 0,
                amountValue: 1,
                dateStart,
                dateEnd,
              }
            ),
          }
        );
        break;
      case 'dailyTraveling':
        this.itemStoreService.addItem(
          {
            itemStoreName: this.itemStoreName,
            item: TableRowFactory.createTableRowForRent(
              {
                imageUrl: this.item.imageReference,
                bikeName: this.item.name,
                priceDisplay: this.item.priceForRentTravelingDisplay ?? '',
                priceValue: this.item.priceForRentTraveling ?? 0,
                amountValue: 1,
                dateStart,
                dateEnd,
              }
            ),
          }
        );
        break;
      case 'monthly':
        this.itemStoreService.addItem(
          {
            itemStoreName: this.itemStoreName,
            item: TableRowFactory.createTableRowForRentMonthly(
              {
                imageUrl: this.item.imageReference,
                bikeName: this.item.name,
                priceDisplay: this.item.priceForRentMonthlyDisplay ?? '',
                priceValue: this.item.priceForRentMonthly ?? 0,
                amountValue: 1,
                dateStart,
                dateEnd,
              }
            ),
          }
        );
        break;
    }

    this.notificationService.notify(
      'Success',
      `${this.item.name} was added to rental cart successfully`,
    );
  }

  toggleCalendar($event: MouseEvent): void {
    switch (this.itemStoreName) {
      case 'forSale':
        break;
      case 'dailyInsideCity':
        this.calendarDynamicService.resetCalendarBox(
          {
            defaultSelectedDate: '3-days',
            action: () => {
              this.addBikeRental();
            }
          }
        );
        break;
      case 'dailyTraveling':
        this.calendarDynamicService.resetCalendarBox(
          {
            defaultSelectedDate: '7-days',
            action: () => {
              this.addBikeRental();
            }
          }
        );
        break;
      case 'monthly':
        this.calendarDynamicService.resetCalendarBox(
          {
            defaultSelectedDate: '30-days',
            action: () => {
              this.addBikeRental();
            }
          }
        );
        break;
    }
    this.calendarDynamicService.toggleCalendar($event);
  }

  ngOnInit(): void {
  }
}
