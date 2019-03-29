import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { AccountPartialState } from './account.reducer';
import {
  AccountActionTypes,
  Login,
  Logout,
  Update,
  AccountActions
} from './account.actions';
import { map, concatMap, switchMap } from 'rxjs/operators';
import {
  ApiAuthLogin,
  ApiAuthLogout,
  ApiAuthUpdateUser
} from '@tabularius/core/store';
import { ICredentials, IUser } from '@tabularius/shared/models';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions<AccountActions>) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AccountActionTypes.Login),
    map(action => action.credentials),
    map((credentials: ICredentials) => {
      return new ApiAuthLogin(credentials);
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AccountActionTypes.Logout),
    map(() => {
      return new ApiAuthLogout();
    })
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(AccountActionTypes.Update),
    map(action => action.user),
    map((user: IUser) => {
      return new ApiAuthUpdateUser(user);
    })
  );
}
