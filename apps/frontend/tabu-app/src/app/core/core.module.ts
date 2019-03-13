import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TabuAppSidenavModule } from '@tabularius/ui';
import { WebCoreModule } from '@tabularius/shared-libs';

@NgModule({
  declarations: [],
  imports: [WebCoreModule, AppRoutingModule, TabuAppSidenavModule],
  exports: [TabuAppSidenavModule]
})
export class CoreModule {}
