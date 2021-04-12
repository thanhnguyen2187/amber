import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item.service';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item = {
    name: '',
    imageReference: 'https://via.placeholder.com/300x200',
    priceForSale: '300 USD',
    priceForRentTraveling: '10 USD',
    priceForRentInsideCity: '5 USD',
    priceForRentMonthly: '1 000 000 VND',
  };

  addToCart(): void {
    this.notificationService.notify(
      'Success!',
      `${this.item.name} added to cart successfully!`,
    );
  }

  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
  }

}
