import { async, TestBed } from '@angular/core/testing';
import { AppReportsModule } from './app-reports.module';

describe('AppReportsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppReportsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppReportsModule).toBeDefined();
  });
});
