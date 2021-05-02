import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item.service';
import { NotificationService } from '../notification/notification.service';
import { TableDynamicService } from '../table/table-dynamic.service';
import { BikeSale } from '../table/table-data.model';
import { ItemStoreName } from './item-store-v2.service';

export interface CardRowData {
  label: string;
  value: number;
  priceDisplay: string;
  icon: 'calendar' | 'cart';
  itemStoreName: ItemStoreName;
}

export function generateCardRowData(item: Item): CardRowData[] {
  function* consumeLabels(): Iterator<string> {
    // yield 'Price for Sale:';
    yield 'Price for Rent:';
    while (true) {
      yield '';
    }
  }
  const labelsGenerator = consumeLabels();
  let cardRowData: CardRowData[] = [
    {
      label: 'Price for Sale:',
      priceDisplay: item.priceForSaleDisplay ?? '',
      value: item.priceForSale ?? 0,
      icon: 'cart',
      itemStoreName: 'forSale',
    },
    {
      label: '',
      priceDisplay: (item.priceForRentInsideCityDisplay ?? '') + '/day inside city',
      value: item.priceForRentInsideCity ?? 0,
      icon: 'calendar',
      itemStoreName: 'dailyInsideCity',
    },
    {
      label: '',
      priceDisplay: (item.priceForRentTravelingDisplay ?? '') + '/day traveling',
      value: item.priceForRentTraveling ?? 0,
      icon: 'calendar',
      itemStoreName: 'dailyTraveling',
    },
    {
      label: '',
      priceDisplay: (item.priceForRentMonthlyDisplay ?? '') + '/month',
      value: item.priceForRentMonthly ?? 0,
      icon: 'calendar',
      itemStoreName: 'monthly',
    },
  ];

  cardRowData = cardRowData.filter(
    (data) => {
      return data.value > 0;
    }
  );
  cardRowData.forEach(
    (data) => {
      if (!data.label) {
        data.label = labelsGenerator.next().value;
      }
    }
  );

  return cardRowData;
}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  cardRowData: CardRowData[] = [];

  @Input() item: Item = {
    id: 0,
    name: '',
    images: [],
    capacity: 100,
    typeDisplay: 'Manual',
    description: 'Description',
    imageReference: 'https://via.placeholder.com/300x200',
    priceForSaleDisplay: '300 USD',
    priceForRentTravelingDisplay: '10 USD',
    priceForRentInsideCityDisplay: '5 USD',
    priceForRentMonthlyDisplay: '1 000 000 VND',
  };

  copyItem(): Item {
    return {
      ...this.item
    };
  }

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
    this.cardRowData = generateCardRowData(this.item);
  }
}
