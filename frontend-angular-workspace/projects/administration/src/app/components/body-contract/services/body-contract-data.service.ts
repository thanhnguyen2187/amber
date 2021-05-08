import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable, Subject } from 'rxjs';
import { CookedContractsResponse } from '../models/cooked-contracts-response.interface';
import { convertDynamicFormGroup } from 'amber-core';

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
