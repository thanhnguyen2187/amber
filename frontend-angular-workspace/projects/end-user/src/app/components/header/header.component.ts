import { Component, OnInit } from '@angular/core';

import {
  HeaderMenuItem,
  HeaderMenuItemService,
} from './header-menu-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerItemService: HeaderMenuItemService,
  ) {
  }

  items: HeaderMenuItem[] = [];

  ngOnInit(): void {
    this
      .headerItemService
      .getAll()
      .subscribe(
        items => this.items = items
      );
  }

}
