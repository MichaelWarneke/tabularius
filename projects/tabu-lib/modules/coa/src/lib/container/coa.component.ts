import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '@tabu-lib/models';
import * as fromAccounts from '../reducers/account.reducer';
import * as accountActions from '../actions/account.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'coa-container',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoaComponent implements OnInit {

  accounts$: Observable<Account[]>;
  accountsTotal$: Observable<number>;
  selectedAccount$: Observable<Account | null | undefined>;
  selectedAccountId$: Observable<string | null>;

  constructor(private store: Store<fromAccounts.AccountState>) {
    this.accounts$ = store.pipe(select(fromAccounts.selectAll));
    this.accountsTotal$ = store.pipe(select(fromAccounts.selectTotal));
    this.selectedAccount$ = store.pipe(select(fromAccounts.getSelectedAccount));
    this.selectedAccountId$ = store.pipe(select(fromAccounts.getSelectedAccountId));
  }

  onSaveAccount(account: Account) {
    this.store.dispatch(accountActions.upsertAccount({ account }));
  }

  onSelectAccount(account: Account) {
    this.store.dispatch(accountActions.selectAccount({ accountId: account.id }));
  }

  onNewAccount() {
    this.store.dispatch(accountActions.selectAccount({ accountId: null }));
  }

  onDeleteAccount(account: Account) {
    this.store.dispatch(accountActions.deleteAccount({ id: account.id }));
  }

  ngOnInit() {
    //this.store.dispatch(accountActions.loadAccounts());
  }


}
