import { DynamicFormDirective } from './dynamic-form.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  template: `
    <ng-container
      tabuDynamicFormField
      [control]="formControl"
      [group]="form"
    ></ng-container>
  `
})
class TestDynamicFormDirectiveComponent {}

describe('DynamicFormDirective', () => {
  let component: TestDynamicFormDirectiveComponent;
  let fixture: ComponentFixture<TestDynamicFormDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDynamicFormDirectiveComponent, DynamicFormDirective]
    });
    fixture = TestBed.createComponent(TestDynamicFormDirectiveComponent);
    component = fixture.componentInstance;
  });

  it('TODO', () => {
    expect(1).toBe(1);
  });
});
