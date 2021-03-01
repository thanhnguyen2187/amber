import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    data: {
      breadcrumb: 'Home'
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
