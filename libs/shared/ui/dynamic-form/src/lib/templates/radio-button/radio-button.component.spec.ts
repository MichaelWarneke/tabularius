import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';
import { SharedModule } from '@tabularius/shared/ui';
import { FormGroup, FormControl } from '@angular/forms';
import { FormControlRadioButton } from '../../models';
import { By } from '@angular/platform-browser';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;
  const key = 'testKey';
  const label = 'testLabel';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [RadioButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({ testKey: new FormControl('') });
    component.control = new FormControlRadioButton();
    component.control.key = key;
    component.control.label = label;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the label', () => {
    const text = fixture.debugElement.query(By.css('label')).nativeElement
      .innerHTML;
    expect(text).toContain(label);
  });

  it('should contain the formControlName in attributes', () => {
    const attributes = fixture.debugElement.query(By.css('mat-radio-group'))
      .attributes;
    const text = attributes['ng-reflect-name'];
    expect(text).toContain(key);
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });
});
