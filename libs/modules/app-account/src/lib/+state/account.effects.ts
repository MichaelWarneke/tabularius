import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { AccountPartialState } from './account.reducer';
import { AccountActionTypes, Login, Logout } from './account.actions';
import { map, concatMap, switchMap } from 'rxjs/operators';
import { ApiAuthLogin, ApiAuthLogout } from '@tabularius/core/store';
import { ICredentials } from '@tabularius/shared/models';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AccountActionTypes.Login),
    map(action => action.credentials),
    map((credentials: ICredentials) => {
      return new ApiAuthLogin(credentials);
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<Logout>(AccountActionTypes.Logout),
    map(() => {
      return new ApiAuthLogout();
    })
  );
}
