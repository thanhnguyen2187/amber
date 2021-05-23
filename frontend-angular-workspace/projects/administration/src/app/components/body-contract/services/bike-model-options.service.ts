import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable } from 'rxjs';
import { BikeModelOption } from '../models/bike-model-option.interface';
import { BikeModelOptionsResponse } from '../models/bike-model-options-response.interface';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BikeModelOptionsService {

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }

  get bikeModelOptions$(): Observable<BikeModelOption[]> {
    return (
      this.prefixedHttpClientService.get('bike-models/options') as Observable<BikeModelOptionsResponse>
    ).pipe(
      pluck('bikeModelOptions'),
    );
  }
}
