import { Entity, ApiAuthState } from './api-auth.reducer';
import { apiAuthQuery } from './api-auth.selectors';

describe('ApiAuth Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getApiAuthId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createApiAuth = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      apiAuth: {
        list: [
          createApiAuth('PRODUCT-AAA'),
          createApiAuth('PRODUCT-BBB'),
          createApiAuth('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('ApiAuth Selectors', () => {
    it('getAllApiAuth() should return the list of ApiAuth', () => {
      const results = apiAuthQuery.getAllApiAuth(storeState);
      const selId = getApiAuthId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedApiAuth() should return the selected Entity', () => {
      const result = apiAuthQuery.getSelectedApiAuth(storeState);
      const selId = getApiAuthId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = apiAuthQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = apiAuthQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
