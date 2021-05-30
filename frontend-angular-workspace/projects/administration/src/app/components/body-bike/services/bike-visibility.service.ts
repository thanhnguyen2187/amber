import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeVisibilityService {

  toggle$(
    {
      bikeModelId,
      visibility,
    }: {
      bikeModelId: number,
      visibility: number,
    }
  ): Observable<any> {
    return this.prefixedHttpClientService.post(
      {
        url: `v2/bike-models/${bikeModelId}/toggle/${visibility}`,
      }
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
