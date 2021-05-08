import { NgModule } from '@angular/core';
import { AmberCoreComponent } from './amber-core.component';
import { UrlWrapPipe } from './pipes/url-wrap.pipe';
import { IconComponent } from './components/icon/icon.component';
import { OverlayModule } from './components/overlay/overlay.module';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AmberCoreComponent,
    UrlWrapPipe,
    IconComponent,
    ButtonComponent,
    ModalComponent,
    DynamicFormComponent,
  ],
  imports: [
    OverlayModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    AmberCoreComponent,
    UrlWrapPipe,
    IconComponent,
    OverlayModule,
    ButtonComponent,
    ModalComponent,
    DynamicFormComponent,
  ]
})
export class AmberCoreModule { }
