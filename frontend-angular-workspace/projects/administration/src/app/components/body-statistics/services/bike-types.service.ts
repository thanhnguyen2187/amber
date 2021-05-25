import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable } from 'rxjs';
import { Record } from '../models/record.interface';

@Injectable({
  providedIn: 'root'
})
export class BikeTypesService {

  get bikeTypesData$(): Observable<Record[]> {
    return this.prefixedHttpClientService.get(
      {
        url: 'v2/statistics/bike-model-types',
      }
    ) as Observable<Record[]>;
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
