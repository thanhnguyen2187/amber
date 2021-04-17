import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBodyWithCoverComponent } from './layout-body-with-cover/layout-body-with-cover.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { AmberCoreModule } from 'amber-core';
import { BreadcrumbModule } from '../components/breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutBodyWithCoverComponent,
    LayoutDefaultComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
    HeaderModule,
    FooterModule,
    BreadcrumbModule,
    RouterModule,
  ],
  exports: [
    LayoutBodyWithCoverComponent,
    LayoutDefaultComponent,
  ]
})
export class LayoutsModule { }
