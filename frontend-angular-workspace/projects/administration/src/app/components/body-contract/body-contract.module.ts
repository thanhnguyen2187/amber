import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyContractRoutingModule } from './body-contract-routing.module';
import { BodyContractComponent } from './body-contract.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { TableModule } from '../table/table.module';
import { AmberCoreModule } from 'amber-core';
import { ContractTableComponent } from './components/contract-table/contract-table.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BodyContractComponent,
    ContractTableComponent,
  ],
    imports: [
        CommonModule,
        LayoutsModule,
        TableModule,
        AmberCoreModule,
        BodyContractRoutingModule,
        ReactiveFormsModule,
    ],
})
export class BodyContractModule { }
