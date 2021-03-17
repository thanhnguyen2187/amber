import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodySettingsComponent } from './body-settings.component';
import { CardModule } from '../card/card.module';
import { AmberCoreModule } from 'amber-core';
import { BodySettingsRoutingModule } from './body-settings-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BodySettingsComponent,
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
