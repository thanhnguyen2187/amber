import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyContractComponent } from './body-contract.component';

const routes: Routes = [
  {
    path: '',
    component: BodyContractComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyContractRoutingModule { }
