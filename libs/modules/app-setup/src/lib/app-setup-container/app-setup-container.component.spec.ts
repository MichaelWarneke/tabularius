import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppSetupContainerComponent } from './app-setup-container.component';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ITax } from '@tabularius/shared/models';

// tslint:disable-next-line:component-selector
@Component({ selector: 'tabu-setup-tax-form', template: '' })
class SetupTaxFormStubComponent {
  @Output() saveTax = new EventEmitter<ITax>();
  @Output() deleteTax = new EventEmitter<string>();
  @Input() account: ITax | null = null;
}

describe('AppSetupContainerComponent', () => {
  let component: AppSetupContainerComponent;
  let fixture: ComponentFixture<AppSetupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppSetupContainerComponent, SetupTaxFormStubComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSetupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
