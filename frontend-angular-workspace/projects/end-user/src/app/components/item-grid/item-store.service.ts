import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BikeRental, BikeSale } from '../table/table-data.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemStoreService {

  bikeRentalsDailyInsideCityName = 'bikeRentalsDailyInsideCityName';
  bikeSalesName = 'bikeSale';
  bikeSales$: BehaviorSubject<BikeSale[]> = new BehaviorSubject<BikeSale[]>([]);

  constructor(
  ) {
  }

  update(): void {
    this.bikeSales$.next(
      this.bikeSales
    );
  }

  get bikeRentalsDailyInsideCity(): BikeRental[] {
    // return localStorage.getItem(this.bikeRentalsDailyInsideCityName)
    return [];
  }

  get bikeSales(): BikeSale[] {
    // return [];
    return (
      (
        JSON.parse(
          localStorage.getItem(this.bikeSalesName) ?? '[]'
        )
      ) as BikeSale[]
    );
  }

  // get bikeSales$(): Subject<BikeSale[]> {
  //   return this.storageMap.
  // }

  addBikeRentalDailyInsideCity(bikeRental: BikeRental): void {
  }

  addBikeSale(bikeSale: BikeSale): void {
    localStorage.setItem(
      this.bikeSalesName,
      JSON.stringify(
        [
          ...this.bikeSales,
          bikeSale,
        ],
      )
    );
  }
}
