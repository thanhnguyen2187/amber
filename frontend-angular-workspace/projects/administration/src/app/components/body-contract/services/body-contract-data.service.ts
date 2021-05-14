import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable, Subject } from 'rxjs';
import { CookedContractsResponse } from '../models/cooked-contracts-response.interface';
import { convertDynamicFormGroup } from 'amber-core';
import { map } from 'rxjs/operators';
import { VehicleUsageFactory } from '../data/vehicle-usage.factory';
import { PaymentFactory } from '../data/payment.factory';

@Injectable({
  providedIn: 'root'
})
export class BodyContractDataService {

  cookedContracts$: Subject<CookedContractsResponse> = new Subject<CookedContractsResponse>();
  cookedContractsV2$: Subject<CookedContractsResponse> = new Subject<CookedContractsResponse>();

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }

  reloadCookedContracts(): void {
    (
      this.prefixedHttpClientService.get(
        'contract/cooked-contracts',
      ) as Observable<CookedContractsResponse>
    ).subscribe(
      (response) => this.cookedContracts$.next(response)
    );
  }

  reloadCookedContractsV2(
    {
      body,
    }: {
      body: {},
    }
  ): void {
    (
      this.prefixedHttpClientService.post(
        {
          url: 'contract/cooked-contracts-v2',
          body,
        }
      ) as Observable<CookedContractsResponse>
    ).pipe(
      map((response) => {
        response.cookedContracts.forEach(
          (cookedContract) => {
            cookedContract.vehicleUsages = cookedContract.vehicleUsages.map(
              VehicleUsageFactory.augment
            );
            cookedContract.payments = cookedContract.payments.map(
              PaymentFactory.augment
            );
          }
        );
        return response;
      }),
    ).subscribe(
      (response) => this.cookedContractsV2$.next(response)
    );
  }

  updateVisibility(
    {
      contractId,
      newVisibility,
    }: {
      contractId: number,
      newVisibility: number,
    }
  ): void {
    this.prefixedHttpClientService.post(
      {
        url: 'contract/update-visibility',
        body: {
          contractId,
          newVisibility,
        },
      },
    ).subscribe(
      () => {}
    );
  }

}
