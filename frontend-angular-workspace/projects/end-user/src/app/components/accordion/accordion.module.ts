import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AmberCoreModule } from 'amber-core';


@NgModule({
  declarations: [
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
  ],
  exports: [
    AccordionComponent,
  ]
})
export class AccordionModule { }
