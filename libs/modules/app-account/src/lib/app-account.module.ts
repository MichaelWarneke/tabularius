import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppAccountContainerComponent } from './app-account-container/app-account-container.component';
import {
  AccountUserModule,
  ProgressBarModule,
  LoginFormModule
} from '@tabularius/ui';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  ACCOUNT_FEATURE_KEY,
  initialState as accountInitialState,
  accountReducer
} from './+state/account.reducer';
import { AccountEffects } from './+state/account.effects';
import { AccountFacade } from './+state/account.facade';
import { LoginContainerComponent } from './login-container/login-container.component';
import {
  IsAuthenticatedGuard,
  LogoutResolverService
} from '@tabularius/core/router-guards';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AppAccountContainerComponent,
        canActivate: [IsAuthenticatedGuard]
      },
      { path: 'login', pathMatch: 'full', component: LoginContainerComponent },
      {
        path: 'logout',
        pathMatch: 'full',
        component: LoginContainerComponent,
        resolve: { val: LogoutResolverService }
      }
    ]),
    AccountUserModule,
    LoginFormModule,
    StoreModule.forFeature(ACCOUNT_FEATURE_KEY, accountReducer, {
      initialState: accountInitialState
    }),
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [AppAccountContainerComponent, LoginContainerComponent],
  providers: [AccountFacade]
})
export class AppAccountModule {}
