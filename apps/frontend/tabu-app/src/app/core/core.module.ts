import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialCoreModule } from '@tabularius/shared-core';
import { AppRoutingModule } from './app-routing.module';
import { TabuAppSidenavModule } from '@tabularius/ui';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MaterialCoreModule,
    AppRoutingModule,
    TabuAppSidenavModule
  ],
  exports: [TabuAppSidenavModule]
})
export class CoreModule {}
