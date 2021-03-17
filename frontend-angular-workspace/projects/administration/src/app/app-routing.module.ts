import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { BodyContractComponent } from './components/body-contract/body-contract.component';
import { BodySettingsComponent } from './components/body-settings/body-settings.component';

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
        // component: BodyContentComponent,
        data: {
          sidebarActivatedKeys: ['dashboard', 'content', 'list', ],
        },
        children: [
          {
            path: '',
            component: BodyContentComponent,
          },
          {
            path: 'list',
            component: BodyContentComponent,
          },
          {
            path: 'create',
            component: BodyContractComponent,
          },
        ],
      },
      {
        path: 'contract',
        component: BodyContractComponent,
      },
      {
        path: 'customer',
        component: BodyContractComponent,
      },
      {
        path: 'bike',
        component: BodyContractComponent,
      },
      {
        path: 'statistics',
        component: BodyContractComponent,
      },
      {
        path: 'settings',
        // component: BodySettingsComponent,
        loadChildren: () =>
          import('./components/body-settings/body-settings.module').then(
            module => module.BodySettingsModule
          )
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
