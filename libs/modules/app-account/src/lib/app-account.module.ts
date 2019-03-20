import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppAccountContainerComponent } from './app-account-container/app-account-container.component';
import { AccountUserModule } from '@tabularius/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  ACCOUNT_FEATURE_KEY,
  initialState as accountInitialState,
  accountReducer
} from './+state/account.reducer';
import { AccountEffects } from './+state/account.effects';
import { AccountFacade } from './+state/account.facade';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AppAccountContainerComponent }
    ]),
    AccountUserModule,
    StoreModule.forFeature(ACCOUNT_FEATURE_KEY, accountReducer, {
      initialState: accountInitialState
    }),
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [AppAccountContainerComponent],
  providers: [AccountFacade]
})
export class AppAccountModule {}
