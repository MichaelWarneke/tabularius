import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { AccountPartialState } from './account.reducer';
import {
  LoadAccount,
  AccountLoaded,
  AccountLoadError,
  AccountActionTypes
} from './account.actions';

@Injectable()
export class AccountEffects {
  @Effect() loadAccount$ = this.dataPersistence.fetch(
    AccountActionTypes.LoadAccount,
    {
      run: (action: LoadAccount, state: AccountPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new AccountLoaded([]);
      },

      onError: (action: LoadAccount, error) => {
        console.error('Error', error);
        return new AccountLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AccountPartialState>
  ) {}
}
