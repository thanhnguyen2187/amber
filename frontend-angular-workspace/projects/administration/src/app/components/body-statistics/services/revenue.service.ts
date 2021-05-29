import { Injectable } from '@angular/core';
import { PrefixedHttpClientService } from '../../../services/prefixed-http-client.service';
import { Observable, Subject } from 'rxjs';
import { SingleSeries } from '../models/single-series.interface';
import { map } from 'rxjs/operators';
import { parseJSON } from 'date-fns';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  revenueChartData$ = new Subject<SingleSeries[]>();

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
          url: 'v2/statistics/revenue',
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
      (data) => this.revenueChartData$.next(data)
    );
  }

  constructor(
    private prefixedHttpClientService: PrefixedHttpClientService,
  ) { }
}
