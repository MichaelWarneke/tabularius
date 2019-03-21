import { AccountAction, AccountActionTypes } from './account.actions';

export const ACCOUNT_FEATURE_KEY = 'account';

/**
 * Interface for the 'Account' data used in
 *  - AccountState, and
 *  - accountReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface AccountState {
  list: Entity[]; // list of Account; analogous to a sql normalized table
  selectedId?: string | number; // which Account record has been selected
  loaded: boolean; // has the Account list been loaded
  error?: any; // last none error (if any)
}

export interface AccountPartialState {
  readonly [ACCOUNT_FEATURE_KEY]: AccountState;
}

export const initialState: AccountState = {
  list: [],
  loaded: false
};

export function accountReducer(
  state: AccountState = initialState,
  action: AccountAction
): AccountState {
  switch (action.type) {
    case AccountActionTypes.AccountLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
