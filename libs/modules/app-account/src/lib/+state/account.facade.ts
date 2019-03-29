import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { AccountPartialState } from './account.reducer';
import { accountQuery } from './account.selectors';
import { Login, Logout, Update } from './account.actions';
import { ICredentials, IUser } from '@tabularius/shared/models';
import { apiAuthQuery, ApiAuthFacade } from '@tabularius/core/store';

@Injectable()
export class AccountFacade {
  user$ = this.apiStore.user$; // .store.pipe(select(apiAuthQuery.getAuthUser));
  error$ = this.apiStore.error$; // .store.pipe(select(apiAuthQuery.getAuthUser));
  loading$ = this.store.pipe(select(accountQuery.getLoading));

  constructor(private store: Store<{}>, private apiStore: ApiAuthFacade) {}

  login(credentials: ICredentials) {
    this.store.dispatch(new Login(credentials));
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  update(user: IUser) {
    this.store.dispatch(new Update(user));
  }
}
