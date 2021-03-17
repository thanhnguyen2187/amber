import { Component, OnInit } from '@angular/core';
import { SettingsItemService } from './settings-item.service';
import { SettingItem } from './settings-item.model';
import set = Reflect.set;

@Component({
  selector: 'app-body-settings',
  templateUrl: './body-settings.component.html',
  styleUrls: ['./body-settings.component.scss'],
  providers: [
    SettingsItemService,
  ]
})
export class BodySettingsComponent implements OnInit {

  items: SettingItem[] = [];
  socialMediaItems: SettingItem[] = [];

  constructor(
    private settingsItemService: SettingsItemService,
  ) {
    settingsItemService.getSettingItems().subscribe(
      (items) => this.items = items
    );
    settingsItemService.getSocialMediaSettingItems().subscribe(
      (items) => this.socialMediaItems = items
    );
  }

  ngOnInit(): void {
  }

}
