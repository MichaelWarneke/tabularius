import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers, ROOT_REDUCERS } from './reducers';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: 'Tabularius App' }),
    EffectsModule.forRoot([AppEffects])
    //EntityDataModule.forRoot(entityConfig)

  ]
})
export class TabuStoreModule { }
