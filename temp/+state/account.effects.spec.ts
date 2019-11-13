import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/angular';
import { DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AccountEffects } from './account.effects';
import { LoadAccount, AccountLoaded } from './account.actions';

describe('AccountEffects', () => {
  let actions: Observable<any>;
  let effects: AccountEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        AccountEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(AccountEffects);
  });

  describe('loadAccount$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadAccount() });
      expect(effects.loadAccount$).toBeObservable(
        hot('-a-|', { a: new AccountLoaded([]) })
      );
    });
  });
});
