import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationLayoutComponent } from './layouts/administration-layout/administration-layout.component';
import { EndUserLayoutComponent } from './layouts/end-user-layout/end-user-layout.component';
import { AboutUsComponent } from './end-user/about-us/about-us.component';
import { HomeComponent } from './end-user/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministrationLayoutComponent,
    EndUserLayoutComponent,
    AboutUsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
