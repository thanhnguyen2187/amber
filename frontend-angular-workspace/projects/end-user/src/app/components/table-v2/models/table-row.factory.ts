import { TableRowForRent, TableRowForRentMonthly, TableRowForSale } from './table-row';
import { ItemStoreName } from '../../item-grid/item-store-v2.service';
import { parseJSON } from 'date-fns';

export class TableRowFactory {
  static createTableRowDynamic(
    {
      type,
      data,
    }: {
      type: ItemStoreName,
      data: any
    }
  ): any {
    switch (type) {
      case 'forSale':
        return TableRowFactory.createTableRowForSale(data);
      case 'dailyInsideCity':
      case 'dailyTraveling':
        return TableRowFactory.createTableRowForRent(data);
      case 'monthly':
        return TableRowFactory.createTableRowForRentMonthly(data);
    }
  }

  static createTableRowForSale(
    {
      imageUrl,
      bikeName,
      priceDisplay,
      priceValue,
      amountValue,
    }: {
      imageUrl: string,
      bikeName: string,
      priceDisplay: string,
      priceValue: number,
      amountValue: number,
    }
  ): TableRowForSale {
    const tableRow = new TableRowForSale();
    tableRow.imageUrl = imageUrl;
    tableRow.bikeName = bikeName;
    tableRow.priceDisplay = priceDisplay;
    tableRow.priceValue = priceValue;
    tableRow.amountValue = amountValue;
    return tableRow;
  }

  static createTableRowForRent(
    {
      imageUrl,
      bikeName,
      priceDisplay,
      priceValue,
      amountValue,
      dateStart,
      dateEnd,
    }: {
      imageUrl: string,
      bikeName: string,
      priceDisplay: string,
      priceValue: number,
      amountValue: number,
      dateStart: Date,
      dateEnd: Date,
    }
  ): TableRowForRent {
    const tableRow = new TableRowForRent();
    tableRow.imageUrl = imageUrl;
    tableRow.bikeName = bikeName;
    tableRow.priceDisplay = priceDisplay;
    tableRow.priceValue = priceValue;
    tableRow.amountValue = amountValue;
    tableRow.dateStart = parseJSON(dateStart);
    tableRow.dateEnd = parseJSON(dateEnd);
    return tableRow;
  }

  static createTableRowForRentMonthly(
    {
      imageUrl,
      bikeName,
      priceDisplay,
      priceValue,
      amountValue,
      dateStart,
      dateEnd,
    }: {
      imageUrl: string,
      bikeName: string,
      priceDisplay: string,
      priceValue: number,
      amountValue: number,
      dateStart: Date,
      dateEnd: Date,
    }
  ): TableRowForRentMonthly {
    const tableRow = new TableRowForRentMonthly();
    tableRow.imageUrl = imageUrl;
    tableRow.bikeName = bikeName;
    tableRow.priceDisplay = priceDisplay;
    tableRow.priceValue = priceValue;
    tableRow.amountValue = amountValue;
    tableRow.dateStart = parseJSON(dateStart);
    tableRow.dateEnd = parseJSON(dateEnd);
    return tableRow;
  }
}
