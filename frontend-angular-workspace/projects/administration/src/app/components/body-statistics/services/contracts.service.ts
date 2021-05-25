import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { SingleSeries } from '../models/single-series.interface';
import { Observable, Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { SingleSeriesWrapper } from '../models/single-series-wrapper.interface';
import { map } from 'rxjs/operators';
import { format, parseJSON } from 'date-fns';
import { ContractsData } from '../models/contracts-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  contractsChartData$ = new Subject<SingleSeries[]>();

  reload(
    {
      dateStart,
      dateEnd,
    }: {
      dateStart: string,
      dateEnd: string,
    }
  ): void {
    (
      this.prefixedHttpClientService.get(
        {
          url: 'v2/statistics/contracts',
          params: new HttpParams().appendAll({
            dateStart,
            dateEnd,
          }),
        }
      ) as Observable<SingleSeries[]>
    ).pipe(
      // turn the name into `Date` type for an easier life
      map(multipleSeries => {
        multipleSeries.forEach(
          singleSeries => {
            singleSeries.series.forEach(
              record => {
                // record.nameDate = parseJSON(record.name);
                // record.name = format(record.nameDate, 'yyyy-MM-dd');
                record.name = parseJSON(record.name);
              }
            );
          }
        );
        return multipleSeries;
      })
    ).subscribe(
      (data) => this.contractsChartData$.next(data)
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
