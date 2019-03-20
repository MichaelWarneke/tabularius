import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ACCOUNT_FEATURE_KEY, AccountState } from './account.reducer';

// Lookup the 'Account' feature state managed by NgRx
const getAccountState = createFeatureSelector<AccountState>(
  ACCOUNT_FEATURE_KEY
);

const getLoading = createSelector(
  getAccountState,
  (state: AccountState) => state.loading
);

export const accountQuery = {
  getAccountState,
  getLoading
};
