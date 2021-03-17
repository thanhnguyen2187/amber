import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SettingItem } from './settings-item.model';
// import { BodySettingsModule } from './body-settings.module';
// import { BodySettingsComponent } from './body-settings.component';

@Injectable()
export class SettingsItemService {

  constructor() { }

  getSettingItems(): Observable<SettingItem[]> {
    return of([
      new SettingItem({
        key: 'email',
        value: '2wheelsvietnam@gmail.com',
        displayText: 'Email',
      }),
      new SettingItem({
        key: 'phone',
        value: '(+84) 904 253 491',
        displayText: 'Phone',
      }),
      new SettingItem({
        key: 'shopAddress',
        value: '13 Ngo Huyen, Hang Trong, Hanoi',
        displayText: 'Shop Address',
      }),
      new SettingItem({
        key: 'warehouseAddress',
        value: '99 Bac Cau, Long Bien, Hanoi',
        displayText: 'Warehouse Address',
      }),
    ]);
  }

  getSocialMediaSettingItems(): Observable<SettingItem[]> {
    return of([
      new SettingItem({
        key: 'facebook',
        value: 'https://facebook.com/phungmotorbike',
        displayText: 'Facebook',
      }),
      new SettingItem({
        key: 'zalo',
        value: '0904253491',
        displayText: 'Zalo',
      }),
      new SettingItem({
        key: 'whatsapp',
        value: '0904253491',
        displayText: 'Whatsapp',
      }),
    ]);
  }
}
