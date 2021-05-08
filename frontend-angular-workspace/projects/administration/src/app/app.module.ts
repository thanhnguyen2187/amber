import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmberCoreModule } from 'amber-core';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { BodySettingsModule } from './components/body-settings/body-settings.module';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { TableModule } from './components/table/table.module';
import { LayoutsModule } from './layouts/layouts.module';
import { StaticConfigurationProvider } from './services/static-configuration.provider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BodyContentComponent,
    UnderConstructionComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Core
    AmberCoreModule,
    // Internal
    LayoutsModule,
    BodySettingsModule,
    TableModule,
  ],
  providers: [
    StaticConfigurationProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
