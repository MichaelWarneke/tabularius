import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  APIAUTH_FEATURE_KEY,
  initialState as apiAuthInitialState,
  apiAuthReducer
} from './auth/api-auth.reducer';
import { ApiAuthEffects } from './auth/api-auth.effects';
import { ApiAuthFacade } from './auth/api-auth.facade';
import { DatabaseModule } from '@tabularius/database';

@NgModule({
  imports: [
    DatabaseModule,
    StoreModule.forFeature(APIAUTH_FEATURE_KEY, apiAuthReducer, {
      initialState: apiAuthInitialState
    }),
    EffectsModule.forFeature([ApiAuthEffects])
  ],
  providers: [ApiAuthFacade]
})
export class CoreStoreModule {}
