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
      text: 'Contact Us',
      reference: '',
    },
    {
      text: 'Bikes',
      reference: 'for-rent',
    },
    {
      text: 'Services',
      reference: 'services',
    },
    {
      text: 'Articles',
      reference: 'articles',
    },
  ];

  getAll(): Observable<HeaderMenuItem[]> {
    return of(this.menuItems);
  }

  constructor() { }
}
