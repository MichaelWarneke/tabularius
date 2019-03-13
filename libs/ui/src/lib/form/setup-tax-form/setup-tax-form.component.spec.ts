import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTaxFormComponent } from './setup-tax-form.component';

describe('SetupTaxFormComponent', () => {
  let component: SetupTaxFormComponent;
  let fixture: ComponentFixture<SetupTaxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupTaxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTaxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
