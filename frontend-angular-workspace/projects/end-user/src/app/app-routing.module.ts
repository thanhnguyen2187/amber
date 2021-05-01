import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyAboutUsComponent } from './components/body-about-us/body-about-us.component';
import { BodyBikesComponent } from './components/body-bikes/body-bikes.component';
import { BodyServicesComponent } from './components/body-services/body-services.component';
import { BodyForSaleComponent } from './components/body-for-sale/body-for-sale.component';
import { BodyArticlesComponent } from './components/body-articles/body-articles.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { BodyBikeDetailsComponent } from './components/body-bike-details/body-bike-details.component';

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
        path: 'contact-us',
        component: UnderConstructionComponent,
        data: {
          breadcrumb: 'Contact Us',
        },
      },
      {
        path: 'about-us',
        component: UnderConstructionComponent,
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
        path: 'bikes',
        component: BodyBikesComponent,
        data: {
          breadcrumb: 'Bikes',
        },
      },
      {
        path: 'bike-details/:id',
        component: BodyBikeDetailsComponent,
        data: {
          breadcrumb: 'Bike Details',
        },
      },
      {
        path: 'services',
        component: UnderConstructionComponent,
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
      {
        path: 'cart',
        loadChildren: () =>
          import('./components/body-cart/body-cart.module')
            .then(
              module => module.BodyCartModule,
            )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
