import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APIAUTH_FEATURE_KEY, ApiAuthState } from './api-auth.reducer';

// Lookup the 'ApiAuth' feature state managed by NgRx
const getApiAuthState = createFeatureSelector<ApiAuthState>(
  APIAUTH_FEATURE_KEY
);

const getAuthUser = createSelector(
  getApiAuthState,
  (state: ApiAuthState) => state.user
);

const getUserDisplayName = createSelector(
  getApiAuthState,
  getAuthUser,
  (state: ApiAuthState, user) => {
    return user ? (user.displayName ? user.displayName : null) : null;
  }
);

const getError = createSelector(
  getApiAuthState,
  (state: ApiAuthState) => state.errorMessage
);

const getIsAuth = createSelector(
  getApiAuthState,
  getAuthUser,
  (state: ApiAuthState, user) => {
    return user ? true : false;
  }
);

export const apiAuthQuery = {
  getAuthUser,
  getError,
  getIsAuth,
  getUserDisplayName
};
