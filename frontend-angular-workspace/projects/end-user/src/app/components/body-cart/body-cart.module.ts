import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyCartComponent } from './body-cart.component';
import { AmberCoreModule } from 'amber-core';
import { Routes } from '@angular/router';
import { BodyCartRoutingModule } from './body-cart-routing.module';
import { LayoutsModule } from '../../layouts/layouts.module';
import { AccordionModule } from '../accordion/accordion.module';
// import { TableModule } from '../table/table.module';
import { TableV2Module } from '../table-v2/table-v2.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    AmberCoreModule,
    BodyCartRoutingModule,
    LayoutsModule,
    AccordionModule,
    // TableModule,
    TableV2Module,
  ],
})
export class BodyCartModule { }
