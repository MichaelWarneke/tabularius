import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ApiAuthPartialState, APIAUTH_FEATURE_KEY } from './api-auth.reducer';
import {
  ApiAuthGetUser,
  ApiAuthGetUserSuccess,
  ApiAuthUpdateUser,
  ApiAuthActionTypes,
  ApiAuthError,
  ApiAuthSuccess,
  ApiAuthChanged
} from './api-auth.actions';
import { IAuthService } from '@tabularius/database';
import { defineBase } from '@angular/core/src/render3';
import { IUser } from '@tabularius/shared/models';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { of, from, Observable } from 'rxjs';

import * as firebase from 'firebase/app';

@Injectable()
export class ApiAuthEffects {
  @Effect() onAuthStateChange: Observable<
    ApiAuthChanged
  > = this.db.getAuthUser().pipe(
    switchMap((user: IUser | null) => {
      console.warn('EFFECT:::onAuthStateChange :', user);
      return of(new ApiAuthChanged(user));
    })
  );

  @Effect() updateTodo = this.dataPersistence.pessimisticUpdate(
    ApiAuthActionTypes.ApiAuthUpdateUser,
    {
      // provides an action and the current state of the store
      run: (a: ApiAuthUpdateUser, state: ApiAuthPartialState) => {
        // update the backend first, and then dispatch an action that will
        // update the client side
        return from(
          this.db.updateAuthUserProfile(a.user).then(
            (some: any) => {
              return new ApiAuthChanged(a.user);
            },
            error => {
              return new ApiAuthError('Auth User Update Error ' + error);
            }
          )
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

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ApiAuthPartialState>,
    private db: IAuthService
  ) {}
}
