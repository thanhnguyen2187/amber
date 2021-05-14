import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyContractRoutingModule } from './body-contract-routing.module';
import { BodyContractComponent } from './body-contract.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { TableModule } from '../table/table.module';
import { AmberCoreModule } from 'amber-core';
import { ContractTableComponent } from './components/contract-table/contract-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContractDetailsComponent } from './components/contract-details/contract-details.component';
import { VehicleUsageDetailsComponent } from './components/vehicle-usage-details/vehicle-usage-details.component';
import { RangePickerModule } from '../range-picker/range-picker.module';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';


@NgModule({
  declarations: [
    BodyContractComponent,
    ContractTableComponent,
    ContractDetailsComponent,
    VehicleUsageDetailsComponent,
    PaymentDetailsComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    TableModule,
    AmberCoreModule,
    BodyContractRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RangePickerModule,
  ],
})
export class BodyContractModule { }
