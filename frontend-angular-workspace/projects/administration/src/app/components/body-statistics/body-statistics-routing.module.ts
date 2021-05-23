import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyStatisticsComponent } from './components/body-statistics/body-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: BodyStatisticsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyStatisticsRoutingModule { }
