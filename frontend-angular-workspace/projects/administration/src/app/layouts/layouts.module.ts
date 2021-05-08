import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ContentLayoutComponent,
    DashboardLayoutComponent,
    LayoutLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SidebarModule,
  ],
  exports: [
    ContentLayoutComponent,
    DashboardLayoutComponent,
    LayoutLoginComponent,
  ]
})
export class LayoutsModule { }
