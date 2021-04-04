import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutBodyWithCoverComponent } from './layouts/layout-body-with-cover/layout-body-with-cover.component';

// import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyAboutUsComponent } from './components/body-about-us/body-about-us.component';
import { BodyForSaleComponent } from './components/body-for-sale/body-for-sale.component';
import { BodyForRentComponent } from './components/body-for-rent/body-for-rent.component';
import { BodyArticlesComponent } from './components/body-articles/body-articles.component';

import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { ServicesContentComponent } from './components/services-content/services-content.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TagSelectComponent } from './components/tag-select/tag-select.component';
import { TagSelectDropdownComponent } from './components/tag-select/tag-select-dropdown.component';
import { TagComponent } from './components/tag-select/tag.component';
import { TagSelectDropdownItemComponent } from './components/tag-select/tag-select-dropdown-item.component';
import { TagSelectV2Component } from './components/tag-select-v2/tag-select-v2.component';
import { ItemGridComponent } from './components/item-grid/item-grid.component';
import { PaginationBarComponent } from './components/pagination-bar/pagination-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { BodyServicesComponent } from './components/body-services/body-services.component';
import { StaticConfigurationProvider } from './services/static-configuration.provider';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { AmberCoreModule } from 'amber-core';
import { AccordionModule } from './components/accordion/accordion.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutDefaultComponent,

    // HeaderComponent,
    FooterComponent,
    BodyHomeComponent,
    HomeGalleryComponent,
    BodyAboutUsComponent,
    BodyForSaleComponent,
    BodyForRentComponent,
    ServicesContentComponent,
    BodyArticlesComponent,
    LightboxComponent,
    BreadcrumbComponent,
    TagSelectComponent,
    TagSelectDropdownComponent,
    TagComponent,
    TagSelectDropdownItemComponent,
    TagSelectV2Component,
    ItemGridComponent,
    PaginationBarComponent,
    FilterComponent,
    CheckboxComponent,
    BodyServicesComponent,
    LayoutBodyWithCoverComponent,
    LoginLayoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AmberCoreModule,

    HeaderModule,
    AccordionModule,
  ],
  providers: [
    StaticConfigurationProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
