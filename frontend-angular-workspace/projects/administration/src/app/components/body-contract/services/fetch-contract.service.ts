import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable } from 'rxjs';
import { CookedContract } from '../models/cooked-contract.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchContractService {

  fetchContract$(contractId: number): Observable<CookedContract> {
    return this.prefixedHttpClientService.get(
      {
        url: `v2/contracts/${contractId}`,
      }
    ) as Observable<CookedContract>;
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
