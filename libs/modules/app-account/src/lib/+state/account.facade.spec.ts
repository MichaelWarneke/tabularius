import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { AccountEffects } from './account.effects';
import { AccountFacade } from './account.facade';

import { accountQuery } from './account.selectors';
import { Login, Logout, Update, Success } from './account.actions';
import { AccountState, initialState, accountReducer } from './account.reducer';
import { ICredentials, IUser } from '@tabularius/shared/models';
import { ApiAuthFacade } from '@tabularius/core/store';
import { of } from 'rxjs';

interface TestSchema {
  account: AccountState;
}

describe('AccountFacade', () => {
  let facade: AccountFacade;
  let store: Store<TestSchema>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('account', accountReducer, { initialState }),
          EffectsModule.forFeature([AccountEffects])
        ],
        providers: [
          AccountFacade,
          {
            provide: ApiAuthFacade,
            useValue: {
              user$: of({ uid: '123', email: '456' }),
              error$: of('Error')
            }
          }
        ]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
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
    it('login() should return null user with loading == true', async done => {
      try {
        let loading = await readFirst(facade.loading$);

        expect(loading).toBe(false);

        const credentials: ICredentials = {
          email: 'emailTest',
          password: 'passTest'
        };
        facade.login(credentials);

        loading = await readFirst(facade.loading$);

        expect(loading).toBe(true);

        store.dispatch(new Success());

        loading = await readFirst(facade.loading$);

        expect(loading).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('logout() should return null user with loading == true', async done => {
      try {
        let loading = await readFirst(facade.loading$);

        expect(loading).toBe(false);

        facade.logout();

        loading = await readFirst(facade.loading$);

        expect(loading).toBe(true);

        store.dispatch(new Success());

        loading = await readFirst(facade.loading$);

        expect(loading).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('update() should return null user with loading == true', async done => {
      try {
        let loading = await readFirst(facade.loading$);

        expect(loading).toBe(false);

        const user: IUser = { uid: 'uidTest', email: 'emailTest' };
        facade.update(user);

        loading = await readFirst(facade.loading$);

        expect(loading).toBe(true);

        store.dispatch(new Success());

        loading = await readFirst(facade.loading$);

        expect(loading).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
