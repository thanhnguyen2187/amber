import { Injectable } from '@angular/core';
import { BikeRental, BikeSale, TableCell, TableRowForRent, TableRowForSale } from './table-data.model';
import { TableStaticService } from './table-static.service';
import { ItemStoreService } from '../item-grid/item-store.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableDynamicService {

  constructor(
    private tableStaticService: TableStaticService,
    private itemStoreService: ItemStoreService,
  ) { }

  rowsForSale$: Observable<TableRowForSale[]> =
    this.itemStoreService.bikeSales$.pipe(
      map(bikeSales => {
        bikeSales = bikeSales ?? [];
        return bikeSales.map(
          bikeSale => this.tableStaticService.bikeSaleToRow(bikeSale)
        );
      })
    );
  rowsForRentDailyInsideCity$: Observable<TableRowForRent[]> =
    this.itemStoreService.bikeRentalsDailyInsideCity$.pipe(
      map(
        bikeRentals => {
          bikeRentals = bikeRentals ?? [];
          return bikeRentals.map(
            bikeRental => this.tableStaticService.bikeRentalToRow(bikeRental)
          );
        }
      )
    );
  rowsForRentDailyInsideCity: BikeRental[] = [];
  sales: BikeSale[] = [];

  addBikeSale(
    bikeSale: BikeSale,
  ): void {
    this.sales.push(bikeSale);
  }

  get saleRows(): TableRowForSale[] {
    return this
      .itemStoreService
      .bikeSales
      .map(
        (bikeSale) => {
          return new TableRowForSale(
            bikeSale.imageUrl,
            bikeSale.bikeName,
            bikeSale.priceDisplay,
            bikeSale.price,
            bikeSale.amount ?? 1,
          );
        }
      );
  }

  get saleCells(): TableCell[] {
    const headerCells = this.tableStaticService.forSaleHeaderCells;
    const saleCells: TableCell[] = [];
    this
      .itemStoreService
      .bikeSales
      .forEach(
        (bikeSale) => {
          const typedBikeSale = new BikeSale(
            bikeSale.imageUrl,
            bikeSale.bikeName,
            bikeSale.price,
            bikeSale.priceDisplay,
            bikeSale.amount,
          );
          saleCells.push(
            ...this.tableStaticService.bikeSaleToCells(typedBikeSale) // Cells
          );
        }
      );

    return [
      ...headerCells,
      ...saleCells,
    ];
  }
}
