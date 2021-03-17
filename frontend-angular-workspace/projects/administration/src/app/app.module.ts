import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AmberCoreModule } from 'amber-core';
import { BodyContentComponent } from './components/body-content/body-content.component';
import { BodyContractComponent } from './components/body-contract/body-contract.component';
// import { SidebarItemComponent } from './components/sidebar/sidebar-item.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
// import { BodySettingsComponent } from './components/body-settings/body-settings.component';
// import { CardComponent } from './components/card/card.component';
import { BodySettingsModule } from './components/body-settings/body-settings.module';
import { CardModule } from './components/card/card.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutLoginComponent,
    DashboardLayoutComponent,
    // SidebarComponent,
    BodyContentComponent,
    BodyContractComponent,
    // BodySettingsComponent,
    // CardComponent,
    // SidebarItemComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // Core
    AmberCoreModule,
    // Internal
    SidebarModule,
    BodySettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
