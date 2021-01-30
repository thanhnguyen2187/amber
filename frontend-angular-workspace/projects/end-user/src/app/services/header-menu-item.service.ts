import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuItemService {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      url: '',
    },
    {
      label: 'About Us',
      url: '',
    },
    {
      label: 'For Sale',
      url: '',
    },
    {
      label: 'For Rent',
      url: '',
    },
    {
      label: 'Services',
      url: '',
    },
    {
      label: 'Articles',
      url: '',
    },
  ];

  getAll(): Observable<MenuItem[]> {
    return of(this.menuItems);
  }

  constructor() { }
}
