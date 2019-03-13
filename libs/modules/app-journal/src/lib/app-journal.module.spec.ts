import { async, TestBed } from '@angular/core/testing';
import { AppJournalModule } from './app-journal.module';

describe('AppJournalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppJournalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppJournalModule).toBeDefined();
  });
});
