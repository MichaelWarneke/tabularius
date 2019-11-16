import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as AccountActions from '../actions/account.actions';
import { Account } from '@tabu-lib/models';
import { coaData } from 'projects/tabu-lib/data';

export const accountsFeatureKey = 'accounts';

export interface AccountState extends EntityState<Account> {
  // additional entities state properties
  selectedAccountId: string | null;
}

export function selectAccountId(a: Account): string {
  //In this case this would be optional since primary key is id
  return a.id;
}

export function sortByName(a: Account, b: Account): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>({
  selectId: selectAccountId,
  sortComparer: sortByName,
});


export const initialState: AccountState = adapter.getInitialState({
  // additional entity state properties
  selectedAccountId: null
});

const accountReducer = createReducer(
  initialState,
  on(AccountActions.addAccount,
    (state, action) => adapter.addOne(action.account, state)
  ),
  on(AccountActions.upsertAccount,
    (state, action) => adapter.upsertOne(action.account, state)
  ),
  on(AccountActions.addAccounts,
    (state, action) => adapter.addMany(action.accounts, state)
  ),
  on(AccountActions.upsertAccounts,
    (state, action) => adapter.upsertMany(action.accounts, state)
  ),
  on(AccountActions.updateAccount,
    (state, action) => adapter.updateOne(action.account, state)
  ),
  on(AccountActions.updateAccounts,
    (state, action) => adapter.updateMany(action.accounts, state)
  ),
  on(AccountActions.deleteAccount,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AccountActions.deleteAccounts,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AccountActions.loadAccountsSuccess,
    (state, action) => adapter.addAll(action.accounts, state)
  ),
  on(AccountActions.clearAccounts,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: AccountState | undefined, action: Action) {
  console.log('red :', action);
  return accountReducer(state, action);
}

export const selectAccountState = createFeatureSelector<AccountState>(accountsFeatureKey);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selectAccountState);

export const getSelectedAccountId = (state: AccountState) => state.selectedAccountId;

export const getSelectedAccount = createSelector(
  selectEntities,
  getSelectedAccountId,
  (entities, accountId) => accountId ? entities[accountId] : null
)
