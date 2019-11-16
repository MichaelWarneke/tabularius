import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AccountActions from '../actions/account.actions';
import { Action } from '@ngrx/store';
import { coaData } from 'projects/tabu-lib/data';
import { Account } from '@tabu-lib/models';

@Injectable()
export class AccountEffects/* implements OnInitEffects */ {


  loadAccounts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.loadAccounts),
      tap(() => console.log('MATCH')),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of(coaData).pipe(
          map(data => AccountActions.loadAccountsSuccess({ accounts: <Account[]>data })),
          catchError(error => of(AccountActions.loadAccountsFailure({ error }))))
      )
    );

  });
  /*
    ngrxOnInitEffects(): Action {
      console.log('Init');
      return { type: '[Account/API] Load Accounts' };
    }
  */
  constructor(private actions$: Actions) { }

}
