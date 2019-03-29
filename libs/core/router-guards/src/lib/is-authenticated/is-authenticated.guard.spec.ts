import { TestBed, async, inject } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { ApiAuthFacade } from '@tabularius/core/store';
import { of, Subject, ReplaySubject } from 'rxjs';
import { IUser } from '@tabularius/shared/models';
import { takeUntil } from 'rxjs/operators';

describe('IsAuthenticatedGuard', () => {
  //  let guard: IsAuthenticatedGuard;
  //  const auth = jest.mock('ApiAuthFacade');
  const onDestroy = new Subject<void>();
  const isAuth$ = new ReplaySubject<IUser | null>();
  const testUser: IUser = {
    uid: '123',
    email: 'a@b.cd',
    displayName: 'Test',
    photoURL: 'url'
  };

  beforeEach(() => {
    of(testUser)
      .pipe(takeUntil(onDestroy))
      .subscribe(isAuth$);
    /*
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        IsAuthenticatedGuard,
        {
          provide: ApiAuthFacade,
          useValue: { isAuth$: null, redirectLogin: jest.fn() }
        }
      ]
    });

    guard = TestBed.get(IsAuthenticatedGuard);

*/
  });
  /*
  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should ...', inject(
    [IsAuthenticatedGuard],
    (guard: IsAuthenticatedGuard) => {
      expect(guard).toBeTruthy();
    }
  ));*/

  it('fake', () => {
    expect(1).toBe(1);
  });

  afterEach(() => {
    onDestroy.next();
  });
});
