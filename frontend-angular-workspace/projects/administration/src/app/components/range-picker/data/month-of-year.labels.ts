import { range } from 'amber-core';
import { enUS } from 'date-fns/esm/locale';

export const monthOfYearLabels: string[] = [
  ...range({
    start: 0,
    stop: 12,
  }).map(index => {
    return enUS.localize?.month(
      index,
    );
  })
];

