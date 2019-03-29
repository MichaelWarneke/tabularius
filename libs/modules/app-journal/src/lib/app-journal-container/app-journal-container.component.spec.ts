import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJournalContainerComponent } from './app-journal-container.component';
import { Component } from '@angular/core';

// tslint:disable-next-line:component-selector
@Component({ selector: 'tabu-journal-entry-form', template: '' })
export class StubJournalEntryFormComponent {}

describe('AppJournalContainerComponent', () => {
  let component: AppJournalContainerComponent;
  let fixture: ComponentFixture<AppJournalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppJournalContainerComponent,
        StubJournalEntryFormComponent
      ]
    }).compileComponents();
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
