import { AccountLoaded } from './account.actions';
import {
  AccountState,
  Entity,
  initialState,
  accountReducer
} from './account.reducer';

describe('Account Reducer', () => {
  const getAccountId = it => it['id'];
  let createAccount;

  beforeEach(() => {
    createAccount = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Account actions ', () => {
    it('should return set the list of known Account', () => {
      const accounts = [
        createAccount('PRODUCT-AAA'),
        createAccount('PRODUCT-zzz')
      ];
      const action = new AccountLoaded(accounts);
      const result: AccountState = accountReducer(initialState, action);
      const selId: string = getAccountId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
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
