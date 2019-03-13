import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TabuAppSidenavModule } from '@tabularius/ui';
import { SharedWebCoreModule } from '@tabularius/shared/web-core';

@NgModule({
  declarations: [],
  imports: [SharedWebCoreModule, AppRoutingModule, TabuAppSidenavModule],
  exports: [TabuAppSidenavModule]
})
export class CoreModule {}
