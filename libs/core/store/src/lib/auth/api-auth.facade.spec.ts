import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { ApiAuthEffects } from './api-auth.effects';
import { ApiAuthFacade } from './api-auth.facade';

import { apiAuthQuery } from './api-auth.selectors';
import { LoadApiAuth, ApiAuthLoaded } from './api-auth.actions';
import {
  ApiAuthState,
  Entity,
  initialState,
  apiAuthReducer
} from './api-auth.reducer';

interface TestSchema {
  apiAuth: ApiAuthState;
}

describe('ApiAuthFacade', () => {
  let facade: ApiAuthFacade;
  let store: Store<TestSchema>;
  let createApiAuth;

  beforeEach(() => {
    createApiAuth = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('apiAuth', apiAuthReducer, { initialState }),
          EffectsModule.forFeature([ApiAuthEffects])
        ],
        providers: [ApiAuthFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ApiAuthFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allApiAuth$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allApiAuth$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ApiAuthLoaded` to manually submit list for state management
     */
    it('allApiAuth$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allApiAuth$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new ApiAuthLoaded([createApiAuth('AAA'), createApiAuth('BBB')])
        );

        list = await readFirst(facade.allApiAuth$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
