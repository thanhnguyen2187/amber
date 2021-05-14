import { range } from 'amber-core';
import { enUS } from 'date-fns/esm/locale';
import { weekStartsOn } from './week-starts-on';

export const dayOfWeekLabels: string[] = [
    ...range({
      start: 0,
      stop: 7,
    }).map(
      (index) =>
        enUS.localize?.day(
          (weekStartsOn + index) % 7,
          // index,
          { width: 'abbreviated' },
        )
    )
  ];


