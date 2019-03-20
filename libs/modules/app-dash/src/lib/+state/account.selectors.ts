import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ACCOUNT_FEATURE_KEY, AccountState } from './account.reducer';

// Lookup the 'Account' feature state managed by NgRx
const getAccountState = createFeatureSelector<AccountState>(
  ACCOUNT_FEATURE_KEY
);

const getLoaded = createSelector(
  getAccountState,
  (state: AccountState) => state.loaded
);
const getError = createSelector(
  getAccountState,
  (state: AccountState) => state.error
);

const getAllAccount = createSelector(
  getAccountState,
  getLoaded,
  (state: AccountState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getAccountState,
  (state: AccountState) => state.selectedId
);
const getSelectedAccount = createSelector(
  getAllAccount,
  getSelectedId,
  (account, id) => {
    const result = account.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const accountQuery = {
  getLoaded,
  getError,
  getAllAccount,
  getSelectedAccount
};
