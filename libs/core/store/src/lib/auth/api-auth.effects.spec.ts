import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ApiAuthEffects } from './api-auth.effects';
import { LoadApiAuth, ApiAuthLoaded } from './api-auth.actions';

describe('ApiAuthEffects', () => {
  let actions: Observable<any>;
  let effects: ApiAuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ApiAuthEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ApiAuthEffects);
  });

  describe('loadApiAuth$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadApiAuth() });
      expect(effects.loadApiAuth$).toBeObservable(
        hot('-a-|', { a: new ApiAuthLoaded([]) })
      );
    });
  });
});
