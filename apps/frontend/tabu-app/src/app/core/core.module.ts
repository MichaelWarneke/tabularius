import { NgModule, Optional, SkipSelf } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DatabaseModule } from '@tabularius/database';
import { TabuAppSidenavModule } from '@tabularius/ui';
import { SharedWebCoreModule } from '@tabularius/shared/web-core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
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
    DatabaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Tabularius',
      logOnly: environment.production
    }),
    TabuAppSidenavModule
  ],
  exports: [TabuAppSidenavModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
