import { NgModule, Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { ApiAuthEffects } from './api-auth.effects';
import { ApiAuthFacade } from './api-auth.facade';

import { ApiAuthState, initialState, apiAuthReducer } from './api-auth.reducer';
import { ICredentials, IUser } from '@tabularius/shared/models';
import { NxModule } from '@nrwl/nx';
import { IAuthService } from '@tabularius/database';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

interface TestSchema {
  apiAuth: ApiAuthState;
}

const CREDENTIALS: ICredentials = { email: '123', password: '456' };
const USER: IUser = {
  uid: '123',
  email: 'emailTest',
  displayName: 'displayTest',
  photoURL: 'photoTest'
};
const REDIRECT_URL = 'New URL';

@Component({ template: '' })
class ExampleComponent {}
class IAuthServiceMock {
  getAuthUser(): Observable<IUser | null> {
    return of(USER);
  }
}

describe('ApiAuthFacade', () => {
  let facade: ApiAuthFacade;
  let store: Store<TestSchema>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('apiAuth', apiAuthReducer, { initialState }),
          EffectsModule.forFeature([ApiAuthEffects])
        ],
        providers: [
          ApiAuthFacade,
          { provide: IAuthService, useClass: IAuthServiceMock }
        ]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          RouterTestingModule.withRoutes([
            { path: 'dash', component: ExampleComponent }
          ]),
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ],
        declarations: [ExampleComponent]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ApiAuthFacade);
    });

    // TODO All tests
    /*
    it('ApiAuthChanged() should change user ', async done => {
      try {
        const user = await readFirst(facade.user$);

        expect(user).toBe(null);

        facade.login(CREDENTIALS);

        expect(user).toBe(null);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
*/
    it('fake', () => {
      expect(1).toBe(1);
    });
  });
});
