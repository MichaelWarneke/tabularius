import { ApiAuthState } from './api-auth.reducer';
import { apiAuthQuery } from './api-auth.selectors';
import { State } from '@ngrx/store';
import { IUser } from '@tabularius/shared/models';

describe('ApiAuth Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const DISPLAY_NAME = 'TEST DISPLAY NAME';
  const REDIRECT_URL = 'NEW URL';
  const USER: IUser = {
    uid: '123',
    email: 'emailTest',
    displayName: DISPLAY_NAME,
    photoURL: 'photoTest'
  };

  let storeState: any;

  beforeEach(() => {
    storeState = {
      apiAuth: {
        user: USER,
        errorMessage: ERROR_MSG,
        redirectUrl: REDIRECT_URL
      }
    };
  });

  describe('ApiAuth Selectors', () => {
    it('Selectors shall return initial state values', () => {
      const user = apiAuthQuery.getAuthUser(storeState);
      const errorMessage = apiAuthQuery.getError(storeState);
      const redirectUrl = apiAuthQuery.getRedirectUrl(storeState);

      expect(user).toBe(USER);
      expect(errorMessage).toBe(ERROR_MSG);
      expect(redirectUrl).toBe(REDIRECT_URL);
    });

    it('getIsAuth shall return auth status', () => {
      let isAuth = apiAuthQuery.getIsAuth(storeState);

      expect(isAuth).toBe(true);

      storeState = {
        apiAuth: {
          user: null,
          errorMessage: ERROR_MSG,
          redirectUrl: REDIRECT_URL
        }
      };

      isAuth = apiAuthQuery.getIsAuth(storeState);

      expect(isAuth).toBe(false);
    });

    it('getIsAuth shall return auth status', () => {
      const displayName = apiAuthQuery.getUserDisplayName(storeState);

      expect(displayName).toBe(DISPLAY_NAME);
    });
  });
});
