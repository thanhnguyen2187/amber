import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CookedBikeModel } from '../models/cooked-bike-model.interface';
import { switchMap } from 'rxjs/operators';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { CookedBikeModelResponse } from '../models/cooked-bike-model.response.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeSearchService {

  search$: Subject<CookedBikeModelResponse> = new Subject<CookedBikeModelResponse>();

  reload(
    {
      page,
      size,
      body,
    }: {
      page: number,
      size: number,
      body: {},
    }
  ): void {
    this.prefixedHttpClientService.post(
      {
        url: 'v2/bike-models/search',
        params: new HttpParams().appendAll(
          {
            page: page.toString(),
            size: size.toString(),
          },
        ),
        body,
      }
    ).subscribe(
      (response) => {
        this.search$.next(response as CookedBikeModelResponse);
      }
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) {
  }
}
