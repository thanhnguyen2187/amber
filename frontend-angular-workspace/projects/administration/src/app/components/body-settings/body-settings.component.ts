import { Component, OnInit } from '@angular/core';
import { SettingItemService } from './setting-item.service';
import { SettingItem } from './setting-item.model';

@Component({
  selector: 'app-body-settings',
  templateUrl: './body-settings.component.html',
  styleUrls: ['./body-settings.component.scss'],
  providers: [
    SettingItemService,
  ]
})
export class BodySettingsComponent implements OnInit {

  contactItems: SettingItem[] = [];
  socialMediaItems: SettingItem[] = [];

  constructor(
    private settingsItemService: SettingItemService,
  ) {
    settingsItemService.getSettingItems().subscribe(
      (items) => this.contactItems = items
    );
    settingsItemService.getSocialMediaSettingItems().subscribe(
      (items) => this.socialMediaItems = items
    );
  }

  ngOnInit(): void {
  }

}
