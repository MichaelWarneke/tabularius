import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { AccountPartialState } from './account.reducer';
import { accountQuery } from './account.selectors';
import { Login, Logout, Update } from './account.actions';
import { ICredentials, IUser } from '@tabularius/shared/models';
import { apiAuthQuery } from '@tabularius/core/store';

@Injectable()
export class AccountFacade {
  user$ = this.store.pipe(select(apiAuthQuery.getAuthUser));
  loading$ = this.store.pipe(select(accountQuery.getLoading));

  constructor(private store: Store<AccountPartialState>) {}

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
