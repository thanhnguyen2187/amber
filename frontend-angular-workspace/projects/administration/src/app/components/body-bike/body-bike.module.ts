import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyBikeRoutingModule } from './body-bike-routing.module';
import { BikeTableComponent } from './components/bike-table/bike-table.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { TableModule } from '../table/table.module';
import { AmberCoreModule } from 'amber-core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikeDetailsComponent } from './components/bike-details/bike-details.component';


@NgModule({
  declarations: [
    BikeTableComponent,
    BikeDetailsComponent,
  ],
  imports: [
    CommonModule,
    BodyBikeRoutingModule,
    LayoutsModule,
    TableModule,
    AmberCoreModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BodyBikeModule { }
