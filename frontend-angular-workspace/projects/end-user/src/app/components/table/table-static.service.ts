import { Injectable } from '@angular/core';
import {
  BikeSale,
  TableCell,
  TableCellAmount, TableCellDate,
  TableCellImage,
  TableCellPlain,
  TableRow, TableRowForRent, TableRowForSale,
} from './table-data.model';

@Injectable({
  providedIn: 'root'
})
export class TableStaticService {

  constructor() { }

  isPlainCell(cell: TableCell): boolean {
    return cell.type === 'plain';
  }
  isImageCell(cell: TableCell): boolean {
    return cell.type === 'image';
  }
  isDateCell(cell: TableCell): boolean {
    return cell.type === 'date';
  }
  isAmountCell(cell: TableCell): boolean {
    return cell.type === 'amount';
  }

  get rentalHeaderDisplays(): string[] {
    return [
      'Image',
      'Name',
      'Price',
      'Amount',
      'Date Start',
      'Date End',
      'Day Count',
      'Total',
    ];
  }

  bikeSaleToRow(bikeSale: BikeSale): TableRowForSale {
    return new TableRowForSale(
      bikeSale.imageUrl,
      bikeSale.bikeName,
      bikeSale.priceDisplay,
      bikeSale.price,
      1,
    );
  }

  sumRows(rows: TableRow[]): number {
    let total = 0;
    rows.forEach(
      (row) => total += row.total
    );
    return total;
  }

  get saleHeaderDisplays(): string[] {
    return [
      'Image',
      'Name',
      'Price',
      'Amount',
      'Total',
    ];
  }

  get rentalHeaderCells(): TableCellPlain[] {
    return [
      'Image',
      'Name',
      'Price',
      'Amount',
      'Date Start',
      'Date End',
      'Day Count',
      'Total',
    ].map(
      (label) => {
        return new TableCellPlain(
          true,
          label,
        );
      }
    );
  }

  get forSaleHeaderCells(): TableCellPlain[] {
    return [
      'Image',
      'Name',
      'Price',
      'Amount',
      'Total',
    ].map(
      (label) => {
        return new TableCellPlain(
          true,
          label,
        );
      }
    );
  }

  bikeSaleToCells(
    bikeSale: BikeSale,
  ): TableCell[] {
    const imageCell: TableCellImage = new TableCellImage(
      bikeSale.imageUrl,
    );
    const plainCells: TableCellPlain[] = [
      bikeSale.bikeName,
      bikeSale.priceDisplay,
    ].map(
      (label) => {
        return new TableCellPlain(
          false,
          label,
        );
      }
    );
    const amountCell: TableCellAmount = new TableCellAmount(1);
    const totalCell: TableCellPlain = new TableCellPlain(
      false,
      '',
    );

    return [
      imageCell,
      ...plainCells,
      amountCell,
      totalCell,
    ];
  }
}
