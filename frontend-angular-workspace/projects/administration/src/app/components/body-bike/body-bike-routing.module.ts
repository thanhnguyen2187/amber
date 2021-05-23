import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeTableComponent } from './components/bike-table/bike-table.component';

const routes: Routes = [
  {
    path: '',
    component: BikeTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyBikeRoutingModule { }
