import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccountContainerComponent } from './app-account-container.component';

describe('AppAccountContainerComponent', () => {
  let component: AppAccountContainerComponent;
  let fixture: ComponentFixture<AppAccountContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAccountContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccountContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
