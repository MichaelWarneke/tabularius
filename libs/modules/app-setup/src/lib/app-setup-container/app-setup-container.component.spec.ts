import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppSetupContainerComponent } from './app-setup-container.component';
import { SharedUiModule } from '@tabularius/shared/ui';
import { SetupTaxFormModule } from '@tabularius/ui';

describe('AppSetupContainerComponent', () => {
  let component: AppSetupContainerComponent;
  let fixture: ComponentFixture<AppSetupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiModule, NoopAnimationsModule, SetupTaxFormModule],
      declarations: [AppSetupContainerComponent]
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
