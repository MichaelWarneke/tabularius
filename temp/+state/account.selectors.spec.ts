import { Entity, AccountState } from './account.reducer';
import { accountQuery } from './account.selectors';

describe('Account Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAccountId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createAccount = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      account: {
        list: [
          createAccount('PRODUCT-AAA'),
          createAccount('PRODUCT-BBB'),
          createAccount('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Account Selectors', () => {
    it('getAllAccount() should return the list of Account', () => {
      const results = accountQuery.getAllAccount(storeState);
      const selId = getAccountId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedAccount() should return the selected Entity', () => {
      const result = accountQuery.getSelectedAccount(storeState);
      const selId = getAccountId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = accountQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = accountQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
