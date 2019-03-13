import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashContainerComponent } from './app-dash-container.component';

describe('AppDashContainerComponent', () => {
  let component: AppDashContainerComponent;
  let fixture: ComponentFixture<AppDashContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDashContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDashContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
