import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BikeRental, BikeSale } from '../table/table-data.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { parseJSON } from 'date-fns';

export enum ItemStoreName {
  bikeSales = 'bikeSales',
  bikeRentalsDailyInsideCity = 'bikeRentalsDailyInsideCity',
  bikeRentalsDailyTraveling = 'bikeRentalsDailyTraveling',
  bikeRentalsMonthly = 'bikeRentalsMonthly',
}

@Injectable({
  providedIn: 'root'
})
export class ItemStoreService {

  bikeSales$: BehaviorSubject<BikeSale[]> = new BehaviorSubject<BikeSale[]>([]);
  bikeRentalsDailyInsideCity$: BehaviorSubject<BikeRental[]> = new BehaviorSubject<BikeRental[]>([]);
  subjectMap: {
    [key in ItemStoreName]?: Subject<any>
  } = {
    [ItemStoreName.bikeSales]: new BehaviorSubject<any>([]),
  };

  constructor(
  ) {
  }

  update(): void {
    this.bikeSales$.next(
      this.bikeSales
    );
    this.bikeRentalsDailyInsideCity$.next(
      this.bikeRentalsDailyInsideCity
    );
  }

  changeDate(
    {
      itemStoreName,
      index,
      dateStart,
      dateEnd,
    }: {
      itemStoreName: string,
      index: number,
      dateStart: Date,
      dateEnd: Date,
    }
  ): void {
    let oldItems: any[] = [];
    let newItems: any[] = [];
    let newItem = {};
    let oldItem: any;
    let subject: Subject<any> | undefined;
    switch (itemStoreName) {
      case ItemStoreName.bikeRentalsDailyInsideCity:
        oldItems = this.bikeSales.slice();
        oldItem = oldItems[index] as BikeRental;
        newItem = new BikeRental(
          oldItem.imageUrl,
          oldItem.bikeName,
          oldItem.price,
          oldItem.priceDisplay,
          oldItem.amount,
          dateStart,
          dateEnd,
        );
        subject = this.bikeSales$;
        break;
      case ItemStoreName.bikeRentalsDailyTraveling:
        break;
    }

    newItems = [
      ...oldItems.slice(0, index),
      newItem,
      ...oldItems.slice(index + 1),
    ];
    localStorage.setItem(
      itemStoreName,
      JSON.stringify(newItems),
    );
    subject?.next(newItems);
  }

  changeAmount(
    {
      storeItemName,
      index,
      newAmountValue,
    }: {
      storeItemName: ItemStoreName,
      index: number,
      newAmountValue: number,
    }
  ): void {
    if (newAmountValue > 0) {
      let oldItems: any[] = [];
      let newItems: any[] = [];
      let newItem = {};
      let oldItem: any;
      let subject: Subject<any> | undefined;
      switch (storeItemName) {
        case ItemStoreName.bikeSales:
          oldItems = this.bikeSales.slice();
          oldItem = oldItems[index] as BikeSale;
          newItem = new BikeSale(
            oldItem.imageUrl,
            oldItem.bikeName,
            oldItem.price,
            oldItem.priceDisplay,
            newAmountValue,
          );
          subject = this.bikeSales$;
          break;
        case ItemStoreName.bikeRentalsDailyInsideCity:
          oldItems = this.getBikeRentals({storeItemName});
          oldItem = oldItems[index] as BikeRental;
          newItem = new BikeRental(
            oldItem.imageUrl,
            oldItem.bikeName,
            oldItem.priceDisplay,
            oldItem.price,
            newAmountValue,
            oldItem.dateStart,
            oldItem.dateEnd,
          );
          subject = this.bikeRentalsDailyInsideCity$;
          break;
      }

      newItems = [
        ...oldItems.slice(0, index),
        newItem,
        ...oldItems.slice(index + 1),
      ];
      localStorage.setItem(
        storeItemName,
        JSON.stringify(newItems),
      );
      subject?.next(newItems);
    }
  }

  remove(
    {
      itemStoreName,
      index,
    }: {
      itemStoreName: ItemStoreName,
      index: number,
    }
  ): void {
    let oldItems: any[] = [];
    let newItems: any[] = [];
    let subject: Subject<any> | undefined;
    switch (itemStoreName) {
      case ItemStoreName.bikeSales:
        oldItems = this.bikeSales.slice();
        break;
    }

    newItems = [
      ...oldItems.slice(0, index),
      ...oldItems.slice(index + 1),
    ];
    subject = this.bikeSales$;
    localStorage.setItem(
      itemStoreName,
      JSON.stringify(newItems),
    );
    subject?.next(newItems);
  }

  get bikeRentalsDailyInsideCity(): BikeRental[] {
    return this.getBikeRentals(
      {
        storeItemName: ItemStoreName.bikeRentalsDailyInsideCity,
      }
    );
  }

  get bikeSales(): BikeSale[] {
    // return [];
    return (
      (
        JSON.parse(
          localStorage.getItem(ItemStoreName.bikeSales) ?? '[]'
        )
      ) as BikeSale[]
    );
  }

  getBikeRentals({storeItemName}: {storeItemName: string}): BikeRental[] {
    return (
      (
        JSON.parse(
          localStorage.getItem(storeItemName) ?? '[]'
        )
      ) as BikeRental[]
    ).map(
      (bikeRental) => {
        bikeRental.dateStart = parseJSON(bikeRental.dateStart);
        bikeRental.dateEnd = parseJSON(bikeRental.dateEnd);
        return bikeRental;
      }
    );
  }


  // get bikeSales$(): Subject<BikeSale[]> {
  //   return this.storageMap.
  // }

  addBikeRentalDailyInsideCity(bikeRental: BikeRental): void {
    localStorage.setItem(
      ItemStoreName.bikeRentalsDailyInsideCity,
      JSON.stringify(
        [
          ...this.bikeRentalsDailyInsideCity,
          bikeRental,
        ],
      )
    );
  }

  addBikeSale(bikeSale: BikeSale): void {
    localStorage.setItem(
      ItemStoreName.bikeSales,
      JSON.stringify(
        [
          ...this.bikeSales,
          bikeSale,
        ],
      )
    );
  }
}
