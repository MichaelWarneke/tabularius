import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './core.state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { environment } from '../../environments/environment';
import { CustomSerializer } from '@tabularius/shared/services';
import { CoreStoreModule } from '@tabularius/core/store';
import { NxModule } from '@nrwl/angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Tabularius'
      //      logOnly: environment.production
    }),

    CoreStoreModule
  ],
  exports: [BrowserModule]
})
export class SharedWebCoreModule {}
