import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input.component';
import { SharedModule } from '@tabularius/shared/ui';
import { FormGroup, FormControl } from '@angular/forms';
import { FormControlTextbox } from '../../models';
import { By } from '@angular/platform-browser';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  const key = 'testKey';
  const label = 'testLabel';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [InputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.group = new FormGroup({ testKey: new FormControl('') });
    component.control = new FormControlTextbox();
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
