import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AmberCoreModule } from 'amber-core';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
