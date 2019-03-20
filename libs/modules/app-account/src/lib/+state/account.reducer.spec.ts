import { Login } from './account.actions';
import { AccountState, initialState, accountReducer } from './account.reducer';

describe('Account Reducer', () => {
  beforeEach(() => {});

  describe('valid Account actions ', () => {
    it('login should change the loading to true', () => {
      const action = new Login({ email: 'Test', password: 'Test' });
      const result: AccountState = accountReducer(initialState, action);

      expect(result.loading).toBe(true);
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = accountReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
