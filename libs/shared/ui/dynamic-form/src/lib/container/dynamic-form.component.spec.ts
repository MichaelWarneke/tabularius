import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormBuilder } from '@angular/forms';
import { SharedModule } from '@tabularius/shared/ui';
import {
  GroupStubComponent,
  FormButtonStubComponent
} from '../templates/test-stub.components';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        DynamicFormComponent,
        GroupStubComponent,
        FormButtonStubComponent
      ],
      providers: [FormBuilder]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
