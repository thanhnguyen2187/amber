import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { NumberPlateOption } from '../models/number-plate-option.interface';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class NumberPlateOptionsService {

  numberPlateOptions$: Subject<NumberPlateOption[]> = new Subject<NumberPlateOption[]>();

  reload(bikeModelId: number): void {
    this.prefixedHttpClientService.get(
      {
        url: `v2/bike-models/${bikeModelId}/number-plate-options`,
      }
    ).subscribe(
      (options) => {
        this.numberPlateOptions$.next(options as NumberPlateOption[]);
      }
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
