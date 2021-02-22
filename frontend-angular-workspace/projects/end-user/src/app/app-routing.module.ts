import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyAboutUsComponent } from './components/body-about-us/body-about-us.component';
import { BodyForRentComponent } from './components/body-for-rent/body-for-rent.component';
import { BodyServicesComponent } from './components/body-services/body-services.component';
import { BodyForSaleComponent } from './components/body-for-sale/body-for-sale.component';
import { BodyArticlesComponent } from './components/body-articles/body-articles.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
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
        path: 'for-sale',
        component: BodyForSaleComponent,
        data: {
          breadcrumb: 'For Sale',
        },
      },
      {
        path: 'for-rent',
        component: BodyForRentComponent,
        data: {
          breadcrumb: 'For Rent',
        },
      },
      {
        path: 'services',
        component: BodyServicesComponent,
        data: {
          breadcrumb: 'Services',
        },
      },
      {
        path: 'articles',
        component: BodyArticlesComponent,
        data: {
          breadcrumb: 'Articles',
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
