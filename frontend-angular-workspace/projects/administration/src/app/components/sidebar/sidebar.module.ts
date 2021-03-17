import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
// import { SidebarItemService } from './sidebar-item.service';
import { AmberCoreModule } from 'amber-core';
import { SidebarItemComponent } from './sidebar-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    // SidebarItemService,
  ],
  imports: [
    CommonModule,
    AmberCoreModule,
  ],
  exports: [
    SidebarComponent,
  ],
  // providers: [
  //   SidebarItemService,
  // ],
})
export class SidebarModule { }
