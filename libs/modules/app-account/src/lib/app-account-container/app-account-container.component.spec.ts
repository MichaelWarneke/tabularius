import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccountContainerComponent } from './app-account-container.component';
import {
  Output,
  Input,
  EventEmitter,
  Component,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { IUser } from '@tabularius/shared/models';
import { ReplaySubject, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccountFacade } from '../+state/account.facade';

// tslint:disable-next-line:component-selector
@Component({ selector: 'tabu-account-user', template: '' })
class AccountUserStubComponent {
  @Output() save = new EventEmitter<IUser>();
  @Output() login = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  @Input() user: IUser | null = null;
}

describe('AppAccountContainerComponent', () => {
  let component: AppAccountContainerComponent;
  let fixture: ComponentFixture<AppAccountContainerComponent>;

  const onDestroy = new Subject<void>();
  const user$ = new ReplaySubject<IUser>();
  const testUser: IUser = {
    uid: '123',
    email: 'a@b.cd',
    displayName: 'Test',
    photoURL: 'url'
  };

  beforeEach(async(() => {
    of(testUser)
      .pipe(takeUntil(onDestroy))
      .subscribe(user$);

    TestBed.configureTestingModule({
      declarations: [AppAccountContainerComponent, AccountUserStubComponent],
      providers: [
        {
          provide: AccountFacade,
          useValue: {
            user$
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccountContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    onDestroy.next();
  });
});
