import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EasterEggErrorComponent } from './easter-egg-error/easter-egg-error.component';
import { HalViewComponent } from './hal-view/hal-view.component';
import { DavidViewComponent } from './david-view/david-view.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    EasterEggErrorComponent,
    HalViewComponent,
    DavidViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: 'SERVER_URL', useValue: 'http://localhost:8080' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
