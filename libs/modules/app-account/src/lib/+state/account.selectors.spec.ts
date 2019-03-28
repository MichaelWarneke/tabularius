import { AccountState } from './account.reducer';
import { accountQuery } from './account.selectors';

describe('Account Selectors', () => {
  const ERROR_MSG = 'No Error Available';

  let storeState: any;

  beforeEach(() => {
    storeState = {
      account: {
        loading: false
      }
    };
  });

  describe('Account Selectors', () => {
    it('getAccountState() should return the state', () => {
      const results = accountQuery.getAccountState(storeState);
      expect(results.loading).toBe(false);
    });

    it('getLoading() should return the loading state', () => {
      const result = accountQuery.getLoading(storeState);
      expect(result).toBe(false);
    });

    it('getLoading() should return modified state', () => {
      storeState.account.loading = true;
      const result = accountQuery.getLoading(storeState);
      expect(result).toBe(true);
    });
  });
});
