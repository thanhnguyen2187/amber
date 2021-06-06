import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StateSummarizingResponse } from '../models/state-summarizing-response.interface';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { StateSummarizingRequest } from '../models/state-summarizing-request.interface';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class StateSummarizingService {

  stateSummarizing$: Subject<StateSummarizingResponse> = new Subject<StateSummarizingResponse>();

  reload(
    {
      dateStart,
      dateEnd,
      types,
      numberPlate,
      bikeName,
    }: StateSummarizingRequest,
  ): void {
    this.prefixedHttpClientService.post(
      {
        url: 'v2/bike-models/state-summarizing',
        body: {
          dateStart: dateStart ? format(dateStart, 'yyyy-MM-dd\'T\'HH:mm:ss\'+\'07:00') : undefined,
          dateEnd: dateEnd ? format(dateEnd, 'yyyy-MM-dd\'T\'HH:mm:ss\'+\'07:00') : undefined,
          types,
          numberPlate,
          bikeName,
        },
      }
    ).subscribe(
      response => this.stateSummarizing$.next(response as StateSummarizingResponse)
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
