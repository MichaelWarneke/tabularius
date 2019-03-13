import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReportsContainerComponent } from './app-reports-container.component';

describe('AppReportsContainerComponent', () => {
  let component: AppReportsContainerComponent;
  let fixture: ComponentFixture<AppReportsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReportsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReportsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
