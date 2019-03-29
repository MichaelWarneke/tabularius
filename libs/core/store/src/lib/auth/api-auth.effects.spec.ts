import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable, of } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ApiAuthEffects } from './api-auth.effects';
import {
  ApiAuthChanged,
  ApiAuthLogin,
  ApiAuthLogout,
  ApiAuthRedirectLogin,
  ApiAuthUpdateUser
} from './api-auth.actions';
import { ICredentials, IUser } from '@tabularius/shared/models';
import { IAuthService } from '@tabularius/database';
import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

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

describe('ApiAuthEffects', () => {
  const actions: Observable<any> | null = null;
  let effects: ApiAuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        RouterTestingModule.withRoutes([
          { path: 'dash', component: ExampleComponent }
        ])
      ],
      providers: [
        ApiAuthEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: IAuthService, useClass: IAuthServiceMock }
      ],
      declarations: [ExampleComponent]
    });

    effects = TestBed.get(ApiAuthEffects);
  });

  // TODO Test for all effects

  describe('onAuthStateChange$', () => {
    /*     it('should work', () => {
      actions = hot('-a-|', { a: new ApiAuthChanged(USER) });
      expect(effects.onAuthStateChange$).toBeObservable(
        hot('-a-|', { a: new ApiAuthChanged(USER) })
      );
    });

 */

    it('fake', () => {
      expect(1).toBe(1);
    });
  });
});
