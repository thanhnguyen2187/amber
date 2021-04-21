import { Injectable } from '@angular/core';
import { BikeRental, BikeSale, TableCell, TableRowForSale } from './table-data.model';
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

  saleRows$: Observable<TableRowForSale[]> =
    this.itemStoreService.bikeSales$.pipe(
      map(bikeSales => {
        bikeSales = bikeSales ?? [];
        return bikeSales.map(
          bikeSale => this.tableStaticService.bikeSaleToRow(bikeSale)
        );
      })
    );
  dailyInsideCityRentals: BikeRental[] = [];
  sales: BikeSale[] = [];

  addBikeRentalInsideCity(
    bikeRental: BikeRental,
  ): void {
    this.dailyInsideCityRentals.push(bikeRental);
  }

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
            1,
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
            1,
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
