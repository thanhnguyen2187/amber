import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyStatisticsRoutingModule } from './body-statistics-routing.module';
import { BodyStatisticsComponent } from './components/body-statistics/body-statistics.component';
import { LayoutsModule } from '../../layouts/layouts.module';


@NgModule({
  declarations: [
    BodyStatisticsComponent,
  ],
  imports: [
    CommonModule,
    BodyStatisticsRoutingModule,
    LayoutsModule,
  ]
})
export class BodyStatisticsModule { }
