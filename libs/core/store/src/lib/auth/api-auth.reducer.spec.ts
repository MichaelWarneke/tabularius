import {
  ApiAuthLogin,
  ApiAuthSetRedirectUrl,
  ApiAuthChanged
} from './api-auth.actions';
import { ApiAuthState, initialState, apiAuthReducer } from './api-auth.reducer';
import { ICredentials, IUser } from '@tabularius/shared/models';

describe('ApiAuth Reducer', () => {
  const CREDENTIALS: ICredentials = { email: '123', password: '456' };
  const USER: IUser = {
    uid: '123',
    email: 'emailTest',
    displayName: 'displayTest',
    photoURL: 'photoTest'
  };
  const REDIRECT_URL = 'New URL';

  beforeEach(() => {});

  describe('valid ApiAuth actions ', () => {
    it('should ApiAuthSetRedirectUrl set redirectUrl', () => {
      const action = new ApiAuthSetRedirectUrl(REDIRECT_URL);
      const result: ApiAuthState = apiAuthReducer(initialState, action);

      expect(result.redirectUrl).toBe(REDIRECT_URL);
    });

    it('should ApiAuthChanged set user', () => {
      const action = new ApiAuthChanged(USER);
      const result: ApiAuthState = apiAuthReducer(initialState, action);

      expect(result.user).toBe(USER);
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = apiAuthReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
