import { NgModule } from '@angular/core';
import { AmberCoreComponent } from './amber-core.component';
import { UrlWrapPipe } from './pipes/url-wrap.pipe';
import { IconComponent } from './components/icon/icon.component';
import { OverlayModule } from './components/overlay/overlay.module';


@NgModule({
  declarations: [
    AmberCoreComponent,
    UrlWrapPipe,
    IconComponent,
  ],
  imports: [
    OverlayModule,
  ],
  exports: [
    AmberCoreComponent,
    UrlWrapPipe,
    IconComponent,
    OverlayModule,
  ]
})
export class AmberCoreModule { }
