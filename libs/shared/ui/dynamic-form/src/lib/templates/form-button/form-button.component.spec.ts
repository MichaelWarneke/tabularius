import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonComponent } from './form-button.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormButtonComponent', () => {
  let component: FormButtonComponent;
  let fixture: ComponentFixture<FormButtonComponent>;
  const text = 'testText';
  const color = 'warn';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormButtonComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormButtonComponent);
    component = fixture.componentInstance;
    component.text = text;
    component.color = color;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the text', () => {
    const innerText = fixture.debugElement.query(By.css('button')).nativeElement
      .innerHTML;
    expect(innerText).toContain(text);
  });

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });
});
