import { NgModule } from '@angular/core';
import { AmberCoreComponent } from './amber-core.component';
import { UrlWrapPipe } from './pipes/url-wrap.pipe';
import { IconComponent } from './components/icon/icon.component';


@NgModule({
  declarations: [
    AmberCoreComponent,
    UrlWrapPipe,
    IconComponent,
  ],
  imports: [
  ],
  exports: [
    AmberCoreComponent,
    UrlWrapPipe,
    IconComponent,
  ]
})
export class AmberCoreModule { }
