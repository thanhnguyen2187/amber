import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable } from 'rxjs';
import { CustomerData } from '../models/customer-data.interface';
import { VehicleUsage } from '../models/vehicle-usage.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateContractDetailsService {

  update$(
    {
      contractId,
      state,
      customerData,
      vehicleUsages,
    }: {
      contractId: number,
      state: number,
      customerData: CustomerData,
      vehicleUsages: VehicleUsage[],
    },
  ): Observable<any> {
    // to avoid problems with date range
    const fixedVehicleUsages: any[] = vehicleUsages.map(
      vehicleUsage => {
        return {
          ...vehicleUsage,
          dateStart: vehicleUsage.dateStart?.toJSON(),
          dateEnd: vehicleUsage.dateEnd?.toJSON(),
        };
      }
    );
    return this.prefixedHttpClientService.post(
      {
        url: 'contract/update-details',
        body: {
          contractId,
          state,
          customerData,
          vehicleUsages: fixedVehicleUsages,
        },
      }
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
