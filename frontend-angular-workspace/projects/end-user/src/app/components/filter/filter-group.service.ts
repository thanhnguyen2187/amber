import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface FilterItem {
  label: string;
  key: string;
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
          },
          {
            label: 'For rent',
            key: 'for-rent',
          },
        ],
      },
      {
        title: 'Transmission',
        items: [
          {
            label: 'Manual',
            key: 'manual',
          },
          {
            label: 'Semi-automatic',
            key: 'semi-automatic',
          },
          {
            label: 'Automatic',
            key: 'automatic',
          },
        ],
      },
      {
        title: 'Manufacturer',
        items: [
          {
            label: 'Honda',
            key: 'honda',
          },
          {
            label: 'Yamaha',
            key: 'yamaha',
          },
          {
            label: 'Suzuki',
            key: 'suzuki',
          },
          {
            label: 'Other',
            key: 'other',
          },
        ],
      },
      {
        title: 'Capacity',
        items: [
          {
            label: 'Less than 125cc',
            key: 'less-125',
          },
          {
            label: '125-249cc',
            key: '125-249',
          },
          {
            label: '250cc or more',
            key: 'more-250',
          },
        ],
      },
    ]);
  }

  constructor() { }
}
