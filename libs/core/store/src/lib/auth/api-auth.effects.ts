import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  ApiAuthPartialState,
  APIAUTH_FEATURE_KEY,
  ApiAuthState
} from './api-auth.reducer';
import {
  ApiAuthGetUser,
  ApiAuthGetUserSuccess,
  ApiAuthUpdateUser,
  ApiAuthActionTypes,
  ApiAuthError,
  ApiAuthSuccess,
  ApiAuthChanged,
  ApiAuthLogout,
  ApiAuthLogin,
  ApiAuthRedirectLogin,
  ApiAuthSetRedirectUrl
} from './api-auth.actions';
import { IAuthService } from '@tabularius/database';
import { IUser } from '@tabularius/shared/models';
import {
  switchMap,
  catchError,
  tap,
  flatMap,
  withLatestFrom,
  map
} from 'rxjs/operators';
import { of, from, Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { apiAuthQuery } from './api-auth.selectors';

@Injectable()
export class ApiAuthEffects {
  @Effect() onAuthStateChange: Observable<
    ApiAuthChanged
  > = this.db.getAuthUser().pipe(
    switchMap((user: IUser | null) => {
      console.warn('EFFECT:::onAuthStateChange :', user);

      if (user) {
        this.router.navigate(['./dash']);
      }
      return of(new ApiAuthChanged(user));
    })
  );

  @Effect({ dispatch: false })
  authSuccess$ = this.actions$.pipe(
    ofType<ApiAuthChanged>(ApiAuthActionTypes.ApiAuthChanged),
    map(action => action.user),
    withLatestFrom(this.store.pipe(select(apiAuthQuery.getRedirectUrl))),
    tap(([user, b]) => {
      if (user && b) {
        this.router.navigate([b]);
        this.store.dispatch(new ApiAuthSetRedirectUrl(null));
      }
    })
  );
  @Effect() updateAuth = this.dataPersistence.pessimisticUpdate(
    ApiAuthActionTypes.ApiAuthUpdateUser,
    {
      // provides an action and the current state of the store
      run: (a: ApiAuthUpdateUser, state: ApiAuthPartialState) => {
        // update the backend first, and then dispatch an action that will
        // update the client side
        return this.db.updateAuthUserProfile(a.user).pipe(
          flatMap((res: boolean) => [
            new ApiAuthChanged(a.user),
            new ApiAuthSuccess('Update User')
          ]),
          catchError(err => throwError(err))
        );
      },

      onError: (a: ApiAuthUpdateUser, e: any) => {
        // we don't need to undo the changes on the client side.
        // we can dispatch an error, or simply log the error here and return `null`
        console.log('Error :', e);
        return new ApiAuthError(e);
      }
    }
  );

  @Effect() logout = this.dataPersistence.pessimisticUpdate(
    ApiAuthActionTypes.ApiAuthLogout,
    {
      // provides an action and the current state of the store
      run: (a: ApiAuthLogout, state: ApiAuthPartialState) => {
        // update the backend first, and then dispatch an action that will
        // update the client side
        return from(
          this.db.logout().then(
            (some: any) => {
              return new ApiAuthSuccess('Logout success');
            },
            error => {
              return new ApiAuthError('Auth User Update Error ' + error);
            }
          )
        );
      },

      onError: (a: ApiAuthLogout, e: any) => {
        // we don't need to undo the changes on the client side.
        // we can dispatch an error, or simply log the error here and return `null`
        console.log('Error :', e);
        return new ApiAuthError(e);
      }
    }
  );

  @Effect() login = this.dataPersistence.pessimisticUpdate(
    ApiAuthActionTypes.ApiAuthLogin,
    {
      // provides an action and the current state of the store
      run: (a: ApiAuthLogin, state: ApiAuthPartialState) => {
        // update the backend first, and then dispatch an action that will
        // update the client side
        return from(
          this.db.loginEmailPassword(a.credentials).then(
            (some: any) => {
              return new ApiAuthSuccess('Login success');
            },
            error => {
              return new ApiAuthError('Auth User Update Error ' + error);
            }
          )
        );
      },

      onError: (a: ApiAuthLogin, e: any) => {
        // we don't need to undo the changes on the client side.
        // we can dispatch an error, or simply log the error here and return `null`
        console.log('Error :', e);
        return new ApiAuthError(e);
      }
    }
  );

  @Effect({ dispatch: false })
  redirectLogin$ = this.actions$.pipe(
    ofType(
      ApiAuthActionTypes.ApiAuthRedirectLogin,
      ApiAuthActionTypes.ApiAuthLogout
    ),
    tap(authed => this.router.navigate(['./account/login']))
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ApiAuthPartialState>,
    private db: IAuthService,
    private router: Router,
    private store: Store<ApiAuthState>
  ) {}
}
