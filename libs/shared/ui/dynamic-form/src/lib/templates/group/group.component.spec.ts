import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupComponent } from './group.component';
import { SharedModule } from '@tabularius/shared/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControlBase } from '../../models';
import { FormGroup, FormControl } from '@angular/forms';

describe('GroupComponent', () => {
  let component: GroupComponent;
  let fixture: ComponentFixture<GroupComponent>;
  const form = new FormGroup({});
  form.addControl('id', new FormControlBase('idTest'));
  form.addControl('name', new FormControlBase('nameTest'));

  const formList_1 = new FormControlBase('idTest');
  formList_1.key = 'id';
  const formList_2 = new FormControlBase('nameTest');
  formList_2.key = 'name';
  const formList = [formList_1, formList_2];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [GroupComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should createList', () => {
    component.form = form;
    fixture.detectChanges();
    component.createList();
    fixture.detectChanges();
    expect(component.formlist[0].key).toEqual(formList[0].key);
    expect(component.formlist[0].value).toEqual(formList[0].value);
  });
});
