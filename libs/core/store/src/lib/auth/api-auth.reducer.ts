import { ApiAuthActions, ApiAuthActionTypes } from './api-auth.actions';
import { IUser } from '@tabularius/shared/models';

export const APIAUTH_FEATURE_KEY = 'apiAuth';

export interface ApiAuthState {
  user: IUser | null; // list of ApiAuth; analogous to a sql normalized table
  errorMessage: string | null; // last none error (if any)
  redirectUrl: string | null;
}

export interface ApiAuthPartialState {
  readonly [APIAUTH_FEATURE_KEY]: ApiAuthState;
}

export const initialState: ApiAuthState = {
  user: null,
  errorMessage: null,
  redirectUrl: null
};

export function apiAuthReducer(
  state: ApiAuthState = initialState,
  action: ApiAuthActions
): ApiAuthState {
  switch (action.type) {
    case ApiAuthActionTypes.ApiAuthChanged: {
      state = {
        ...state,
        user: action.user
      };
      break;
    }
    case ApiAuthActionTypes.ApiAuthSetRedirectUrl: {
      state = {
        ...state,
        redirectUrl: action.url
      };
      break;
    }
    case ApiAuthActionTypes.ApiAuthError: {
      state = {
        ...state,
        errorMessage: action.message
      };
      break;
    }
    case ApiAuthActionTypes.ApiAuthSuccess: {
      state = {
        ...state,
        errorMessage: null
      };
      break;
    }
  }
  return state;
}
