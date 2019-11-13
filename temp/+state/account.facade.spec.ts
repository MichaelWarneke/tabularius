import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { AccountEffects } from './account.effects';
import { AccountFacade } from './account.facade';

import { accountQuery } from './account.selectors';
import { LoadAccount, AccountLoaded } from './account.actions';
import {
  AccountState,
  Entity,
  initialState,
  accountReducer
} from './account.reducer';

interface TestSchema {
  account: AccountState;
}

describe('AccountFacade', () => {
  let facade: AccountFacade;
  let store: Store<TestSchema>;
  let createAccount;

  beforeEach(() => {
    createAccount = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('account', accountReducer, { initialState }),
          EffectsModule.forFeature([AccountEffects])
        ],
        providers: [AccountFacade]
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
      facade = TestBed.get(AccountFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allAccount$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allAccount$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `AccountLoaded` to manually submit list for state management
     */
    it('allAccount$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allAccount$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new AccountLoaded([createAccount('AAA'), createAccount('BBB')])
        );

        list = await readFirst(facade.allAccount$);
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
