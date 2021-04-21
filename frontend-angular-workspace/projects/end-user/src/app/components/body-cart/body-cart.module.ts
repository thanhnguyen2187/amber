import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyCartComponent } from './body-cart.component';
import { AmberCoreModule } from 'amber-core';
import { Routes } from '@angular/router';
import { BodyCartRoutingModule } from './body-cart-routing.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { AccordionModule } from '../accordion/accordion.module';
import { TableModule } from '../table/table.module';

const routes: Routes = [
  {

  },
];

@NgModule({
  declarations: [
    BodyCartComponent,
  ],
    imports: [
        CommonModule,
        AmberCoreModule,
        BodyCartRoutingModule,
        LayoutsModule,
        AccordionModule,
        TableModule,
    ],
})
export class BodyCartModule { }
