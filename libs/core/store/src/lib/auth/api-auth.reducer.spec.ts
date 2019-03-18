import { ApiAuthLoaded } from './api-auth.actions';
import {
  ApiAuthState,
  Entity,
  initialState,
  apiAuthReducer
} from './api-auth.reducer';

describe('ApiAuth Reducer', () => {
  const getApiAuthId = it => it['id'];
  let createApiAuth;

  beforeEach(() => {
    createApiAuth = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ApiAuth actions ', () => {
    it('should return set the list of known ApiAuth', () => {
      const apiAuths = [
        createApiAuth('PRODUCT-AAA'),
        createApiAuth('PRODUCT-zzz')
      ];
      const action = new ApiAuthLoaded(apiAuths);
      const result: ApiAuthState = apiAuthReducer(initialState, action);
      const selId: string = getApiAuthId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
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
