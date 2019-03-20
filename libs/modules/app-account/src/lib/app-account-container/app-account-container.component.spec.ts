import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccountContainerComponent } from './app-account-container.component';
import { Output, Input, EventEmitter, Component } from '@angular/core';
import { IUser } from '@tabularius/shared/models';
import { ApiAuthFacade } from '@tabularius/core/store';
import { ReplaySubject, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
          provide: ApiAuthFacade,
          useValue: {
            user$
          }
        }
      ]
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
});
