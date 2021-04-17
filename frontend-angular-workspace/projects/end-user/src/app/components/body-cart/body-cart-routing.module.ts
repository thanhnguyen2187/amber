import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyCartComponent } from './body-cart.component';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Cart',
    },
    component: BodyCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyCartRoutingModule { }
