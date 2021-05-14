import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Payment } from '../models/payment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePaymentsService {

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }

  updatePayments(
    {
      contractId,
      payments,
    }: {
      contractId: number,
      payments: Payment[],
    }
  ): Observable<any> {
    return this.prefixedHttpClientService.post(
      {
        url: 'contract/update-payments',
        body: {
          contractId,
          payments,
        }
      }
    );
  }
}
