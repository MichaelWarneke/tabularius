import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSetupContainerComponent } from './app-setup-container.component';

describe('AppSetupContainerComponent', () => {
  let component: AppSetupContainerComponent;
  let fixture: ComponentFixture<AppSetupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSetupContainerComponent ]
    })
    .compileComponents();
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
