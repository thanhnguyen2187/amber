import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBoxComponent } from './notification-box.component';
import { AmberCoreModule } from 'amber-core';



@NgModule({
  declarations: [
    NotificationBoxComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
  ],
  exports: [
    NotificationBoxComponent,
  ],
})
export class NotificationModule { }
