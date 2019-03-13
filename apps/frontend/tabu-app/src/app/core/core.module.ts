import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { TabuAppSidenavModule } from '@tabularius/ui';
import { SharedWebCoreModule } from '@tabularius/shared/web-core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core.state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    SharedWebCoreModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    TabuAppSidenavModule
  ],
  exports: [TabuAppSidenavModule]
})
export class CoreModule {}
