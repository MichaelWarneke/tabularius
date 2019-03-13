import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJournalContainerComponent } from './app-journal-container.component';

describe('AppJournalContainerComponent', () => {
  let component: AppJournalContainerComponent;
  let fixture: ComponentFixture<AppJournalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppJournalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppJournalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
