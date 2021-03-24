import { Component, Input, OnInit } from '@angular/core';
import { SettingItem } from './setting-item.model';

@Component({
  selector: 'app-setting-items',
  templateUrl: './setting-items.component.html',
  styleUrls: ['./setting-items.component.scss']
})
export class SettingItemsComponent implements OnInit {

  @Input() items: SettingItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
