import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUserComponent } from './account-user.component';
import { SharedModule } from '@tabularius/shared/ui';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AccountUserComponent', () => {
  let component: AccountUserComponent;
  let fixture: ComponentFixture<AccountUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule],
      declarations: [AccountUserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
