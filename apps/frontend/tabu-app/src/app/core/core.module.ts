import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TabuAppSidenavModule } from '@tabularius/ui';
import { SharedWebCoreModule } from '@tabularius/shared/web-core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core.state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { CustomSerializer } from '@tabularius/shared/services';

@NgModule({
  declarations: [],
  imports: [
    SharedWebCoreModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    StoreDevtoolsModule.instrument({
      name: 'Tabularius',
      logOnly: environment.production
    }),
    TabuAppSidenavModule
  ],
  exports: [TabuAppSidenavModule]
})
export class CoreModule {}
