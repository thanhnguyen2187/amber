import getISODay from 'date-fns/getISODay';
import format from 'date-fns/format';

export enum CalendarCellType {
  /*tslint:disable:no-bitwise*/
  none = 0,
  default = (1 << 0),
  inactive = (1 << 1),
  current = (1 << 2),
  selectedOnly = (1 << 3),
  selectedFirst = (1 << 4),
  selectedSecond = (1 << 5),
  selectedBetween = (1 << 6),
  display = (1 << 7),
  /*tslint:enable:no-bitwise*/
}
export type CalendarMode = 'month' | 'quarter';
export interface CalendarCell {
  type: CalendarCellType;
  value: string;
  date: Date;
  action: () => void;
}

export class CalendarCellFactory {
  /*tslint:disable:no-bitwise*/
  static createDefault(
    value: string,
    action: () => void,
  ): CalendarCell {
    return {
      type: CalendarCellType.default,
      date: new Date(),
      value,
      action,
    };
  }

  static createCurrent(
    value: string,
    action: () => void,
  ): CalendarCell {
    return {
      type: CalendarCellType.default | CalendarCellType.current,
      date: new Date(),
      value,
      action,
    };
  }

  static createInactive(
    value: string,
    action: () => void,
  ): CalendarCell {
    return {
      type: CalendarCellType.default | CalendarCellType.inactive,
      date: new Date(),
      value,
      action,
    };
  }
  /*tslint:enable:no-bitwise*/
}
