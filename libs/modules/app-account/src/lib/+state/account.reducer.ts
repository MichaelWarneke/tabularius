import { AccountActions, AccountActionTypes } from './account.actions';
import { ApiAuthActionTypes, ApiAuthActions } from '@tabularius/core/store';

export const ACCOUNT_FEATURE_KEY = 'account';

export interface AccountState {
  loading: boolean;
}

export interface AccountPartialState {
  readonly [ACCOUNT_FEATURE_KEY]: AccountState;
}

export const initialState: AccountState = {
  loading: false
};

export function accountReducer(
  state: AccountState = initialState,
  action: AccountActions | ApiAuthActions
): AccountState {
  switch (action.type) {
    case AccountActionTypes.Login:
      return {
        ...state,
        loading: true
      };
    case AccountActionTypes.Logout:
      return {
        ...state,
        loading: true
      };
    case AccountActionTypes.Update:
      return {
        ...state,
        loading: true
      };
    case AccountActionTypes.Success:
    case ApiAuthActionTypes.ApiAuthSuccess:
      return {
        ...state,
        loading: false
      };
    case AccountActionTypes.Error:
    case ApiAuthActionTypes.ApiAuthError:
      return {
        ...state,
        loading: false
      };
  }
  return state;
}
