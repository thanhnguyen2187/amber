import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodySettingsComponent } from './body-settings.component';
import { CardModule } from '../card/card.module';
import { AmberCoreModule } from 'amber-core';
import { BodySettingsRoutingModule } from './body-settings-routing.module';
import { FormsModule } from '@angular/forms';
import { SettingItemsComponent } from './setting-items.component';


@NgModule({
  declarations: [
    BodySettingsComponent,
    SettingItemsComponent,
  ],
  imports: [
    AmberCoreModule,
    CommonModule,
    BodySettingsRoutingModule,
    CardModule,
    FormsModule,
  ],
  // exports: [
  //   BodySettingsComponent,
  // ]
})
export class BodySettingsModule { }
