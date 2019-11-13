import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select.component';
import { FormGroup, FormControl } from '@angular/forms';
import { FormControlSelect } from '../../models';
import { SharedModule } from '@tabularius/shared/ui';
import { By } from '@angular/platform-browser';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  const key = 'testKey';
  const label = 'testLabel';
  const options = ['one', 'two', 'three'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [SelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({ testKey: new FormControl('') });
    component.control = new FormControlSelect();
    component.control.key = key;
    component.control.label = label;
    component.control.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the label', () => {
    const attributes = fixture.debugElement.query(By.css('mat-select'))
      .attributes;
    const text = attributes['placeholder'];
  });

  it('should contain the formControlName in attributes', () => {
    const attributes = fixture.debugElement.query(By.css('mat-select'))
      .attributes;
    const text = attributes['ng-reflect-name'];
    expect(text).toContain(key);
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });
});
