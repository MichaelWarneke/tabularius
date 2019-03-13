import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppImportContainerComponent } from './app-import-container.component';

describe('AppImportContainerComponent', () => {
  let component: AppImportContainerComponent;
  let fixture: ComponentFixture<AppImportContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppImportContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppImportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
