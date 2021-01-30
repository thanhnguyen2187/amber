import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

import { HeaderMenuItemService } from '../../services/header-menu-item.service';

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

  items: MenuItem[] = [];

  ngOnInit(): void {
    this
      .headerItemService
      .getAll()
      .subscribe(
        items => this.items = items
      );
  }

}
