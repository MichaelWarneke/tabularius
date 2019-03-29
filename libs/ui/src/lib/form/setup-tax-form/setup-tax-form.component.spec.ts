import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SetupTaxFormComponent } from './setup-tax-form.component';
import { SharedModule } from '@tabularius/shared/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SetupTaxFormComponent', () => {
  let component: SetupTaxFormComponent;
  let fixture: ComponentFixture<SetupTaxFormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule],
      declarations: [SetupTaxFormComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTaxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });
});
