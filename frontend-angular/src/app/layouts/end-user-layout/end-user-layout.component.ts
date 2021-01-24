import { Component, OnInit } from '@angular/core';

import { navigationItems } from './end-user-layout.navigation-items';

@Component({
  selector: 'app-end-user-layout',
  templateUrl: './end-user-layout.component.html',
  styleUrls: ['./end-user-layout.component.css']
})
export class EndUserLayoutComponent implements OnInit {

  navigationItems = navigationItems;

  constructor() { }

  ngOnInit(): void {
  }

}
