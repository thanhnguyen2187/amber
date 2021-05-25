import { SingleSeries } from '../models/single-series.interface';

export class SingleSeriesFactory {
  static createDefault(): SingleSeries {
    return {
      name: '',
      series: [],
    };
  }
}
