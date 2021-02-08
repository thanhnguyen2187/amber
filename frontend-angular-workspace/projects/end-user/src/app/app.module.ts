import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { BodyAboutUsComponent } from './components/body-about-us/body-about-us.component';
import { BodyForSaleComponent } from './components/body-for-sale/body-for-sale.component';
import { BodyForRentComponent } from './components/body-for-rent/body-for-rent.component';
import { ServicesContentComponent } from './components/services-content/services-content.component';
import { BodyArticlesComponent } from './components/body-articles/body-articles.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TagSelectComponent } from './components/tag-select/tag-select.component';
import { TagSelectDropdownComponent } from './components/tag-select/tag-select-dropdown.component';
import { TagComponent } from './components/tag-select/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HeaderComponent,
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
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
