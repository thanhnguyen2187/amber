import { differenceInDays, formatISO } from 'date-fns';

export class TableCell {
  type:
    'plain' |
    'image' |
    'date' |
    'amount' |
    'none' = 'none';
}

export class TableCellPlain extends TableCell {
  constructor(
    public isHeader: boolean,
    public display: string,
  ) {
    super();
    this.type = 'plain';
  }
}

export class TableCellImage extends TableCell {

  constructor(
    public imageUrl: string,
  ) {
    super();
    this.type = 'image';
  }
}

export class TableCellDate extends TableCell {
  display = '';
  action(): void {}

  constructor() {
    super();
    this.type = 'date';
  }
}

export class TableCellAmount extends TableCell {
  // value = 0;
  increaseAction(): void {
    this.value += 1;
  }
  decreaseAction(): void {
    this.value -= 1;
  }

  constructor(
    public value: number = 1,
    // public increaseAction: () => void,
    // public decreaseAction: () => void,
  ) {
    super();
    this.type = 'amount';
  }
}

// TODO: refactor
export type TableRow = TableRowForRent | TableRowForSale;
export class TableRowForSale {
  get total(): number {
    return this.priceValue * this.amount;
  }

  increaseAmount(value = 1): void {
    this.amount += value;
    console.log(this);
  }
  decreaseAmount(value = 1): void {
    if (this.amount - value > 0) {
      this.amount -= value;
    }
  }

  constructor(
    public imageUrl: string,
    public bikeName: string,
    public priceDisplay: string,
    public priceValue: number,
    public amount: number,
  ) {
  }
}
export class TableRowForRent {

  increaseAmount(value = 1): void {
    this.amount += value;
  }
  decreaseAmount(value = 1): void {
    if (this.amount - value > 0) {
      this.amount -= value;
    }
  }

  get prettifiedDateStart(): string {
    return formatISO(
      this.dateStart,
      {
        representation: 'date',
      }
  );
  }

  get prettifiedDateEnd(): string {
    return formatISO(
      this.dateEnd,
      {
        representation: 'date',
      }
    );
  }

  get dayCount(): number {
    return differenceInDays(
      this.dateEnd,
      this.dateStart,
    ) + 1;
  }
  get total(): number {
    return this.priceValue * this.amount * this.dayCount;
  }

  constructor(
    public imageUrl: string ,
    public bikeName: string ,
    public priceDisplay: string,
    public priceValue: number,
    public amount: number,
    public dateStart: Date,
    public dateEnd: Date,
  ) {
  }
}

export class BikeRental {
  // imageUrl = '';
  // bikeName = '';
  // priceDisplay = '';
  // amount = 0;
  // dateStart: Date = new Date();
  // dateEnd: Date = new Date();
  get dayCount(): number {
    return differenceInDays(
      this.dateStart,
      this.dateEnd,
    );
  }
  total = 0;

  constructor(
    public imageUrl: string,
    public bikeName: string,
    public priceDisplay = '',
    public priceValue = 0,
    public amount: number,
    public dateStart: Date,
    public dateEnd: Date,
  ) {
  }
}

export class BikeSale {
  // imageUrl = '';
  // bikeName = '';
  // price = 0;
  // priceDisplay = '';
  // amountValue = 0;
  // get amount(): number {
  //   return this.amountValue;
  // }
  // set amount(value) {
  //   this.amountValue = value;
  // }
  // increaseAmount(value: number = 1): void {
  //   this.amountValue += value;
  // }
  // decreaseAmount(value: number = 1): void {
  //   this.amountValue -= value;
  // }

  get total(): number {
    return this.price * this.amount;
  }

  constructor(
    public imageUrl: string,
    public bikeName: string,
    public price: number,
    public priceDisplay: string,
    public amount: number,
  ) {
  }
}
