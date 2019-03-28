import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { SharedModule } from '@tabularius/shared/ui';
import { FormGroup, FormControl } from '@angular/forms';
import { FormControlCheckbox } from '../../models';
import { By } from '@angular/platform-browser';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  const key = 'testKey';
  const label = 'testLabel';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({ testKey: new FormControl('') });
    component.control = new FormControlCheckbox();
    component.control.key = key;
    component.control.label = label;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the label', () => {
    const text = fixture.debugElement.query(By.css('mat-checkbox'))
      .nativeElement.innerHTML;
    expect(text).toContain(label);
  });

  it('should contain the formControlName in attributes', () => {
    const attributes = fixture.debugElement.query(By.css('mat-checkbox'))
      .attributes;
    const text = attributes['ng-reflect-name'];
    expect(text).toContain(key);
  });
});
