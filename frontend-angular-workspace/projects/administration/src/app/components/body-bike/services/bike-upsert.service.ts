import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { CookedBikeModel } from '../models/cooked-bike-model.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeUpsertService {

  upsert$(
    cookedBikeModel: CookedBikeModel,
  ): Observable<any> {
    return this.prefixedHttpClientService.post(
      {
        url: 'v2/bike-models/upsert',
        body: cookedBikeModel,
      }
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
