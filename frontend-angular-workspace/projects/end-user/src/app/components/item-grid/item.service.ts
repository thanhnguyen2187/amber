import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { fromArray } from 'rxjs/internal/observable/fromArray';
import { repeat } from 'rxjs/operators';
import { PrefixedHttpClientService } from '../../services/prefixed-http-client.service';

export interface Item {
  imageReference: string;
  title: string;
  priceForSale?: string;
  priceForRentUrban?: string;
  priceForRentTraveling?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
    {
      imageReference: 'https://i0.wp.com/cdn.inevn.com/img/thumb/23873.1kx.isij?resize=776,517&w=776&quality=100&strip=all',
      title: 'Honda XR 150',
      priceForSale: '2500 USD',
      priceForRentUrban: '12 USD per day',
      priceForRentTraveling: '25 USD per day',
    },
    {
      imageReference: 'https://i0.wp.com/cdn.inevn.com/img/thumb/23873.1kx.isij?resize=776,517&w=776&quality=100&strip=all',
      title: 'Honda XR 150',
      priceForSale: '2500 USD',
      priceForRentUrban: '12 USD per day',
      priceForRentTraveling: '25 USD per day',
    },
    {
      imageReference: 'https://i0.wp.com/cdn.inevn.com/img/thumb/23873.1kx.isij?resize=776,517&w=776&quality=100&strip=all',
      title: 'Honda XR 150',
      priceForSale: '2500 USD',
      priceForRentUrban: '12 USD per day',
      priceForRentTraveling: '25 USD per day',
    },
  ];

  getItems(): Observable<Item[]> {
    return of(
      // [].concat(
      //   ... Array(10).fill(this.items)
      // )
      Array<Item[]>(4)
      .fill(this.items)
      .flat()
    );
  }

  constructor(
    private httpClient: PrefixedHttpClientService,
  ) {
    // http
  }
}
