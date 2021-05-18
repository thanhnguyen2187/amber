import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable } from 'rxjs';
import { CustomerData } from '../models/customer-data.interface';
import { VehicleUsage } from '../models/vehicle-usage.interface';
import { format, formatISO } from 'date-fns';

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
        const dateStart = vehicleUsage.dateStart ?? new Date();
        const dateEnd = vehicleUsage.dateEnd ?? new Date();
        return {
          ...vehicleUsage,
          dateStart: format(dateStart, 'yyyy-MM-dd\'T\'HH:mm:ss\'+\'07:00'),
          dateEnd: format(dateEnd, 'yyyy-MM-dd\'T\'HH:mm:ss\'+\'07:00'),
          // dateStart: dateStart.toJSON(),
          // dateEnd: dateEnd.toJSON(),
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
