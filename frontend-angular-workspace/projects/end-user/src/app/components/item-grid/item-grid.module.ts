import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardRowComponent } from './item-card-row.component';
import { AmberCoreModule } from 'amber-core';
import { ItemCardComponent } from './item-card.component';
import { ItemGridComponent } from './item-grid.component';
import { ItemMasterComponent } from '../item-master/item-master.component';
import { FilterComponent } from '../filter/filter.component';
import { PaginationBarComponent } from '../pagination-bar/pagination-bar.component';
import { AccordionModule } from '../accordion/accordion.module';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { NotificationModule } from '../notification/notification.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CheckboxComponent,
    ItemGridComponent,
    ItemCardComponent,
    ItemCardRowComponent,
    ItemMasterComponent,
    PaginationBarComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
    AccordionModule,
    NotificationModule,
    RouterModule,
  ],
  exports: [
    // ItemGridComponent,
    // ItemCardComponent,
    // ItemCardRowComponent,
    // PaginationBarComponent,
    // FilterComponent,
    // CheckboxComponent,
    // AccordionComponent,
    ItemMasterComponent,
    ItemCardRowComponent,
  ]
})
export class ItemGridModule { }
