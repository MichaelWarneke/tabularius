import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { hot } from '@nrwl/nx/testing';

import { AccountEffects } from './account.effects';
import { Login, Logout, Update } from './account.actions';
import {
  ApiAuthLogin,
  ApiAuthLogout,
  ApiAuthUpdateUser
} from '@tabularius/core/store';
import { ICredentials, IUser } from '@tabularius/shared/models';

describe('AccountEffects', () => {
  let actions: Observable<any>;
  let effects: AccountEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [AccountEffects, provideMockActions(() => actions)]
    });

    effects = TestBed.get(AccountEffects);
  });

  describe('login$', () => {
    const credentials: ICredentials = { email: 'test', password: 'test' };
    it('should work', () => {
      actions = hot('-a-|', { a: new Login(credentials) });
      expect(effects.login$).toBeObservable(
        hot('-a-|', { a: new ApiAuthLogin(credentials) })
      );
    });
  });

  describe('logout$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new Logout() });
      expect(effects.logout$).toBeObservable(
        hot('-a-|', { a: new ApiAuthLogout() })
      );
    });
  });

  describe('update$', () => {
    const user: IUser = {
      uid: 'uidTest',
      email: 'emailTest',
      displayName: 'nameTest',
      photoURL: 'photoTest'
    };
    it('should work', () => {
      actions = hot('-a-|', { a: new Update(user) });
      expect(effects.update$).toBeObservable(
        hot('-a-|', { a: new ApiAuthUpdateUser(user) })
      );
    });
  });
});
