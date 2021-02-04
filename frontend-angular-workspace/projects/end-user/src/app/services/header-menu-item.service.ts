import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface HeaderMenuItem {
  text: string;
  reference: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuItemService {

  menuItems: HeaderMenuItem[] = [
    {
      text: 'Home',
      reference: '',
    },
    {
      text: 'About Us',
      reference: 'about-us',
    },
    {
      text: 'For Sale',
      reference: '',
    },
    {
      text: 'For Rent',
      reference: '',
    },
    {
      text: 'Services',
      reference: '',
    },
    {
      text: 'Articles',
      reference: '',
    },
  ];

  getAll(): Observable<HeaderMenuItem[]> {
    return of(this.menuItems);
  }

  constructor() { }
}
