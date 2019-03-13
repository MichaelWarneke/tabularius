import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { TabuAppSidenavModule } from '@tabularius/ui';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabuAppSidenavModule
  ],
  exports: [TabuAppSidenavModule]
})
export class CoreModule {}
