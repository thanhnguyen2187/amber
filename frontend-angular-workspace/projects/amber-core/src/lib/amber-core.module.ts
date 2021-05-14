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
import { CommonSelectDirective } from './directives/common-select.directive';
import { CommonInputTextDirective } from './directives/common-input-text.directive';
import { CommonInputNumberDirective } from './directives/common-input-number.directive';


@NgModule({
  declarations: [
    AmberCoreComponent,
    UrlWrapPipe,
    IconComponent,
    ButtonComponent,
    ModalComponent,
    DynamicFormComponent,
    CommonSelectDirective,
    CommonInputTextDirective,
    CommonInputNumberDirective,
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
    CommonSelectDirective,
    CommonInputTextDirective,
    CommonInputNumberDirective,
  ]
})
export class AmberCoreModule { }
