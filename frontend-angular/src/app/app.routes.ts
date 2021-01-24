import { Routes } from '@angular/router';

import { AdministrationLayoutComponent } from './layouts/administration-layout/administration-layout.component';
import { EndUserLayoutComponent } from './layouts/end-user-layout/end-user-layout.component';
import { AboutUsComponent } from './end-user/about-us/about-us.component';
import { HomeComponent } from './end-user/home/home.component';


const enum endUserReferences {
  Home = '',
  AboutUs = 'about-us',
  ForSale = 'for-sale',
  ForRent = 'for-rent',
  Services = 'services',
  ContactUs = 'contact-us',
}


const endUserRoutes: Routes = [
  {
    path: endUserReferences.Home,
    component: HomeComponent,
  },
  {
    path: endUserReferences.AboutUs,
    component: AboutUsComponent
  },
];
const administrationRoutes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: EndUserLayoutComponent,
    children: endUserRoutes,
    // pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdministrationLayoutComponent,
    children: administrationRoutes,
  },
];

export {
  routes,
  endUserReferences,
};
