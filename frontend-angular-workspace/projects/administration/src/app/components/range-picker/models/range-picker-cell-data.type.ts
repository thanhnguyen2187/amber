export enum RangePickerCellDataType {
  /*tslint:disable:no-bitwise*/
  None = 0,
  Default =        (1 << 0),
  Display =        (1 << 1),
  CurrentDate =    (1 << 2),
  PickedOnly =     (1 << 3),
  PickedFirst =    (1 << 4),
  PickedSecond =   (1 << 5),
  PickedBetween =  (1 << 6),
  PastDay =        (1 << 7),
  DifferentMonth = (1 << 8),
  NotAllowed =     (1 << 9),
  /*tslint:enable:no-bitwise*/
}
