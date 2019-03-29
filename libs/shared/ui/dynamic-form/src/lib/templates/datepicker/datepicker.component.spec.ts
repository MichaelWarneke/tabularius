import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './datepicker.component';
import { FormGroup, FormControl } from '@angular/forms';
import { FormControlDate } from '../../models';
import { SharedModule } from '@tabularius/shared/ui';
import { MatNativeDateModule } from '@angular/material';
import { By } from '@angular/platform-browser';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;
  const key = 'testKey';
  const label = 'testLabel';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule, MatNativeDateModule],
      declarations: [DatepickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({ testKey: new FormControl('') });
    component.control = new FormControlDate();
    component.control.key = key;
    component.control.label = label;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the label', () => {
    const attributes = fixture.debugElement.query(By.css('input')).attributes;
    const text = attributes['placeholder'];
    expect(text).toContain(label);
  });

  it('should contain the formControlName in attributes', () => {
    const attributes = fixture.debugElement.query(By.css('input')).attributes;
    const text = attributes['ng-reflect-name'];
    expect(text).toContain(key);
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });
});
