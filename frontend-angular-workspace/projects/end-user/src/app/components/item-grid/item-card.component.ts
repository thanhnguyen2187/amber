import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item.service';
import { NotificationService } from '../notification/notification.service';
import { TableDynamicService } from '../table/table-dynamic.service';
import { BikeSale } from '../table/table-data.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item = {
    name: '',
    imageReference: 'https://via.placeholder.com/300x200',
    priceForSaleDisplay: '300 USD',
    priceForRentTravelingDisplay: '10 USD',
    priceForRentInsideCityDisplay: '5 USD',
    priceForRentMonthlyDisplay: '1 000 000 VND',
  };

  addToCart(): void {
    this.tableDynamicService.addBikeSale(
      new BikeSale(
        this.item.imageReference,
        this.item.name,
        this.item.priceForSale ?? 0,
        this.item.priceForSaleDisplay ?? '',
        1,
      )
    );
    this.notificationService.notify(
      'Success!',
      `${this.item.name} added to cart successfully!`,
    );
  }

  constructor(
    private notificationService: NotificationService,
    private tableDynamicService: TableDynamicService,
  ) {
  }

  ngOnInit(): void {
  }

}
