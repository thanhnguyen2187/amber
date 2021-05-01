import { Injectable } from '@angular/core';

export type ItemStoreName =
  'dailyInsideCity' |
  'dailyTraveling' |
  'monthly' |
  'forSale'
;

@Injectable({
  providedIn: 'root'
})
export class ItemStoreV2Service {

  constructor() { }

  getItems(
    {
      itemStoreName,
    }: {
      itemStoreName: ItemStoreName,
    }
  ): any[] {
    return (
      (
        JSON.parse(
          localStorage.getItem(itemStoreName) ?? '[]'
        )
      ) as []
    );
  }

  addItem(
    {
      itemStoreName,
      item,
    }: {
      itemStoreName: ItemStoreName,
      item: any,
    }
  ): void {
    localStorage.setItem(
      itemStoreName,
      JSON.stringify(
        [
          ...this.getItems({itemStoreName}),
          item,
        ],
      ),
    );
  }

  updateItem(
    {
      itemStoreName,
      index,
      item,
    }: {
      itemStoreName: ItemStoreName,
      index: number,
      item: any,
    }
  ): void {
    const oldItems: any[] = this.getItems({itemStoreName});
    const newItems: any[] = [
      ...oldItems.slice(0, index),
      item,
      ...oldItems.slice(index + 1),
    ];
    localStorage.setItem(
      itemStoreName,
      JSON.stringify(newItems),
    );
  }

  removeItem(
    {
      itemStoreName,
      index,
    }: {
      itemStoreName: ItemStoreName,
      index: number,
    }
  ): void {
    const oldItems: any[] = this.getItems({itemStoreName});
    const newItems: any[] = [
      ...oldItems.slice(0, index),
      ...oldItems.slice(index + 1),
    ];
    localStorage.setItem(
      itemStoreName,
      JSON.stringify(newItems),
    );
  }

  clearAll(
  ): void {
    localStorage.clear();
  }
}
