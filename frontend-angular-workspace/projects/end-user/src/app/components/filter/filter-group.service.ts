import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface FilterItem {
  label: string;
  key: string;
  checked: boolean;
}
export interface FilterGroup {
  items: FilterItem[];
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilterGroupService {

  getFilterGroups(): Observable<FilterGroup[]> {
    return of([
      {
        title: 'Purpose',
        items: [
          {
            label: 'For sale',
            key: 'for-sale',
            checked: false,
          },
          {
            label: 'For rent',
            key: 'for-rent',
            checked: false,
          },
        ],
      },
      {
        title: 'Transmission',
        items: [
          {
            label: 'Manual',
            key: 'manual',
            checked: false,
          },
          {
            label: 'Semi-automatic',
            key: 'semi-automatic',
            checked: false,
          },
          {
            label: 'Automatic',
            key: 'automatic',
            checked: false,
          },
        ],
      },
      {
        title: 'Manufacturer',
        items: [
          {
            label: 'Honda',
            key: 'honda',
            checked: false,
          },
          {
            label: 'Yamaha',
            key: 'yamaha',
            checked: false,
          },
          {
            label: 'Suzuki',
            key: 'suzuki',
            checked: false,
          },
          {
            label: 'Other',
            key: 'other',
            checked: false,
          },
        ],
      },
      {
        title: 'Capacity',
        items: [
          {
            label: 'Less than 125cc',
            key: 'less-125',
            checked: false,
          },
          {
            label: '125-249cc',
            key: '125-249',
            checked: false,
          },
          {
            label: '250cc or more',
            key: 'more-250',
            checked: false,
          },
        ],
      },
    ]);
  }

  constructor() { }
}
