import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainerComponent } from './login-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AccountFacade } from '../+state/account.facade';
import { ICredentials } from '@tabularius/shared/models';

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginContainerComponent],
      providers: [
        {
          provide: AccountFacade,
          useValue: {
            login(credentials: ICredentials) {}
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
