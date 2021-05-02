import { differenceInDays, differenceInMonths, formatISO } from 'date-fns';

function round(
  {
    value,
    step = 1,
    mathFunction,
  }: {
    value: number,
    step: number,
    mathFunction: (x: number) => number,
  }
): number {
  const inverse = 1 / step;
  return mathFunction(value * inverse) / inverse;
}

export class TableRow {
  id = 0;
  imageUrl = '';
  bikeName = '';
  priceDisplay = '';
  priceValue = 0;
  amountValue = 0;

  increaseAmount(): void {
    this.amountValue += 1;
  }
  decreaseAmount(): void {
    if (this.amountValue > 1) {
      this.amountValue -= 1;
    }
  }

  get total(): number {
    return -1;
  }
}

export class TableRowForSale extends TableRow {
  get total(): number {
    return this.priceValue * this.amountValue;
  }
}

export class TableRowForRent extends TableRow {
  dateStart: Date = new Date();
  dateEnd: Date = new Date();

  get dateStartPrettified(): string {
    return formatISO(
      this.dateStart,
      {
        representation: 'date',
      }
    );
  }

  get dateEndPrettified(): string {
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
    return this.priceValue * this.amountValue * this.dayCount;
  }
}

export class TableRowForRentMonthly extends TableRowForRent {

  get monthCount(): number {
    return round(
      {
        value: this.dayCount / 30,
        step: 0.2,
        mathFunction: Math.ceil,
      }
    );
  }

  get total(): number {
    return round(
      {
        value: (
          this.amountValue * this.priceValue * this.monthCount
        ),
        step: 0.5,
        mathFunction: Math.ceil,
      }
    );
  }
}
