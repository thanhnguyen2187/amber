import { DateWrapper } from '../models/date-wrapper.interface';
import { format } from 'date-fns';

export class DateWrapperFactory {
  static createDefault(): DateWrapper {
    return {
      label: '',
      get valueDisplay(): string {
        return this.value ? format(this.value, 'yyyy-MM-dd') : '[unpicked]';
      },
      componentDisplay: false,
    };
  }

  static createDateRange(): DateWrapper[] {
    const dateWrapperStart = this.createDefault();
    const dateWrapperEnd = this.createDefault();
    dateWrapperStart.label = 'Date Start';
    dateWrapperEnd.label = 'Date End';

    return [
      dateWrapperStart,
      dateWrapperEnd,
    ];
  }
}
