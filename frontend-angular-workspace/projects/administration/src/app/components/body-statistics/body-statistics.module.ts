import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyStatisticsRoutingModule } from './body-statistics-routing.module';
import { BodyStatisticsComponent } from './components/body-statistics/body-statistics.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartBoxComponent } from './components/chart-box/chart-box.component';
import { AmberCoreModule } from 'amber-core';
import { RangePickerModule } from '../range-picker/range-picker.module';
import { ChartContractsComponent } from './components/chart-contracts/chart-contracts.component';
import { ChartBikeTypesComponent } from './components/chart-bike-types/chart-bike-types.component';
import { ChartRevenueComponent } from './components/chart-revenue/chart-revenue.component';


@NgModule({
  declarations: [
    BodyStatisticsComponent,
    ChartBoxComponent,
    ChartContractsComponent,
    ChartBikeTypesComponent,
    ChartRevenueComponent,
  ],
    imports: [
        CommonModule,
        BodyStatisticsRoutingModule,
        LayoutsModule,
        AmberCoreModule,
        NgxChartsModule,
        RangePickerModule,
    ]
})
export class BodyStatisticsModule { }
