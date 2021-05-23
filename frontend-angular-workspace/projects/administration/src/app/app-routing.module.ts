import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { BodyContractComponent } from './components/body-contract/body-contract.component';
import { BodySettingsComponent } from './components/body-settings/body-settings.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    data: {
    },
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'content',
        data: {
          sidebarActivatedKeys: [
            'dashboard',
            'content',
            'list',
          ],
        },
        children: [
          {
            path: '',
            component: UnderConstructionComponent,
          },
          {
            path: 'list',
            component: UnderConstructionComponent,
          },
          {
            path: 'create',
            component: UnderConstructionComponent,
          },
        ],
      },
      {
        path: 'contract',
        loadChildren:
          () => import('./components/body-contract/body-contract.module').then(
            module => module.BodyContractModule,
          )
        ,
      },
      {
        path: 'customer',
        component: UnderConstructionComponent,
      },
      {
        path: 'bike',
        component: UnderConstructionComponent,
      },
      {
        path: 'statistics',
        component: UnderConstructionComponent,
      },
      {
        path: 'settings',
        loadChildren:
          () => import('./components/body-settings/body-settings.module').then(
            module => module.BodySettingsModule
          )
        ,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
