import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyAboutUsComponent } from './components/body-about-us/body-about-us.component';
import { BodyForRentComponent } from './components/body-for-rent/body-for-rent.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: '',
        component: BodyHomeComponent,
        data: {
          breadcrumb: '',
        },
      },
      {
        path: 'about-us',
        component: BodyAboutUsComponent,
        data: {
          breadcrumb: 'About Us',
        },
      },
      {
        path: 'for-rent',
        component: BodyForRentComponent,
        data: {
          breadcrumb: 'For Rent',
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
