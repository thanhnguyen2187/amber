import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { fromArray } from 'rxjs/internal/observable/fromArray';
import { map, pluck, repeat, take } from 'rxjs/operators';
import { PrefixedHttpClientService } from '../../services/prefixed-http-client.service';
import { PrefixedHttpClientConstants } from '../../services/prefixed-http-client.constants';
import { HttpParams } from '@angular/common/http';
import { CoverImage } from '../../services/home-gallery-image.service';

export interface Item {
  imageReference: string;
  name: string;
  id: number;
  images: CoverImage[];

  capacity: number;
  typeDisplay: string;
  description: string;

  priceForSale?: number;
  priceForRentInsideCity?: number;
  priceForRentTraveling?: number;
  priceForRentMonthly?: number;

  priceForSaleDisplay?: string;
  priceForRentInsideCityDisplay?: string;
  priceForRentTravelingDisplay?: string;
  priceForRentMonthlyDisplay?: string;
}

export interface BikeModelsReturnResult {
  bikeModels: Item[];
  size: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(
    tags: string[],
    pageNumber: number,
    pageSize: number,
  ): Observable<BikeModelsReturnResult> {
    // return of(
    //   // [].concat(
    //   //   ... Array(10).fill(this.items)
    //   // )
    //   Array<Item[]>(4)
    //   .fill(this.items)
    //   .flat()
    // );
    let params: HttpParams = new HttpParams().appendAll(
      {
        page: pageNumber.toString(),
        size: pageSize.toString(),
      }
    );
    tags.forEach(
      (tag) => {
        params = params.append('tags', tag);
      }
    );
    return this
      .httpClient
      .get(
        PrefixedHttpClientConstants.bikeModelsApiUrl,
        params,
      )
      .pipe(
        take(1),
        map(value => value as BikeModelsReturnResult),
      )
    ;
  }

  constructor(
    private httpClient: PrefixedHttpClientService,
  ) {
    // http
  }
}
