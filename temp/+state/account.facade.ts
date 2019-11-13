import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { AccountPartialState } from './account.reducer';
import { accountQuery } from './account.selectors';
import { LoadAccount } from './account.actions';

@Injectable()
export class AccountFacade {
  loaded$ = this.store.pipe(select(accountQuery.getLoaded));
  allAccount$ = this.store.pipe(select(accountQuery.getAllAccount));
  selectedAccount$ = this.store.pipe(select(accountQuery.getSelectedAccount));

  constructor(private store: Store<{}>) {}

  loadAll() {
    this.store.dispatch(new LoadAccount());
  }
}
